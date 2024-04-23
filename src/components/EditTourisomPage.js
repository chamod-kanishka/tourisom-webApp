import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tourisomService from '../services/TourisomService';

const EditTourisomPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tourisom, setTourisom] = useState({
    tourName: '',
    location: '',
    date: '',
    cost: ''
  });
  const [dataFetched, setDataFetched] = useState(false); // State variable to track data fetch

  useEffect(() => {
    const fetchTourisom = async () => {
      try {
        const data = await tourisomService.getTourisomById(id);
        setTourisom(data); // Set the initial state with fetched data
        setDataFetched(true); // Update data fetch status
      } catch (error) {
        console.error('Error fetching tourisom:', error);
      }
    };

    if (!dataFetched) { // Conditionally fetch data if not fetched yet
      fetchTourisom();
    }
  }, [id, dataFetched]); // Add dataFetched to dependency array

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourisom({ ...tourisom, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await tourisomService.updateTourisom(id, tourisom);
      navigate('/manage-tourisoms');
    } catch (error) {
      console.error('Error updating tourisom:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Edit Tourisom</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="tourName"
          value={tourisom.tourName} // Set value attribute to display fetched value
          onChange={handleChange}
          placeholder="Tour Name"
          style={styles.input}
        />
        <input
          type="text"
          name="location"
          value={tourisom.location} // Set value attribute to display fetched value
          onChange={handleChange}
          placeholder="Location"
          style={styles.input}
        />
        <input
          type="date"
          name="date"
          value={tourisom.date} // Set value attribute to display fetched value
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="number"
          name="cost"
          value={tourisom.cost} // Set value attribute to display fetched value
          onChange={handleChange}
          placeholder="Cost"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Update Tourisom</button>
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

export default EditTourisomPage;
