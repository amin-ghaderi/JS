import SocialLinks from "../components/SocialLinks";
import cvData from "../data/cvData";

function SocialLinksPage() {
  return (
    <section className="cv-section contact-section">
      <h2 className="section-title">Social Links</h2>
      <SocialLinks links={cvData.socialLinks} />
    </section>
  );
}

export default SocialLinksPage;
