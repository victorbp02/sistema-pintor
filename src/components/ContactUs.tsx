import ContactHeader from './ContactHeader';
import ContactIntro from './ContactIntro';
import ContactForm from './ContactForm';

export default function ContactUs() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <ContactHeader />
      <ContactIntro />
      <ContactForm />
    </div>
  );
} 