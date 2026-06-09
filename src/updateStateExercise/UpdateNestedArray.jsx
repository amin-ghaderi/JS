import { useState } from "react";
import "./updateStateExercise.css";

function UpdateNestedArray() {
  const [state, setState] = useState({
    character: "Outpost",
    location: "Resort",
    action: "Movement",
    makers: ["Fiona", "Beth", "Laurie"],
    facility: "Mansion",
  });

  return (
    <section className="exercise-section">
      <h2>3. Update Nested Array</h2>

      <p>Character: {state.character}</p>
      <p>Location: {state.location}</p>
      <p>Action: {state.action}</p>
      <p>Facility: {state.facility}</p>

      <h3>Makers</h3>
      <ul>
        {state.makers.map((maker) => (
          <li key={maker}>{maker}</li>
        ))}
      </ul>

      <div className="exercise-buttons">
        {/* Spread the object and append to the nested makers array */}
        <button
          type="button"
          onClick={() =>
            setState({
              ...state,
              makers: [...state.makers, "Caroline"],
            })
          }
        >
          Add Caroline
        </button>
      </div>
    </section>
  );
}

export default UpdateNestedArray;
