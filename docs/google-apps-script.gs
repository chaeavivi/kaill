/**
 * 한국AI평생교육협회 — 문의 폼 수신 스크립트 (Google Apps Script)
 *
 * 역할: 웹사이트의 문의 폼(B2B 출강 / 강사양성 / 일반)에서 보낸 데이터를
 *       구글 시트에 한 줄씩 자동 기록하고, (선택) 지정 이메일로 알림을 보냅니다.
 *
 * 설정 방법은 docs/문의폼-구글연동-설정.md 를 참고하세요.
 */

// 알림을 받을 이메일 (비워두면 이메일 알림 없이 시트 기록만).
var NOTIFY_EMAIL = '';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('문의') ||
                SpreadsheetApp.getActiveSpreadsheet().insertSheet('문의');

    // 헤더가 없으면 1회 생성
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        '접수시각', '문의유형',
        '담당자/이름', '연락처', '이메일',
        '기관/회사', '인원', '희망주제', '희망일정',
        '요청/문의내용', '원본(JSON)'
      ]);
    }

    sheet.appendRow([
      new Date(),
      data.typeLabel || data.type || '',
      data.contactName || data.name || '',
      data.phone || '',
      data.email || '',
      data.org || '',
      data.headcount || '',
      data.topic || '',
      data.schedule || '',
      data.message || '',
      JSON.stringify(data)
    ]);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(
        NOTIFY_EMAIL,
        '[문의 접수] ' + (data.typeLabel || data.type || ''),
        Object.keys(data).map(function (k) { return k + ': ' + data[k]; }).join('\n')
      );
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
