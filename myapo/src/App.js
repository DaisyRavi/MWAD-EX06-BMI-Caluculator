import React, { useState } from "react";
import "./App.css";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100;

    if (!weightNum || !heightNum || heightNum <= 0) {
      setBmi(null);
      setCategory("Invalid input");
      return;
    }

    const bmiValue = weightNum / (heightNum * heightNum);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue < 24.9) {
      setCategory("Normal weight");
    } else if (bmiValue < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obesity");
    }
  };

  return (
    <div className="container">
      <h1 className="title">BMI Calculator</h1>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
        />
      </div>
      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height"
        />
      </div>
      <button onClick={calculateBMI} className="button">
        Calculate BMI
      </button>
      {bmi && (
        <div className="result">
          <p><strong>BMI:</strong> {bmi}</p>
          <p><strong>Category:</strong> {category}</p>
        </div>
      )}
      {category === "Invalid input" && (
        <p className="error">Please enter valid weight and height.</p>
      )}
    </div>
  );
}
