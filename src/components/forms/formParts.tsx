// 문의 폼 공용 UI 파트 (입력/성공 패널/제출 버튼)

export function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="field-label">
        {label}
        {required && <span className="ml-0.5 text-accent-dark">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="field-input"
      />
    </div>
  );
}

export function TextArea({
  label,
  name,
  required,
  placeholder,
  rows = 4,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="field-label">
        {label}
        {required && <span className="ml-0.5 text-accent-dark">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="field-input resize-y"
      />
    </div>
  );
}

export function SubmitButton({ pending, label }: { pending: boolean; label: string }) {
  return (
    <button type="submit" disabled={pending} className="btn-primary w-full disabled:opacity-60">
      {pending ? '접수 중…' : label}
    </button>
  );
}

export function SuccessPanel({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-lg border border-accent/40 bg-accent/5 p-6 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent/15 text-accent-dark">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy-950">문의가 접수되었습니다</h3>
      <p className="mt-2 text-sm text-navy-500">
        담당자가 확인 후 빠르게 연락드리겠습니다. 감사합니다.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 text-sm font-medium text-accent-dark underline-offset-2 hover:underline"
      >
        새 문의 작성하기
      </button>
    </div>
  );
}

export function ErrorNote({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
      전송 중 문제가 발생했습니다. 잠시 후 다시 시도하거나 대표 연락처로 문의해 주세요.
    </p>
  );
}
