import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/ContactForm'), { suspense: true });

const Contact = () => {

  return (
    <div>
    <Navbar />
    <DynamicComponent/>
    </div>
  );
};

export default Contact;
