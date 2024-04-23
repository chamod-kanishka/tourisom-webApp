import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tourisomService from '../services/TourisomService';

const AddTourisomPage = () => {
  const [tourisom, setTourisom] = useState({
    tourName: '',
    location: '',
    date: '',
    cost: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourisom({ ...tourisom, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await tourisomService.createTourisom(tourisom);
      navigate('/manage-tourisoms'); // Navigate to the manage tourisoms page after successfully adding
    } catch (error) {
      console.error('Error creating tourisom:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add Tourisom</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="tourName"
          value={tourisom.tourName}
          onChange={handleChange}
          placeholder="Tour Name"
          style={styles.input}
        />
        <input
          type="text"
          name="location"
          value={tourisom.location}
          onChange={handleChange}
          placeholder="Location"
          style={styles.input}
        />
        <input
          type="date"
          name="date"
          value={tourisom.date}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="number"
          name="cost"
          value={tourisom.cost}
          onChange={handleChange}
          placeholder="Cost"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Tourisom</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#FFD700', // Change heading color to #FFD700
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#FFD700', // Change button background color to #FFD700
    color: '#333', // Change button text color to #333
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default AddTourisomPage;
