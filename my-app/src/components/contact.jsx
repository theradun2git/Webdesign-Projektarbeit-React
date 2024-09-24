import React from 'react';
import './contact.css';

const Contactform = () => {
  return (
      <div className="contact-container">
          <h2>Kontakt</h2>
          <div className="address-container">
              <h3>Hier finden Sie uns:</h3>
              <p>Teststrasse 49, 3000 Testanien</p>
              <p>Phone: 031 985 00 00</p>
              <p>E-Mail: test@test.com</p>
          </div>
          <div className="map-container">
              <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.752992197448!2d7.462901077585563!3d46.96654297113828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39fe7e4c241b%3A0x85161c9c1c672184!2sFeusi%20Bildungszentrum%20AG!5e0!3m2!1sde!2sch!4v1727192481328!5m2!1sde!2sch"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
              ></iframe>
          </div>
      </div>
  );
};

export default Contactform;