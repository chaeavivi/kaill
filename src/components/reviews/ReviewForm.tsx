'use client';

import Link from 'next/link';
import { useState } from 'react';
import { submitReview, reviewsEnabled } from '@/lib/reviews';

const LABELS = ['', '아쉬웠어요', '그저 그랬어요', '보통이에요', '좋았어요', '최고였어요'];

// 후기 작성 폼 — 별점 + 후기(자유 분량). 개인정보는 받지 않음.
export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [trap, setTrap] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [published, setPublished] = useState<boolean | null>(null);
  const [error, setError] = useState('');

  const tooShort = text.trim().length < 5;
  const canSubmit = rating > 0 && !tooShort && state !== 'sending';

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setState('sending');
    setError('');
    try {
      const r = await submitReview({ rating, text: text.trim(), website: trap });
      setPublished(r.published);
      setState('done');
    } catch (err) {
      setError(err instanceof Error ? err.message : '전송 중 문제가 생겼습니다.');
      setState('error');
    }
  };

  if (!reviewsEnabled) {
    return (
      <div className="rounded-xl border border-navy-100 bg-navy-50 p-6 text-center text-sm text-navy-600">
        후기 작성 기능을 준비하고 있습니다. 잠시 후 다시 이용해 주세요.
      </div>
    );
  }

  if (state === 'done') {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <div className="text-4xl" aria-hidden>
          🙏
        </div>
        <h2 className="mt-3 text-xl font-bold text-navy-950">소중한 후기 감사합니다</h2>
        <p className="mt-2 text-sm leading-relaxed text-navy-600">
          {published === false
            ? '작성하신 내용 중 게시 기준(욕설·광고·연락처 등)에 맞지 않는 부분이 있어 홈페이지에는 게시되지 않았습니다.'
            : '남겨주신 후기는 협회 홈페이지 ‘출강 후기’에 게시됩니다.'}
        </p>
        <Link href="/dispatch/#reviews" className="btn-secondary mt-6">
          출강 후기 보러 가기
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      {/* 별점 */}
      <fieldset>
        <legend className="text-[15px] font-bold text-navy-950">
          강의는 어떠셨나요? <span className="text-accent-dark">*</span>
        </legend>
        <div className="mt-3 flex items-center gap-1" role="radiogroup" aria-label="별점 선택">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              type="button"
              role="radio"
              aria-checked={rating === i}
              aria-label={`${i}점`}
              onClick={() => setRating(i)}
              className="p-1 transition active:scale-90"
            >
              <svg
                viewBox="0 0 20 20"
                className={`h-11 w-11 ${i <= rating ? 'text-amber-400' : 'text-navy-200'}`}
                fill="currentColor"
                aria-hidden
              >
                <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6z" />
              </svg>
            </button>
          ))}
        </div>
        <p className="mt-1 h-5 text-sm font-medium text-navy-500">{LABELS[rating]}</p>
      </fieldset>

      {/* 후기 */}
      <div>
        <label htmlFor="review-text" className="text-[15px] font-bold text-navy-950">
          후기 <span className="text-accent-dark">*</span>
        </label>
        <textarea
          id="review-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={1000}
          rows={6}
          placeholder="좋았던 점, 아쉬웠던 점을 자유롭게 남겨 주세요."
          className="field-input mt-3 resize-y text-[15px] leading-relaxed"
        />
        <div className="mt-1 flex justify-between text-xs text-navy-400">
          <span>{text.length > 0 && tooShort ? '5자 이상 적어 주세요.' : ''}</span>
          <span>{text.length} / 1000</span>
        </div>
      </div>

      {/* 스팸봇 함정 칸 (사람에게는 보이지 않음) */}
      <div className="hidden" aria-hidden>
        <label>
          웹사이트
          <input tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
        </label>
      </div>

      {state === 'error' && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {error} 잠시 후 다시 시도해 주세요.
        </p>
      )}

      <button type="submit" disabled={!canSubmit} className="btn-primary w-full !py-4 !text-base disabled:cursor-not-allowed disabled:opacity-40">
        {state === 'sending' ? '등록 중…' : '후기 남기기'}
      </button>

      <p className="text-center text-xs leading-relaxed text-navy-400">
        이름·연락처 등 개인정보는 받지 않습니다.
        <br />
        작성하신 후기는 홈페이지에 바로 게시되며, 욕설·광고·연락처가 포함된 글은 자동으로 제외됩니다.
      </p>
    </form>
  );
}
