import React from 'react';
import './contact.css';

const Contactform = () => {
  const address = {
    street: 'Teststrasse 49, 3000 Testanien',
    phone: '031 985 00 00',
    email: 'info@test.ch',
  };

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.752992197448!2d7.462901077585563!3d46.96654297113828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39fe7e4c241b%3A0x85161c9c1c672184!2sFeusi%20Bildungszentrum%20AG!5e0!3m2!1sde!2sch!4v1727192481328!5m2!1sde!2sch";

  return (
    <div className="contact-container">
      <h2>Kontakt</h2>
      <div className="address-container">
        <h3>Hier finden Sie uns:</h3>
        <p>{address.street}</p>
        <p><a href={`sip:${address.phone}`}>{address.phone}</a></p>
        <p><a href={`mailto:${address.email}`}>{address.email}</a></p>
      </div>
      <div className="map-container">
        <iframe
          title="Google Map"
          src={mapUrl}
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