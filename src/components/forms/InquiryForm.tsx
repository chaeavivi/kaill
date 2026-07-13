'use client';

import { useState } from 'react';
import { submitInquiry } from '@/lib/submitInquiry';
import { Field, TextArea, SubmitButton, SuccessPanel, ErrorNote } from './formParts';

// B2B 출강 문의 폼 — 필수는 최소화(담당자·연락처·요청내용), 나머지는 선택.
export default function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fields: Record<string, string> = {};
    data.forEach((v, k) => (fields[k] = String(v)));

    setStatus('pending');
    try {
      await submitInquiry({ type: 'dispatch', fields });
      setStatus('done');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') return <SuccessPanel onReset={() => setStatus('idle')} />;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* 필수 최소 */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="담당자명" name="contactName" required placeholder="홍길동" />
        <Field label="연락처" name="phone" type="tel" required placeholder="010-0000-0000" />
      </div>
      <Field label="이메일" name="email" type="email" required placeholder="name@company.com" />
      <TextArea
        label="요청 내용"
        name="message"
        required
        placeholder="교육 목적, 대상, 대략적인 인원·일정 등 자유롭게 남겨주세요."
        rows={4}
      />

      {/* 선택 (있으면 매칭이 빨라집니다) */}
      <div className="rounded-lg border border-navy-100 bg-navy-50/60 p-4">
        <p className="mb-3 text-xs font-medium text-navy-500">선택 정보 — 입력하시면 더 빠르게 안내드립니다</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="기관·회사명" name="org" placeholder="○○기업 / ○○기관" />
          <Field label="예상 인원" name="headcount" placeholder="예: 30명" />
          <Field label="희망 주제" name="topic" placeholder="예: 생성형 AI 실무" />
          <Field label="희망 일정" name="schedule" placeholder="예: 8월 중" />
        </div>
      </div>

      <ErrorNote show={status === 'error'} />
      <SubmitButton pending={status === 'pending'} label="출강 문의 접수하기" />
      <p className="text-center text-xs text-navy-400">
        접수 후 영업일 기준 1~2일 내 담당자가 연락드립니다.
      </p>
    </form>
  );
}
