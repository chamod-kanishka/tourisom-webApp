import React, { useState } from 'react';
import tourisomService from '../services/TourisomService';

const TourisomForm = ({ onCreate }) => {
  const [tourisom, setTourisom] = useState({
    tourName: '',
    location: '',
    date: '',
    cost: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourisom({ ...tourisom, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdTourisom = await tourisomService.createTourisom(tourisom);
      onCreate(createdTourisom);
      setTourisom({
        tourName: '',
        location: '',
        date: '',
        cost: ''
      });
    } catch (error) {
      console.error('Error creating tourisom:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="tourName"
        value={tourisom.tourName}
        onChange={handleChange}
        placeholder="Tour Name"
      />
      <input
        type="text"
        name="location"
        value={tourisom.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <input
        type="date"
        name="date"
        value={tourisom.date}
        onChange={handleChange}
      />
      <input
        type="number"
        name="cost"
        value={tourisom.cost}
        onChange={handleChange}
        placeholder="Cost"
      />
      <button type="submit">Create Tourisom</button>
    </form>
  );
};

export default TourisomForm;
