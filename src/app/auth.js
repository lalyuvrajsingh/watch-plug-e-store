import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';


const withAdminAuth = (Component) => {
  const WrappedComponent = (props) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
      // This subscribes to the auth state
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          // Redirect to login if no user
          router.push('/login');
        }
      });

      // Clean up the subscription on unmount
      return () => unsubscribe();
    }, [router]);

    // Show loading state until user is confirmed
    if (!user) {
      return <div>Loading...</div>;
    }

    // Pass all props to the wrapped component
    return <Component {...props} />;
  };

  // Properly set display name for the wrapped component
  WrappedComponent.displayName = `withAdminAuth(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
};

export default withAdminAuth;

