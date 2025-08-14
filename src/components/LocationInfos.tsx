import styles from '../styles/LocationInfos.module.css'

function LocationInfos() {
  return (
    <div className={styles.LocationSession}>

        <div className={styles.locationTextSession}>
            <div className={styles.mapSession}>
                
            </div>

            <div className={styles.textMap}>

                <h3>Visit our location</h3>
                <p> We are located in the heart of Concord, California, in a spot that's easy to reach for all our clients. Feel free to stop by or contact us to schedule a visit.
                    <br /> 📍 Address: 1001 Shary Cir, Concord, CA 94518, USA
                </p>

            </div>
            
        </div>

        <div className={styles.map}>
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6292.032450128674!2d-122.0287159595362!3d37.95340713399578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808560dc9c9327bd%3A0x959be4c975696bb2!2s1001%20Shary%20Cir%2C%20Concord%2C%20CA%2094518%2C%20USA!5e0!3m2!1sen!2sbr!4v1751941261445!5m2!1sen!2sbr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className={styles.footerLocation}>
            adcionar mais coisas...
        </div>

    </div>
  )
}

export default LocationInfos;
