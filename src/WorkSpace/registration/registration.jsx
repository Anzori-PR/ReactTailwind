import React, { useState } from 'react';

const Registration = ({ onClose, openSignin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirm: '',
    name: '',
    surname: '',
    phone: '',
    email: '',
    gender: ''
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm) {
      // Passwords do not match, display the error message
      console.log('Passwords do not match');
      return;
    }

    const formDataWithSubmit = new FormData();
    formDataWithSubmit.append('submit', true);

    for (const [key, value] of Object.entries(formData)) {
      formDataWithSubmit.append(key, value);
    }

    fetch('http://localhost/Register.php', {
      method: 'POST',
      body: formDataWithSubmit
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        if (data.hasOwnProperty('message')) {
          console.log(data.message); // Output the message from the response
          console.log('Form submitted successfully');
          setFormData({
            username: '',
            password: '',
            confirm: '',
            name: '',
            surname: '',
            phone: '',
            email: '',
            gender: ''
          }); // Clear the form inputs
          setRegistrationStatus('success'); // Set the registration status to success
        } else {
          console.log('Form submission failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle the error
      });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegistrationClick = () => {
    onClose(); // Close the sign-in form
    openSignin(); // Open the registration form
  };


  return (
    <form
      action="http://localhost/Register.php"
      method="POST"
      onSubmit={handleSubmit}
      className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
    >
      <div className="bg-white p-1 rounded-xl shadow px-10 md:w-1/3 w-4/5">
        <i
          className="fas fa-close top-2 left-full cursor-pointer text-2xl relative "
          onClick={onClose}
        ></i>
        <h2 className="text-center text-lg font-semibold">რეგისტრაცია</h2>
        <div className="flex flex-col justify-between gap-1 text-md py-5 text-[16px]">
          <div className="flex flex-col justify-between gap-1 md:flex md:flex-row">
            <div className="flex flex-col w-full">
              <label htmlFor="name">სახელი</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="border-2 rounded-xl w-[100%] outline-none px-2"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="surname">გვარი</label>
              <input
                type="text"
                name="surname"
                id="surname"
                required
                className="border-2 rounded-xl w-[100%] outline-none px-2"
                value={formData.surname}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <label htmlFor="email">მეილი</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="border-2 rounded-xl outline-none px-2"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="phone">ნომერი</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            maxLength="30"
            required
            className="border-2 rounded-xl outline-none px-2"
            value={formData.phone}
            onChange={handleInputChange}
          />

          <label htmlFor="gender">სქესი</label>
          <div className="flex gap-2">
            <input
              type="radio"
              name="gender"
              id="genderMale"
              value="male"
              required
              className="border-2 rounded-xl outline-none px-2"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
            />{' '}
            კაცი
            <input
              type="radio"
              name="gender"
              id="genderFemale"
              value="female"
              required
              className="border-2 rounded-xl outline-none px-2"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
            />{' '}
            ქალი
          </div>

          <label htmlFor="username">მომხმარებლის სახელი</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            className="border-2 rounded-xl w-[100%] outline-none px-2"
            onChange={handleInputChange}
            value={formData.username}
          />

          <label htmlFor="password">პაროლი</label>
          <input
            type="password"
            name="password"
            id="password"
            maxLength="30"
            required
            className="border-2 rounded-xl outline-none px-2"
            onChange={handleInputChange}
          />

          <label htmlFor="confirm">გაიმეორეთ პაროლი</label>
          <input
            type="password"
            name="confirm"
            id="confirm"
            maxLength="30"
            required
            className="border-2 rounded-xl outline-none px-2"
            onChange={handleInputChange}
            value={formData.confirm}
          />
          {formData.password !== formData.confirm && (
            <p className="text-red-600">პაროლები არ ემთხვევა</p>
          )}

          {registrationStatus === 'success' && (
            <p className="text-center text-green-600">თქვენ წარმატებით გაიარეთ რეგისტრაცია</p>
          )}

          <input
            type="submit"
            name="submit"
            className="mx-auto bg-green-900 rounded-3xl p-3 mt-3 text-white w-1/2 cursor-pointer"
            onClick={handleSubmit}
            value="რეგისტრაცია"
          />

          <p className="text-center pt-2 text-sm">
            გაქვთ ანგარიში?{' '}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={handleRegistrationClick}
            >
              სისტემაში შესვლა
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Registration;
