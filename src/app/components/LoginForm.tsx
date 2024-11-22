import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 text-center">
       <div className="text-purple-700 text-4xl font-bold mb-8">Sweet™</div>
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Login</h1>
      <p className="text-gray-500 mb-4">
        Welcome back! Login to access the Sweet Marketplace.
      </p>
      <a href="#" className="text-pink-500 hover:underline">
        Did you forget your password?
      </a>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
        <input
          type="email"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          CONTINUE
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
