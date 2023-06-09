import React, { useState } from 'react';

const Signin = ({ onClose, openRegistration }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistrationClick = () => {
    onClose();
    openRegistration();
  };


  return (
    <form
      onSubmit={handleFormSubmit}
      className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
    >
      <div className="bg-white p-1 rounded-xl shadow px-10 md:w-1/3 w-4/5">
        <i
          className="fas fa-close top-2 left-full cursor-pointer text-2xl relative"
          onClick={onClose}
        ></i>
        <h2 className="text-center text-lg font-semibold">შესვლა</h2>
        <div className="flex flex-col justify-between gap-1 text-md py-5">
          <label htmlFor="username">მეილი</label>
          <input
            type="username"
            name="username"
            id='username'
            className="border-2 rounded-xl outline-none px-2 py-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">პაროლი</label>
          <input
            type="password"
            name="password"
            id="password"
            maxLength="30"
            required
            className="border-2 rounded-xl outline-none px-2 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="mx-auto bg-green-900 rounded-3xl p-3 mt-3 text-white w-1/2">
            შესვლა
          </button>

          {errorMessage && (
            <p className="text-center pt-2 text-sm text-red-500">{errorMessage}</p>
          )}

          <p className="text-center pt-2 text-sm">
            არ გაქვთ ანგარიში?
            <span
              className="text-blue-600 cursor-pointer ml-2"
              onClick={handleRegistrationClick}
            >
              რეგისტრაცია
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Signin;
