import "../updateStateExercise/updateStateExercise.css";

import UpdateSimpleObject from "../updateStateExercise/UpdateSimpleObject.jsx";
import UpdateArrayObjects from "../updateStateExercise/UpdateArrayObjects.jsx";
import UpdateNestedArray from "../updateStateExercise/UpdateNestedArray.jsx";
import UpdateNestedObjectArray from "../updateStateExercise/UpdateNestedObjectArray.jsx";

function UpdateStatePage() {
  return (
    <div className="update-state-page">
      <h1 className="update-state-title">React – Update State</h1>

      <UpdateSimpleObject />
      <UpdateArrayObjects />
      <UpdateNestedArray />
      <UpdateNestedObjectArray />
    </div>
  );
}

export default UpdateStatePage;
