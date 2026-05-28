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
      <h1>useState Exercise</h1>

      <InterestCalculator />

      <section className="card">
        <h2>Show Details</h2>

        <DetailsList items={details} onSelect={setSelected} />

        <div className="row">
          <RemoveDetails
            onRemove={() => setSelected(null)}
            disabled={selected === null}
          />
        </div>

        {selected && (
          <div className="selected">
            <p className="muted">Selected item:</p>
            <p>
              Index: <strong>{selected.index}</strong> -{" "}
              <strong>{selected.text}</strong>
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default UseStateExercise;
