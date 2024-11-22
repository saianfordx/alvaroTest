"use client";

import LoginForm from '../components/LoginForm';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (email: string, password: string) => {
    
    // Implement the login logic here
    console.log('Logging in with:', email, password);
   // Redirect to the todo page
   router.push('/todos');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Top-right Gradient */}
      <div className="absolute z-0 top-0 right-0 w-1/2 h-1/3 bg-gradient-to-tl from-pink-300 via-purple-300 to-purple-500 rounded-bl-full"></div>

      {/* Bottom-right Gradient */}
      <div className="absolute z-0 bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-300 to-green-300 rounded-tl-full"></div>

      {/* Centered Form */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10">
        {/* Logo */}
      

        {/* Login Box */}

          <div className='absolute top-20 mt-20 z-50'>
          <LoginForm onLogin={handleLogin} />
          </div>
         
        </div>
      </div>
  );
};

export default LoginPage;
