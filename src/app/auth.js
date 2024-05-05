import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from './firebaseConfig'; // Import from the Firebase config file you set up

const withAdminAuth = (Component) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          router.push('/login'); // Redirect to login if not authenticated
        }
      });
    }, []);

    if (!user) {
      return <div>Loading...</div>; // or a loading spinner
    }

    return <Component {...props} user={user} />;
  };
};

export default withAdminAuth;
