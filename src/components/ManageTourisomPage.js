import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tourismService from '../services/TourisomService'; // Check the import path
import { FiHome } from 'react-icons/fi'; // Import the home icon from react-icons

const ManageTourismPage = () => {
  const [tourism, setTourism] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const fetchTourism = async () => {
      try {
        const data = await tourismService.getAllTourisoms(); // Corrected function name
        setTourism(data);
      } catch (error) {
        console.error('Error fetching tourism:', error);
      }
    };
    fetchTourism();
  }, []);

  const handleDelete = async (id) => {
    try {
      await tourismService.deleteTourisom(id); // Corrected function name
      setTourism(tourism.filter((item) => item.tripId !== id));
    } catch (error) {
      console.error('Error deleting tourism:', error);
    }
  };

  const handleInputChange = async (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    try {
      const data = await tourismService.searchTourisoms(keyword);
      setTourism(data);
    } catch (error) {
      console.error('Error searching tourism:', error);
    }
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.homeLink}>
        <FiHome style={styles.homeIcon} />
      </Link>
      <h2 style={styles.heading}>Manage Tourism</h2>
      <div style={styles.searchContainer}>
        <input
          type="text"
          value={searchKeyword}
          onChange={handleInputChange}
          placeholder="Search..."
          style={styles.searchInput}
        />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.cell}>Tour Name</th>
            <th style={styles.cell}>Location</th>
            <th style={styles.cell}>Date</th>
            <th style={styles.cell}>Cost</th>
            <th style={styles.cell}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tourism.map((item) => (
            <tr key={item.tripId}>
              <td style={styles.cell}>{item.tourName}</td>
              <td style={styles.cell}>{item.location}</td>
              <td style={styles.cell}>{item.date}</td>
              <td style={styles.cell}>{item.cost}</td>
              <td>
                <Link to={`/edit-tourisom/${item.tripId}`} style={styles.link}>
                  <button style={styles.button}>Edit</button>
                </Link>
                <button onClick={() => handleDelete(item.tripId)} style={styles.button}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
  searchContainer: {
    marginBottom: '20px',
  },
  searchInput: {
    marginRight: '10px',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    border: '1px solid black', // Add border to the table
  },
  cell: {
    border: '1px solid black', // Add border to table cells
    padding: '8px',
    textAlign: 'left',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: '#FFD700', // Change button background color to #FFD700
    color: '#333', // Change button text color to #333
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '5px',
    transition: 'background-color 0.3s ease',
  },
  homeLink: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: '#FFD700',
    fontSize: '24px',
    textDecoration: 'none',
  },
  homeIcon: {
    marginRight: '5px',
    verticalAlign: 'middle',
  },
};

export default ManageTourismPage;
