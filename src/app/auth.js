import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const withAdminAuth = (Component) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          router.push('/login');
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (!user) {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };
};

export default withAdminAuth;
