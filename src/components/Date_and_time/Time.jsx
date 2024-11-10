import React from "react";
import "./Time.css";
import { useSelection } from "../../SelectionContext";
import { useNavigate } from "react-router-dom";

function TimeComponent() {
  const { selection, setSelection } = useSelection();
  const navigate = useNavigate();

  const handleTimeChange = (event) =>
    setSelection({ ...selection, time: event.target.value });

  const handleConfirm = () => {
    if (selection.time) {
      navigate("/food");
    } else {
      alert("Будь ласка, оберіть час.");
    }
  };

  return (
    <div className="time-container">
      <h1>Choose a time </h1>
      <input
        type="time"
        value={selection.time || ""}
        onChange={handleTimeChange}
        className="custom-time-input"
      />

      <button className="confirm-button" onClick={handleConfirm}>
        Next
      </button>
    </div>
  );
}

export default TimeComponent;
