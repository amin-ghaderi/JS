function SocialLinks({ links }) {
  return (
    <div className="social-links">
      {links.map((link) => (
        <p key={link.platform} className="contact-item">
          <span className="contact-label">{link.platform}</span>
          <a
            href={link.url}
            className="contact-link"
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </a>
        </p>
      ))}
    </div>
  );
}

export default SocialLinks;
