import { useState } from "react";
import "./updateStateExercise.css";

function UpdateSimpleObject() {
  const [state, setState] = useState({
    character: "Outpost",
    location: "Resort",
    action: "Movement",
    facility: "Mansion",
  });

  return (
    <section className="exercise-section">
      <h2>1. Update Simple Object</h2>

      <p>Character: {state.character}</p>
      <p>Location: {state.location}</p>
      <p>Action: {state.action}</p>
      <p>Facility: {state.facility}</p>
      {state.origin && <p>Origin: {state.origin}</p>}

      <div className="exercise-buttons">
        {/* Spread the existing object and update one property */}
        <button
          type="button"
          onClick={() =>
            setState({
              ...state,
              location: "Farm",
            })
          }
        >
          Change Location
        </button>

        {/* Spread the existing object and add a new property */}
        <button
          type="button"
          onClick={() =>
            setState({
              ...state,
              origin: "Contemporary",
            })
          }
        >
          Add Origin
        </button>
      </div>
    </section>
  );
}

export default UpdateSimpleObject;
