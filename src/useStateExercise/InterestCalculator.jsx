import { useState } from "react";

function InterestCalculator() {
  const principal = 2500000;
  const [rate, setRate] = useState(null);

  const interest = rate === null ? null : principal * rate;

  return (
    <section className="card">
      <h2>Interest Calculator</h2>

      <p className="muted">Fixed amount: {principal}</p>

      <div className="row">
        <button type="button" onClick={() => setRate(0.03)}>
          3%
        </button>
        <button type="button" onClick={() => setRate(0.04)}>
          4%
        </button>
        <button type="button" onClick={() => setRate(0.05)}>
          5%
        </button>
      </div>

      {rate !== null && (
        <p className="result">
          {principal} × {rate} = <strong>{interest}</strong>
        </p>
      )}
    </section>
  );
}

export default InterestCalculator;
