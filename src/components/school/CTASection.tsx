import { FC } from 'react';

interface Props {
  onSubmit: () => void;
  loading: boolean;
}

const CTASection: FC<Props> = ({ onSubmit, loading }) => (
  <div className="flex flex-col gap-2">
    <button
      type="button"
      onClick={onSubmit}
      disabled={loading}
      className="w-full py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded disabled:opacity-50"
    >
      {loading ? 'Logging in…' : 'Login'}
    </button>
    <a href="/forgot-password" className="text-sm text-indigo-500 hover:underline text-right">
      Forgot password?
    </a>
  </div>
);

export default CTASection;