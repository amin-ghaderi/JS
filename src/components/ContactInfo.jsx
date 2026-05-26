function ContactInfo({ email, location }) {
  return (
    <div className="contact-info">
      <p className="contact-item">
        <span className="contact-label">Email</span>
        <a href={`mailto:${email}`} className="contact-link">
          {email}
        </a>
      </p>
      <p className="contact-item">
        <span className="contact-label">Location</span>
        <span>{location}</span>
      </p>
    </div>
  );
}

export default ContactInfo;
