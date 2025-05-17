# Ex06 BMI Calculator
## Date:

## AIM
To create a BMI calculator using React Router 

## ALGORITHM
### STEP 1 State Initialization
Manage the current page (Home or Calculator) using React Router.

### STEP 2 User Input
Accept weight and height inputs from the user.

### STEP 3 BMI Calculation
Calculate the BMI based on user input.

### STEP 4 Categorization
Classify the BMI result into categories (Underweight, Normal weight, Overweight, Obesity).

### STEP 5 Navigation
Navigate between pages using React Router.

## PROGRAM
### App.js:
```
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

```
### App.css:
```
/* App.css */

body {
  background-color: #f9fafb;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 28rem; /* Equivalent to Tailwind's max-w-md */
  margin: 2.5rem auto; /* mt-10 */
  padding: 1.5rem; /* p-6 */
  background-color: #ffffff;
  border-radius: 1rem; /* rounded-2xl */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* shadow-md */
}

.title {
  font-size: 1.5rem; /* text-2xl */
  font-weight: bold;
  margin-bottom: 1rem;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.25rem; /* mb-1 */
}

.input-group input {
  width: 100%;
  padding: 0.5rem; /* p-2 */
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
}

.button {
  width: 100%;
  background-color: #3b82f6; /* blue-500 */
  color: white;
  padding: 0.5rem 1rem; /* py-2 px-4 */
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #2563eb; /* blue-600 */
}

.result {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f3f4f6; /* gray-100 */
  border-radius: 0.5rem;
}

.error {
  margin-top: 1rem;
  color: #ef4444; /* red-500 */
}

```
## OUTPUT
![alt text](<myapo/src/img/Screenshot 2025-05-17 200456.png>)
## RESULT
The program for creating BMI Calculator using React Router is executed successfully.
