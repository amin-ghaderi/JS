import { useState } from "react";
import "./updateStateExercise.css";

function UpdateNestedObjectArray() {
  const [state, setState] = useState({
    character: "Outpost",
    location: "Resort",
    action: "Movement",
    makers: [
      { id: 1, name: "Fiona", age: 60 },
      { id: 2, name: "Beth", age: 60 },
      { id: 3, name: "Laurie", age: 29 },
    ],
    facility: "Mansion",
  });

  return (
    <section className="exercise-section">
      <h2>4. Update Nested Object Array</h2>

      <p>Character: {state.character}</p>
      <p>Location: {state.location}</p>
      <p>Action: {state.action}</p>
      <p>Facility: {state.facility}</p>

      <h3>Makers</h3>
      {state.makers.map((maker) => (
        <div key={maker.id} className="exercise-item">
          <p>Name: {maker.name}</p>
          <p>Age: {maker.age}</p>
        </div>
      ))}

      <div className="exercise-buttons">
        {/* Map over makers and update one object by id */}
        <button
          type="button"
          onClick={() =>
            setState({
              ...state,
              makers: state.makers.map((maker) =>
                maker.id === 1 ? { ...maker, age: 61 } : maker
              ),
            })
          }
        >
          Update Fiona Age
        </button>

        {/* Spread the nested makers array and append a new object */}
        <button
          type="button"
          onClick={() =>
            setState({
              ...state,
              makers: [
                ...state.makers,
                { id: 4, name: "Max", age: 28 },
              ],
            })
          }
        >
          Add Max
        </button>
      </div>
    </section>
  );
}

export default UpdateNestedObjectArray;
