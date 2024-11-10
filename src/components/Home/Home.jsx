import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Імпортуйте файл стилів

function Home() {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    const randomX = Math.floor(Math.random() * 80);
    const randomY = Math.floor(Math.random() * 80);
    setNoButtonStyle({
      position: 'absolute',
      top: `${randomY}%`,
      left: `${randomX}%`,
    });
  };

  const handleYesClick = () => {
    navigate('/date');
  };

  return (
    <div className="invitation-container">
      <h1>Date invitations</h1>
      <p>Will you go on a date with me?</p>
      <div className="buttons">
        <button className="yes-button" onClick={handleYesClick}>Yes</button>
        <button
          className="no-button"
          style={noButtonStyle}
          onMouseEnter={handleMouseEnter}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Home;