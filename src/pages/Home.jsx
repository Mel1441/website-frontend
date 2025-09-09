// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import api from '../api/axios';
//import avatar from '../assets/avatar.png'; // if you're using a local image

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/models/ping')
      .then(res => setMessage(res.data.message))
      .catch(err => console.error('Backend error:', err));
  }, []);

  return (
    <main className="min-h-screen bg-violet-50 text-gray-800 p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-violet-500">Welcome</h1>
        <p className="mt-2 text-lg text-gray-600">
          Under Construction
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-xl font-semibold text-indigo-500">🧠 Placeholder</h2>
          <p className="mt-2 text-sm text-gray-700">
            under construction
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-xl font-semibold text-indigo-500">🔍 Placeholder</h2>
          <p className="mt-2 text-sm text-gray-700">
            under construction
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-xl font-semibold text-indigo-500">📄 Placeholder</h2>
          <p className="mt-2 text-sm text-gray-700">
            under construction
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-xl font-semibold text-indigo-500">🧒 School Portal</h2>
          <p className="mt-2 text-sm text-gray-700">
            under construction
          </p>
        </div>
      </section>

      <footer className="mt-16 text-sm text-gray-500 text-center">
        © 2025 Melissa’s Modular Lab. Built with reproducibility and semantic clarity.
      </footer>
    </main>
  );
};
export default Home;


//export default function Home() {
 // return (
  //  <div>
  //    <h2>Welcome to the Modular Lab</h2>
  //    <p>This is a placeholder homepage. More coming soon!</p>
  //  </div>
 // );
//}