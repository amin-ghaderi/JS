import Summary from "../components/Summary";
import cvData from "../data/cvData";

function HomePage() {
  return (
    <section className="cv-section">
      <h2 className="section-title">Home</h2>
      <Summary text={cvData.summary} />
    </section>
  );
}

export default HomePage;
