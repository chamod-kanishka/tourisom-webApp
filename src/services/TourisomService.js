import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/tourisoms'; // Update with your backend URL

const createTourisom = async (tourisomData) => {
  try {
    const response = await axios.post(baseUrl, tourisomData);
    return response.data;
  } catch (error) {
    console.error('Error creating tourisom:', error);
    throw error;
  }
};

const getAllTourisoms = async () => {
    console.log("hi");
  try {
    const response = await axios.get(baseUrl);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error getting tourisoms:', error);
    throw error;
  }
};

const updateTourisom = async (id, tourisomData) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, tourisomData);
    return response.data;
  } catch (error) {
    console.error('Error updating tourisom:', error);
    throw error;
  }
};

const deleteTourisom = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting tourisom:', error);
    throw error;
  }
} 
  const getTourisomById = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error getting tourisom by ID:', error);
      throw error;
    }
  };

  const searchTourisoms = async (keyword) => {
    try {
      const response = await axios.get(`${baseUrl}/search?keyword=${keyword}`);
      return response.data;
    } catch (error) {
      console.error('Error searching tourisoms:', error);
      throw error;
    }
  };
  
  export default {
    createTourisom,
    getAllTourisoms,
    updateTourisom,
    deleteTourisom,
    getTourisomById,
    searchTourisoms // Add the new function to the export
  }
