import "./styles/cv-react.css";

import Header from "./components/Header";
import Summary from "./components/Summary";
import ContactInfo from "./components/ContactInfo";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import cvData from "./data/cvData";

function App() {
  return (
    <main className="cv">
      <header className="cv-hero">
        <Header name={cvData.name} title={cvData.title} />
        <Summary text={cvData.summary} />
      </header>

      <section className="cv-section contact-section">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <ContactInfo
            email={cvData.contact.email}
            location={cvData.contact.location}
          />
          <SocialLinks links={cvData.socialLinks} />
        </div>
      </section>

      <Skills categories={cvData.skills} />
      <Projects projects={cvData.projects} />
    </main>
  );
}

export default App;
