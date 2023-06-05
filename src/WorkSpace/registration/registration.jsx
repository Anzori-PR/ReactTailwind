import React from 'react';

const registration = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 rounded-xl shadow">
        <h2>სარეგისტრაციო ფორმა</h2>
        <div>
            <input type="text" placeholder='Your name' />
            <input type="text" placeholder='Surname' />
        </div>

        <button className='' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default registration;
