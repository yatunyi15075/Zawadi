// AllSchoolsList.jsx
import React, { useState, useEffect } from 'react';

const demoData = [
  { id: 1, name: 'School A', location: 'City A' },
  { id: 2, name: 'School B', location: 'City B' },
  { id: 3, name: 'School C', location: 'City C' },
];

const AllSchoolsList = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    // Simulated fetch example
    setSchools(demoData); // Use demo data instead of fetching from an API
  }, []);

  return (
    <div>
      {schools.map((school) => (
        <div key={school.id}>
          <h3>{school.name}</h3>
          <p>{school.location}</p>
          {/* Add more school details as needed */}
        </div>
      ))}
    </div>
  );
};

export default AllSchoolsList;
