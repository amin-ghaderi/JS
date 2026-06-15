import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";

function App() {
  const aminContainer = useRef();

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline.to(".amin-title", {
        opacity: 1,
        y: -20,
        duration: 2,
      });

      timeline.to(".amin-subtitle", {
        opacity: 0,
        duration: 2,
      });
    },
    { scope: aminContainer }
  );

  return (
    <div ref={aminContainer} className="amin-container">
      <h1 className="amin-title">Amin Ghaderi</h1>
      <h2 className="amin-subtitle">
        Building ideas, strategy & digital experiences
      </h2>
    </div>
  );
}

export default App;
