import React, { useState } from 'react';
import { 
  FaUser, 
  FaHome, 
  FaRuler, 
  FaPalette, 
  FaClipboardList, 
  FaCalendarAlt,
  FaEnvelope
} from 'react-icons/fa';
import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Project Type
    projectType: '',
    urgency: '',
    
    // Project Details
    interiorRooms: '',
    exteriorAreas: '',
    cabinetWork: '',
    squareFootage: '',
    
    // Preferences
    colorPreferences: '',
    finishType: '',
    budget: '',
    
    // Additional Information
    timeline: '',
    specialRequirements: '',
    howDidYouHear: '',
    
    // Scheduling
    preferredContact: 'email',
    bestTime: '',
    additionalNotes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add the logic to send the form
    console.log('Form submitted:', formData);
    alert('Thank you! Your quote request has been sent. We will contact you soon.');
  };

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Request Free Quote</h2>
          <p className={styles.formSubtitle}>
            Fill out the form below and our specialized team will contact you to provide a personalized quote for your project.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          
          {/* Section 1: Personal Information */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <FaUser className={styles.sectionIcon} />
              Personal Information
            </h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Your first name"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Your last name"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Complete address"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your city"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Your state"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="zipCode">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="12345-678"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Project Type */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <FaHome className={styles.sectionIcon} />
              Project Type
            </h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="projectType">Project Type *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select project type</option>
                  <option value="residential-interior">Residential Painting - Interior</option>
                  <option value="residential-exterior">Residential Painting - Exterior</option>
                  <option value="commercial-interior">Commercial Painting - Interior</option>
                  <option value="commercial-exterior">Commercial Painting - Exterior</option>
                  <option value="multifamily">Multi-Family Painting</option>
                  <option value="cabinets">Cabinet Painting</option>
                  <option value="deck-staining">Deck Staining</option>
                  <option value="fence-painting">Fence Painting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="urgency">Project Urgency</label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                >
                  <option value="">Select urgency</option>
                  <option value="immediate">Immediate (This week)</option>
                  <option value="soon">Soon (Next 2 weeks)</option>
                  <option value="month">This month</option>
                  <option value="flexible">Flexible (No rush)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Project Details */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <FaRuler className={styles.sectionIcon} />
              Project Details
            </h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="interiorRooms">Interior Painting Rooms</label>
                <input
                  type="text"
                  id="interiorRooms"
                  name="interiorRooms"
                  value={formData.interiorRooms}
                  onChange={handleChange}
                  placeholder="Ex: Living room, 2 bedrooms, kitchen, bathroom"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="exteriorAreas">Exterior Painting Areas</label>
                <input
                  type="text"
                  id="exteriorAreas"
                  name="exteriorAreas"
                  value={formData.exteriorAreas}
                  onChange={handleChange}
                  placeholder="Ex: Facade, doors, windows, fence"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="cabinetWork">Cabinet Work</label>
                <input
                  type="text"
                  id="cabinetWork"
                  name="cabinetWork"
                  value={formData.cabinetWork}
                  onChange={handleChange}
                  placeholder="Ex: Kitchen cabinets, bathroom cabinets"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="squareFootage">Approximate Area (sq ft)</label>
                <input
                  type="number"
                  id="squareFootage"
                  name="squareFootage"
                  value={formData.squareFootage}
                  onChange={handleChange}
                  placeholder="Ex: 1500"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Preferences */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <FaPalette className={styles.sectionIcon} />
              Preferences
            </h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="colorPreferences">Color Preferences</label>
                <textarea
                  id="colorPreferences"
                  name="colorPreferences"
                  value={formData.colorPreferences}
                  onChange={handleChange}
                  placeholder="Describe your color preferences or leave blank for suggestions"
                  rows={3}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="finishType">Finish Type</label>
                <select
                  id="finishType"
                  name="finishType"
                  value={formData.finishType}
                  onChange={handleChange}
                >
                  <option value="">Select finish</option>
                  <option value="flat">Flat</option>
                  <option value="eggshell">Eggshell</option>
                  <option value="satin">Satin</option>
                  <option value="semi-gloss">Semi-Gloss</option>
                  <option value="gloss">Gloss</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select your budget range</option>
                  <option value="under-1000">Under $1,000</option>
                  <option value="1000-3000">$1,000 - $3,000</option>
                  <option value="3000-5000">$3,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="over-10000">Over $10,000</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 5: Additional Information */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <FaClipboardList className={styles.sectionIcon} />
              Additional Information
            </h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="timeline">Desired Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select timeline</option>
                  <option value="1-week">1 week</option>
                  <option value="2-weeks">2 weeks</option>
                  <option value="1-month">1 month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="howDidYouHear">How did you hear about us</label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="google">Google</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="website">Website</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="specialRequirements">Special Requirements</label>
              <textarea
                id="specialRequirements"
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                placeholder="Describe any special requirements, time restrictions, or additional information that may be important"
                rows={4}
              />
            </div>
          </div>

          {/* Section 6: Scheduling */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <FaCalendarAlt className={styles.sectionIcon} />
              Scheduling
            </h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="preferredContact">Preferred Contact Method</label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="text">SMS</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="bestTime">Best Time to Contact</label>
                <select
                  id="bestTime"
                  name="bestTime"
                  value={formData.bestTime}
                  onChange={handleChange}
                >
                  <option value="">Select time</option>
                  <option value="morning">Morning (8AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="evening">Evening (5PM - 9PM)</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="additionalNotes">Additional Notes</label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                placeholder="Any additional information you would like to share"
                rows={3}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className={styles.submitSection}>
            <button type="submit" className={styles.submitButton}>
              <FaEnvelope className={styles.submitIcon} />
              Send Quote Request
            </button>
            <p className={styles.submitNote}>
              * Required fields. We will contact you within 24 hours.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
