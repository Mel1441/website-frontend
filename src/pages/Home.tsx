import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>

      <p className="mb-6">
        I build secure, modular, and audit-friendly systems. Here's a preview of a login flow I designed:
      </p>

      <Link
        to="/school/login"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        View Login Demo
      </Link>
    </div>
  );
}