import React, { useEffect, useState } from "react";
import "../style/bmi.css";
import axios from "axios";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [food, setFood] = useState("");
  const [excersice, setExcersice] = useState("");

  const calculateBMI = () => {
    let url =
      "https://travelway-223-default-rtdb.asia-southeast1.firebasedatabase.app/body.json";

    if (weight && (feet || inches)) {
      const totalInches = parseInt(feet) * 12 + parseInt(inches);
      const heightInMeters = totalInches * 0.0254;

      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      axios
        .get(url)
        .then((res) => {
          Object.entries(res.data).map(([id, ele]) => {
            if (bmiValue > ele.minBim && bmiValue < ele.maxBim) {
              setMessage(ele.weight);
              setFood(ele.food);
              setExcersice(ele.Exercises);
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setMessage("Please enter valid weight and height");
    }
  };

  return (
    <div className="bmi-container">
      <h2 className="bmi-title">BMI Calculator</h2>
      <div className="bmi-input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight in kg"
          className="bmi-input"
        />
      </div>
      <div className="bmi-input-group">
        <label>Height:</label>
        <div className="bmi-height-inputs">
          <input
            type="number"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            placeholder="Feet"
            className="bmi-input"
          />
          <input
            type="number"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            placeholder="Inches"
            className="bmi-input"
          />
        </div>
      </div>
      <button onClick={calculateBMI} className="bmi-button">
        Calculate BMI
      </button>
      {bmi && (
        <div className="bmi-result">
          <h3>Your BMI: {bmi}</h3>
          <h4>{message}</h4>
          <p>
            <b>Balanced Diet :</b> {food}
          </p>
          <p>
            <b>Physical Activity :</b> {excersice}
          </p>
          <p>
            <b>Stay Hydrated :</b> Drink smoothies, protein shakes, or milk
            instead of water to increase your caloric intake. Drinking water
            before meals can reduce your appetite, so try to avoid it if you're
            trying to eat more.
          </p>
          <p>
            <b>Get Enough Sleep :</b> Ensure you get 7-9 hours of sleep per
            night, as proper rest is crucial for muscle growth and recovery.
          </p>
          <p>
            <b>Monitor Your Progress :</b> Keep a food diary or use an app to
            track your daily calorie intake and macronutrients. If you're not
            seeing progress, gradually increase your caloric intake.
          </p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
