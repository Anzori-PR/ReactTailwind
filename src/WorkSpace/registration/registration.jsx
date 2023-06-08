import React from 'react';

const registration = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-1 rounded-xl shadow px-10 md:w-1/3 w-4/5">
        <i className='fas fa-close top-2 left-full cursor-pointer text-2xl relative ' onClick={onClose}></i>
        <h2 className='text-center text-lg font-semibold'>რეგისტრაცია</h2>
        <div className='flex flex-col justify-between gap-1 text-md py-5'>
            <div className='flex flex-col justify-between gap-1 md:flex md:flex-row'>
              <div className='flex flex-col w-full'>
                <label htmlFor="name">სახელი</label>
                <input type="text" name='name' id='name' className='border-2 rounded-xl w-[100%] outline-none px-2'/>
              </div>

              <div className='flex flex-col w-full'>
                <label htmlFor="surname">გვარი</label>
                <input type="text" name='Surname' className='border-2 rounded-xl w-[100%] outline-none px-2'/>
              </div>
            </div>

            <label htmlFor="email">მეილი</label>
            <input type='email' name='email' className='border-2 rounded-xl outline-none px-2' />

            <label htmlFor="phone">ნომერი</label>
            <input type="tel" autocomplete="on" inputmode="numeric" name='phone' className='border-2 rounded-xl outline-none px-2'/>

            <label htmlFor="gender">სქესი</label>
            <div className="gender flex gap-2">
              <input type="radio" name="gender" value="male" className='border-2 rounded-xl outline-none px-2'/> კაცი
              <input type="radio" name="gender" value="female" className='border-2 rounded-xl outline-none px-2'/> ქალი 
            </div>

            <label htmlFor="username">მომხმარებლის სახელი</label>
            <input type="text" name="username" id="username" maxlength="30" required className='border-2 rounded-xl outline-none px-2'/>

            <label htmlFor="password">პაროლი</label>
            <input type="password" name="password" id="password" maxlength="30" required className='border-2 rounded-xl outline-none px-2'/>

            <label htmlFor="confirm">გაიმეორეთ პაროლი</label>
            <input type="password" name="confirm" id="confirm" maxlength="30" required className='border-2 rounded-xl outline-none px-2' />

            <button className=' mx-auto bg-green-900 rounded-3xl p-3 mt-3 text-white w-1/2'>რეგისტრაცია</button>

            <p className='text-center pt-2'>გაქვს ანგარიში? <span className='text-blue-600 cursor-pointer'>სისტემაში შესვლა</span></p>
        </div>
      </div>
    </div>
  );
};

export default registration;
