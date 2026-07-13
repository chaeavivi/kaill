'use client';

import { useState } from 'react';
import InquiryForm from '@/components/forms/InquiryForm';
import TrainingForm from '@/components/forms/TrainingForm';
import GeneralForm from '@/components/forms/GeneralForm';

const tabs = [
  { key: 'dispatch', label: 'B2B 출강 문의', desc: '기업·기관 강사 출강·파견 문의 (최우선)' },
  { key: 'training', label: '강사양성과정 문의', desc: '과정 신청 및 모집 관련 문의' },
  { key: 'general', label: '일반 · 제휴 문의', desc: '제휴·협력 및 기타 문의' },
] as const;

type TabKey = (typeof tabs)[number]['key'];

export default function ContactTabs() {
  const [active, setActive] = useState<TabKey>('dispatch');
  const current = tabs.find((t) => t.key === active)!;

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      {/* 탭 목록 */}
      <div className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-3 lg:overflow-visible">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(t.key)}
            className={`min-w-[200px] rounded-lg border p-4 text-left transition lg:min-w-0 ${
              active === t.key
                ? 'border-accent bg-accent/5'
                : 'border-navy-200 hover:border-navy-300 hover:bg-navy-50'
            }`}
          >
            <div className={`text-sm font-semibold ${active === t.key ? 'text-accent-dark' : 'text-navy-800'}`}>
              {t.label}
            </div>
            <div className="mt-1 text-xs text-navy-500">{t.desc}</div>
          </button>
        ))}
      </div>

      {/* 폼 영역 */}
      <div className="card">
        <h2 className="text-lg font-semibold text-navy-950">{current.label}</h2>
        <p className="mb-6 mt-1 text-sm text-navy-500">{current.desc}</p>
        {active === 'dispatch' && <InquiryForm />}
        {active === 'training' && <TrainingForm />}
        {active === 'general' && <GeneralForm />}
      </div>
    </div>
  );
}
