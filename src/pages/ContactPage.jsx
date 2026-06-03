import ContactInfo from "../components/ContactInfo";
import cvData from "../data/cvData";

function ContactPage() {
  return (
    <section className="cv-section contact-section">
      <h2 className="section-title">Contact</h2>
      <ContactInfo
        email={cvData.contact.email}
        location={cvData.contact.location}
      />
    </section>
  );
}

export default ContactPage;
