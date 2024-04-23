import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tourismService from '../services/TourisomService';
import { FiHome } from 'react-icons/fi'; // Import the home icon from react-icons


const ViewTourismPage = () => {
  const [tourism, setTourism] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const fetchTourism = async () => {
      try {
        const data = await tourismService.getAllTourisoms();
        setTourism(data);
      } catch (error) {
        console.error('Error fetching tourism data:', error);
      }
    };
    fetchTourism();
  }, []);

  const handleInputChange = async (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    try {
      const data = await tourismService.searchTourisoms(keyword);
      setTourism(data);
    } catch (error) {
      console.error('Error searching tourism data:', error);
    }
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.homeLink}>
        <FiHome style={styles.homeIcon} />
      </Link>
      <h2 style={styles.heading}>View Tourism</h2>
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
            <th style={styles.th}>Tour Name</th>
            <th style={styles.th}>Location</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Cost</th>
          </tr>
        </thead>
        <tbody>
          {tourism.map((item) => (
            <tr key={item.id}>
              <td style={styles.td}>{item.tourName}</td>
              <td style={styles.td}>{item.location}</td>
              <td style={styles.td}>{item.date}</td>
              <td style={styles.td}>{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-tourisom" style={styles.link}>
        <button style={styles.button}>Add New Tourism</button>
      </Link>
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
    border: '1px solid black',
  },
  th: {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
  },
  td: {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: '#FFD700',
    color: '#333',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
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

export default ViewTourismPage;
