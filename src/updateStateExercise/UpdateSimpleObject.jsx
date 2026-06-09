import { useState } from "react";

function UpdateSimpleObject() {
  const [state, setState] = useState({
    character: "Snow White",
    location: "Resort",
    action: "Sleeping",
    facility: "Cabin"
  });

  return (
    <div>
      <h2>Update Simple Object</h2>

      <p>Character: {state.character}</p>
      <p>Location: {state.location}</p>
      <p>Action: {state.action}</p>
      <p>Facility: {state.facility}</p>
      
      <button>Update Location</button>
    </div>
  );
}

export default UpdateSimpleObject;