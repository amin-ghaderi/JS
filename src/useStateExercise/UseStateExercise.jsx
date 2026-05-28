import { useState } from "react";
import "./useStateExercise.css";

import InterestCalculator from "./InterestCalculator.jsx";
import DetailsList from "./DetailsList.jsx";
import RemoveDetails from "./RemoveDetails.jsx";

function UseStateExercise() {
  const details = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "APIs",
    "GitHub",
    "Automation",
  ];

  const [selected, setSelected] = useState(null);

  return (
    <main className="page">
      <header className="hero">
        <h1 className="hero-title">Amin Cal</h1>
        <p className="hero-subtitle">React useState Exercise</p>
        <p className="hero-description">
          Simple state management practice using React.
        </p>
      </header>

      <InterestCalculator />

      <section className="card">
        <h2>Show Details</h2>

        {selected && (
          <div className="selected-box">
            <p className="selected-title">Selected item</p>
            <p className="selected-value">
              Index: <strong>{selected.index}</strong> —{" "}
              <strong>{selected.text}</strong>
            </p>
          </div>
        )}

        <DetailsList items={details} onSelect={setSelected} />

        <div className="row">
          <RemoveDetails
            onRemove={() => setSelected(null)}
            disabled={selected === null}
          />
        </div>
      </section>
    </main>
  );
}

export default UseStateExercise;
