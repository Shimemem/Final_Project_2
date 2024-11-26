// Notices.js
import React from 'react';

function Notices() {
  const notices = [
    { id: 1, message: 'Our new game tournament starts next week!' },
    { id: 2, message: 'Café will be closed for maintenance on October 20.' },
    { id: 3, message: 'New gaming setups arriving soon!' },
  ];

  return (
    <div className="container">
      <h2>Notices</h2>
      <ul>
        {notices.map(notice => (
          <li key={notice.id}>{notice.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notices;
