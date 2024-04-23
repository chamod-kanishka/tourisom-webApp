import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background-3.jpg'; // Import the background image

const HomePage = () => {
  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Discover Your Next Adventure</h2>
        <div style={styles.buttonContainer}>
          <Link to="/view-tourisom" style={styles.buttonLink}>
            <button style={styles.button}>View Tourism</button>
          </Link>
          <Link to="/manage-tourisoms" style={styles.buttonLink}>
            <button style={styles.button}>Manage Tourism</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundImage: `url(${backgroundImage})`, // Use backgroundImage as URL
    backgroundSize: 'cover', // Ensure the background image covers the entire background area without distortion
    backgroundPosition: 'center',
    minHeight: '100vh', // Set minimum height to 100% of viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    textAlign: 'center',
    color: 'white',
  },
  heading: {
    fontSize: '48px', // Increase font size for a more prominent heading
    marginBottom: '30px',
    fontFamily: 'Arial, sans-serif', // Use a specific font family for the heading
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a subtle text shadow for depth
    color: '#FFD700', // Change the color of the heading text to gold
    opacity: '0.9', // Adjust the opacity to make the heading slightly transparent
  },
  
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonLink: {
    textDecoration: 'none',
    margin: '0 10px',
  },
  button: {
    backgroundColor: '#FFD700', // Change button background color to gold
    border: '2px solid #FFD700', // Add a gold border to the button
    color: 'black', // Change button text color to black
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '18px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease, background-color 0.3s ease', // Add transition for smooth color change
  },
};

export default HomePage;
