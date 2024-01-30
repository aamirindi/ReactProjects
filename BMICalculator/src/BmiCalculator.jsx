import React, { useState } from "react";
import "./style.css";

function BmiCalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  function calculateBmi() {
    const heightInMeters = height / 100;
    const bmiResult = weight / (heightInMeters * heightInMeters);
    setBmi(bmiResult.toFixed(2));
  }

  return (
    <div className="container">
      <h1>Bmi Calculator</h1>
      <div className="input">
        <label>Weight (in kg) : </label>
        <input
          className="in"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <br />
      <div className="input">
        <label>Height (in cm) : </label>
        <input
          className="in"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="btn">
        <button className="click" onClick={calculateBmi}>
          Calculate BMI
        </button>
      </div>
      <div className="result">
        <h2>BMI : {bmi}</h2>
      </div>
    </div>
  );
}

export default BmiCalculator;
