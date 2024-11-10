import React from 'react';
import { FaPizzaSlice, FaBeer, FaCoffee } from 'react-icons/fa';
import { GiSushis } from 'react-icons/gi';
import './Place.css';
import { useSelection } from '../../SelectionContext';
import { useNavigate } from 'react-router-dom';


function PlaceComponent() {
  const { selection, setSelection } = useSelection();
  const navigate = useNavigate();

  const handleFoodSelect = (food) => setSelection({ ...selection, food });


  const handleConfirm = () => {
    if (selection.food) {
        navigate('/final');
    } else {
      alert('Будь ласка, оберіть їжу.');
    }
  };

  return (
    <div className="place-container">
      <h1>Choose food for your date</h1>
      <div className="food-options">
        <div className={`food-option ${selection.food === 'Pizza' ? 'selected' : ''}`} onClick={() => handleFoodSelect('Pizza')}>
          <FaPizzaSlice size={50} />
          <p>Pizza</p>
        </div>
        <div className={`food-option ${selection.food === 'Beer' ? 'selected' : ''}`} onClick={() => handleFoodSelect('Beer')}>
          <FaBeer size={50} />
          <p>Beer</p>
        </div>
        <div className={`food-option ${selection.food === 'Sushi' ? 'selected' : ''}`} onClick={() => handleFoodSelect('Sushi')}>
          <GiSushis size={50} />
          <p>Sushi</p>
        </div>
        <div className={`food-option ${selection.food === 'Coffee' ? 'selected' : ''}`} onClick={() => handleFoodSelect('Coffee')}>
          <FaCoffee size={50} />
          <p>Coffee</p>
        </div>
      </div>
      <button className="confirm-button" onClick={handleConfirm}>
        Next
      </button>
    </div>
  );
}

export default PlaceComponent;
