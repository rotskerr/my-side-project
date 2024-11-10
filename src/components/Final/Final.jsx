import React from "react";
import { useSelection } from "../../SelectionContext";

function SummaryComponent() {
  const { selection } = useSelection();

  const handleSend = () => {
    const templateParams = {
      date: selection.date?.toLocaleDateString(),
      time: selection.time,
      food: selection.food,
    };
  };

  return (
    <div className="summary-container">
      <h1>Summary</h1>
      <p>
        Date:        {selection.date ? selection.date.toLocaleDateString() : "Not selected"}
      </p>
      <p>Time: {selection.time || "Not selected"}</p>
      <p>Food: {selection.food || "Not selected"}</p>
      <h1>See you soon</h1>
    </div>
  );
}

export default SummaryComponent;
