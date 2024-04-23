import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/HomePage';
import AddTourisomPage from './components/AddTourisomPage';
import EditTourisomPage from './components/EditTourisomPage';
import ViewTourisomPage from './components/ViewTourisomPage';
import ManageTourisomsPage from './components/ManageTourisomPage';
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <Router>
      <div className="App">
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-tourisom" element={<AddTourisomPage />} />
            <Route path="/edit-tourisom/:id" element={<EditTourisomPage />} />
            <Route path="/view-tourisom" element={<ViewTourisomPage />} />
            <Route path="/manage-tourisoms" element={<ManageTourisomsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
