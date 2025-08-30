import ContactForm from '../components/ContactForm';

export default function ContactUs() {
  return (
    <section className="contactSection" style={{ 
      background: '#fff', 
      minHeight: '100vh',
      padding: '20px'
    }}>
      <ContactForm />
    </section>
  );
} 