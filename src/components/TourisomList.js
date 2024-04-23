import React from 'react';

const TourisomList = ({ tourisoms }) => {
  return (
    <div>
      <h2>Tourisoms</h2>
      <ul>
        {tourisoms.map((tourisom) => (
          <li key={tourisom.tripId}>
            {tourisom.tourName} - {tourisom.location} - {tourisom.date} - {tourisom.cost}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TourisomList;
