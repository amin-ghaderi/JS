import { useState } from "react";
import "./updateStateExercise.css";

function UpdateArrayObjects() {
  const [items, setItems] = useState([
    {
      id: 1,
      character: "Outpost",
      location: "Resort",
      action: "Movement",
      facility: "Mansion",
    },
  ]);

  return (
    <section className="exercise-section">
      <h2>2. Update Array of Objects</h2>

      {items.map((item) => (
        <div key={item.id} className="exercise-item">
          <p>ID: {item.id}</p>
          <p>Character: {item.character}</p>
          <p>Location: {item.location}</p>
          <p>Action: {item.action}</p>
          {item.facility && <p>Facility: {item.facility}</p>}
          {item.origin && <p>Origin: {item.origin}</p>}
        </div>
      ))}

      <div className="exercise-buttons">
        {/* Copy the array and update the first object inside it */}
        <button
          type="button"
          onClick={() =>
            setItems([
              { ...items[0], location: "Farm" },
              ...items.slice(1),
            ])
          }
        >
          Change Location
        </button>

        {/* Copy the array and add a property to the first object */}
        <button
          type="button"
          onClick={() =>
            setItems([
              { ...items[0], origin: "Contemporary" },
              ...items.slice(1),
            ])
          }
        >
          Add Origin
        </button>

        {/* Spread the existing array and append a new object */}
        <button
          type="button"
          onClick={() =>
            setItems([
              ...items,
              {
                id: 2,
                character: "Rustic",
                location: "City",
              },
            ])
          }
        >
          Add Object
        </button>
      </div>
    </section>
  );
}

export default UpdateArrayObjects;
