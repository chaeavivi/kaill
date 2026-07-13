'use client';

import { useState } from 'react';
import { submitInquiry } from '@/lib/submitInquiry';
import { Field, TextArea, SubmitButton, SuccessPanel, ErrorNote } from './formParts';

// 일반·제휴 문의 폼.
export default function GeneralForm() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fields: Record<string, string> = {};
    data.forEach((v, k) => (fields[k] = String(v)));

    setStatus('pending');
    try {
      await submitInquiry({ type: 'general', fields });
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
        <Field label="이름 / 소속" name="name" required placeholder="홍길동 / ○○" />
        <Field label="이메일" name="email" type="email" required placeholder="name@example.com" />
      </div>
      <TextArea
        label="문의 내용"
        name="message"
        required
        placeholder="제휴·협력·기타 문의 내용을 남겨주세요."
        rows={4}
      />
      <ErrorNote show={status === 'error'} />
      <SubmitButton pending={status === 'pending'} label="문의 보내기" />
    </form>
  );
}
