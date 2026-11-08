/**
 * 한국AI평생교육협회 — 출강 후기 수신·공개 스크립트 (Google Apps Script)
 *
 * 역할
 *  - 후기 작성 페이지(/review/)에서 보낸 별점·후기를 시트에 저장
 *  - 욕설·광고·장난 글은 자동으로 '차단' 처리 (홈페이지에 안 나옴, 기록은 남김)
 *  - 홈페이지 '출강 후기'에는 '공개' 상태인 후기만 최신순으로 내려줌
 *
 * ※ 문의 폼 스크립트와는 완전히 별개입니다. (문의 폼 동작에 영향 없음)
 * 설정 방법: docs/후기-구글연동-설정.md
 *
 * 관리 팁: 이상한 후기가 보이면 시트의 'F열(상태)'을 '숨김'으로 바꾸면 즉시 내려갑니다.
 */

var SHEET_NAME = '후기';
var MAX_LIST = 60; // 홈페이지에 내려줄 최대 개수

// ───────── 자동 필터 ─────────

// 욕설·비하 (띄어쓰기·특수문자를 지운 뒤 검사)
var BAD_WORDS = [
  '시발', '씨발', '씨바', '씨팔', '시팔', 'ㅅㅂ', 'ㅆㅂ', 'ㅅ ㅂ', '쓰발', '싀발', '십새',
  '병신', '븅신', '빙신', 'ㅂㅅ', '개새', '개색', '개쌔', '새끼', '좆', '존나', '졸라', 'ㅈㄴ',
  '지랄', 'ㅈㄹ', '미친놈', '미친년', '미친새', '닥쳐', '꺼져', '썅', '엿먹', '니미', '느금',
  '애미', '애비', '창녀', '걸레', '등신', '쓰레기강사', '호구',
  'fuck', 'shit', 'bitch', 'asshole'
];

// 광고·홍보성 표현
var AD_WORDS = [
  '오픈채팅', '오픈톡', '카톡', '카카오톡', '텔레그램', '라인아이디', '디엠', 'dm주세요',
  '부업', '재택알바', '수익보장', '고수익', '월천', '대출', '카지노', '토토', '바카라', '슬롯',
  '홀덤', '코인리딩', '리딩방', '주식리딩', '조건만남', '할인코드', '추천인코드', '쿠폰번호',
  '구독부탁', '팔로우부탁', '맞팔'
];

function normalize_(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[\s​]+/g, '')
    .replace(/[~!@#$%^&*()_+=\[\]{}|\\;:'",.<>/?`\-·…]/g, '');
}

/** 후기 검사 — 통과면 '' , 차단이면 사유 문자열 */
function checkReview_(text, rating) {
  var raw = String(text || '').trim();
  if (!(rating >= 1 && rating <= 5)) return '별점 오류';
  if (raw.length < 5) return '너무 짧음';
  if (raw.length > 1000) return '너무 김';

  var n = normalize_(raw);
  for (var i = 0; i < BAD_WORDS.length; i++) {
    if (n.indexOf(normalize_(BAD_WORDS[i])) !== -1) return '욕설·비하';
  }
  for (var j = 0; j < AD_WORDS.length; j++) {
    if (n.indexOf(normalize_(AD_WORDS[j])) !== -1) return '광고';
  }
  // 링크·연락처
  if (/(https?:\/\/|www\.|\.(com|net|kr|co|io|me|ly|xyz|shop)(\/|\b)|bit\.ly|open\.kakao)/i.test(raw)) return '링크';
  if (/01[016789][\s.\-]?\d{3,4}[\s.\-]?\d{4}/.test(raw)) return '전화번호';
  if (/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}/i.test(raw)) return '이메일';

  // 장난: 의미 있는 글자(한글 완성형·영문·숫자)가 5자 미만이거나, 같은 글자 반복 위주
  var meaningful = raw.replace(/[^가-힣a-zA-Z0-9]/g, '');
  if (meaningful.length < 5) return '장난';
  if (/(.)\1{7,}/.test(meaningful)) return '장난';
  var uniq = {};
  for (var k = 0; k < meaningful.length; k++) uniq[meaningful.charAt(k)] = 1;
  if (meaningful.length >= 8 && Object.keys(uniq).length <= 2) return '장난';

  return '';
}

// ───────── 시트 ─────────

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(['작성시각', '별점', '후기', '자동검사', '비고', '상태']);
    sh.setFrozenRows(1);
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// 후기 저장
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var data = JSON.parse(e.postData.contents);
    // 스팸봇 함정 칸이 채워져 있으면 조용히 무시
    if (data.website) return json_({ ok: true, published: false });

    var rating = Number(data.rating);
    var text = String(data.text || '').trim().slice(0, 1000);
    var reason = checkReview_(text, rating);

    lock.waitLock(10000);
    var sh = sheet_();

    // 같은 내용 중복 등록 방지 (최근 300건)
    if (!reason && sh.getLastRow() > 1) {
      var start = Math.max(2, sh.getLastRow() - 299);
      var recent = sh.getRange(start, 3, sh.getLastRow() - start + 1, 1).getValues();
      var key = normalize_(text);
      for (var i = 0; i < recent.length; i++) {
        if (normalize_(recent[i][0]) === key) { reason = '중복'; break; }
      }
    }

    var status = reason ? '차단' : '공개';
    // 시트에서 수식으로 해석되지 않도록 작은따옴표 접두
    var safeText = /^[=+\-@]/.test(text) ? "'" + text : text;
    sh.appendRow([new Date(), rating || '', safeText, reason ? '차단: ' + reason : '통과', '', status]);

    return json_({ ok: true, published: !reason });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

// 공개 후기 목록 (홈페이지가 읽어감)
function doGet() {
  var sh = sheet_();
  var last = sh.getLastRow();
  var list = [];
  var sum = 0;
  var count = 0;
  if (last > 1) {
    var rows = sh.getRange(2, 1, last - 1, 6).getValues();
    for (var i = rows.length - 1; i >= 0; i--) {
      var r = rows[i];
      if (String(r[5]).trim() !== '공개') continue;
      var rating = Number(r[1]) || 0;
      sum += rating;
      count++;
      if (list.length < MAX_LIST) {
        var d = r[0] instanceof Date ? r[0] : new Date(r[0]);
        list.push({
          rating: rating,
          text: String(r[2]).replace(/^'/, ''),
          date: Utilities.formatDate(d, 'Asia/Seoul', 'yyyy.MM.dd')
        });
      }
    }
  }
  return json_({
    count: count,
    average: count ? Math.round((sum / count) * 10) / 10 : 0,
    reviews: list
  });
}
