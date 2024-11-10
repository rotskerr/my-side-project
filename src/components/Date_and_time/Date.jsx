import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Date.css";
import { useSelection } from "../../SelectionContext";
import { useNavigate } from "react-router-dom";

function DateComponent() {
  const { selection, setSelection } = useSelection();
  const navigate = useNavigate();

  const handleDateChange = (date) => setSelection({ ...selection, date });

  const handleConfirm = () => {
    if (selection.date) {
      navigate("/time"); // Перехід до компонента вибору часу
    } else {
      alert("Будь ласка, оберіть дату.");
    }
  };

  return (
    <div className="date-container">
      <h1>Choose a date for a date</h1>
      <div className="datepicker-container">
        <DatePicker
          selected={selection.date}
          onChange={handleDateChange}
          inline
        />

        <button className="confirm-button" onClick={handleConfirm}>
          Next
        </button>
      </div>
    </div>
  );
}

export default DateComponent;
