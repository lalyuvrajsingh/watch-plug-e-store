'use client'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const router = useRouter();  // Moved to correct location within component

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to admin dashboard
      router.push('/admin');
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
    <h1 className="text-center text-gray-500 text-5xl mt-8 mb-8 font-bold">Admin Panel</h1>
    <form onSubmit={handleLogin} className='border lg:w-[400px] m-3 p-2 rounded-xl shadow-xl flex flex-col'>
      <input type="email" name="email" placeholder='Email' required className='border m-3 p-2 rounded-xl' />
      <input type="password" name="password" placeholder='Password' required className='border m-3 p-2 rounded-xl' />
      <button type="submit" className='border m-3 p-2 rounded-xl bg-black text-white'>Login</button>
    </form>
    </div>
  );
}

export default LoginPage;