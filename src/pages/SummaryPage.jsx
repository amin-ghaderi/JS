import Summary from "../components/Summary";
import cvData from "../data/cvData";

function SummaryPage() {
  return (
    <section className="cv-section">
      <h2 className="section-title">Summary</h2>
      <Summary text={cvData.summary} />
    </section>
  );
}

export default SummaryPage;
