import HeaderPages from '../components/HeaderPages';
import ContactIntro from '../components/ContactIntro';
import ContactForm from '../components/ContactForm';

export default function ContactUs() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <HeaderPages />
      <ContactIntro />
      <ContactForm />
    </div>
  );
} 