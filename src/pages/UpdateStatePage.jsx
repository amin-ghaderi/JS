import { Link } from "react-router-dom";

function UpdateStatePage() {
  return (
    <section className="cv-section">
      <h2 className="section-title">Update State Exercise</h2>
      <ul>
        <li>
          <Link to="/updatestate/simple-object">Simple Object</Link>
        </li>
        <li>
          <Link to="/updatestate/array-objects">Array Objects</Link>
        </li>
        <li>
          <Link to="/updatestate/nested-array">Nested Array</Link>
        </li>
        <li>
          <Link to="/updatestate/nested-object-array">
            Nested Object Array
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default UpdateStatePage;
