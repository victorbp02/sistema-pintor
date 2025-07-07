import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
  return (
    <div className={styles.card}>
      <form className={styles.form}>
        <h2 className={styles.title}>Appointment Request</h2>
        <div className={styles.row}>
          <div className={styles.col}><input type="text" placeholder="First Name" /></div>
          <div className={styles.col}><input type="text" placeholder="Last Name" /></div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}><input type="email" placeholder="Your Email Address" /></div>
          <div className={styles.col}><input type="text" placeholder="Your Phone" /></div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}><input type="text" placeholder="Street 1" /></div>
          <div className={styles.col}><input type="text" placeholder="State" /></div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}><input type="text" placeholder="City" /></div>
          <div className={styles.col}><input type="text" placeholder="Zip" /></div>
        </div>
        <div className={styles.row}>
          <textarea placeholder="Enter as many details as you can..." rows={3} />
        </div>
        <div className={styles.row}>
          <select>
            <option>How did you hear about us?</option>
            <option>Google</option>
            <option>Friend</option>
            <option>Other</option>
          </select>
        </div>
        <div className={styles.row}>
          <div className={styles.col}><input type="date" /></div>
          <div className={styles.col}><input type="date" /></div>
        </div>
        <div className={styles.row}>
          <label className={styles.checkbox}><input type="checkbox" /> Anytime</label>
          <label className={styles.checkbox}><input type="checkbox" /> Morning</label>
          <label className={styles.checkbox}><input type="checkbox" /> Afternoon</label>
          <label className={styles.checkbox}><input type="checkbox" /> Evening</label>
        </div>
        <div className={styles.row}>
          <small className={styles.privacy}>By submitting this form, you agree to Barbour Painting's Privacy Policy. You consent to receive phone calls and SMS messages from Barbour Painting to provide updates on your order and inquiries. Message frequency depends on your activity. You may opt out by texting "STOP" or get assistance by texting "HELP". Message and data rates may apply.</small>
        </div>
        <div className={styles.row}>
          <button type="submit" className={styles.submitBtn}>Submit Request</button>
        </div>
      </form>
    </div>
  );
} 