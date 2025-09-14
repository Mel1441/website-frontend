import { useState, useEffect } from 'react';
import axios from 'axios';
import LoginWrapper from '../../components/school/LoginWrapper';
import FormCard from '../../components/school/FormCard';
import InputGroup from '../../components/school/InputGroup';
import CTASection from '../../components/school/CTASection';
import FooterLinks from '../../components/school/FooterLinks';
import ErrorToast from '../../components/school/ErrorToast';
import LoadingOverlay from '../../components/school/LoadingOverlay';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await axios.post('/api/login', { email, password });
      localStorage.setItem('jwt', data.token);
      // auditLog('login_success', { email });
      window.location.href = data.role === 'educator' ? '/dashboard/educator' : '/dashboard/learner';
    } catch {
      setError('Invalid credentials');
      // auditLog('login_failure', { email });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // optional: clear error when user edits inputs
    if (error) setError('');
  }, [email, password]);

  return (
    <LoginWrapper>
      <FormCard>
        <h2 className="text-2xl font-semibold text-center mb-4">Sign in to your account</h2>
        <InputGroup
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputGroup
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CTASection onSubmit={handleLogin} loading={loading} />
        {error && <ErrorToast message={error} />}
        <FooterLinks
          prompt="Don’t have an account?"
          linkText="Sign up"
          href="/register"
        />
      </FormCard>
      {loading && <LoadingOverlay />}
    </LoginWrapper>
  );
}