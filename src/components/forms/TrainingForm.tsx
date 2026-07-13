'use client';

import { useState } from 'react';
import { submitInquiry } from '@/lib/submitInquiry';
import { Field, TextArea, SubmitButton, SuccessPanel, ErrorNote } from './formParts';

// 강사양성과정 문의·신청 폼 — 간단 신청 후 담당자 안내.
export default function TrainingForm() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fields: Record<string, string> = {};
    data.forEach((v, k) => (fields[k] = String(v)));

    setStatus('pending');
    try {
      await submitInquiry({ type: 'training', fields });
      setStatus('done');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') return <SuccessPanel onReset={() => setStatus('idle')} />;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="이름" name="name" required placeholder="홍길동" />
        <Field label="연락처" name="phone" type="tel" required placeholder="010-0000-0000" />
      </div>
      <Field label="이메일" name="email" type="email" required placeholder="name@example.com" />
      <TextArea
        label="문의 내용"
        name="message"
        placeholder="현재 경력, 관심 분야, 궁금한 점 등을 남겨주세요. (선택)"
        rows={4}
      />
      <ErrorNote show={status === 'error'} />
      <SubmitButton pending={status === 'pending'} label="과정 문의·신청하기" />
      <p className="text-center text-xs text-navy-400">
        접수 후 담당자가 모집 일정·비용 등을 개별 안내드립니다.
      </p>
    </form>
  );
}
