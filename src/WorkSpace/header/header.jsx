import React from 'react';

function header({ openRegistration, openSignin}) {
    return (
        <div className='p-1'>
            <header className='container flex flex-row justify-between py-4'>
                <div class='logo flex flex-row items-center'>
                    <h1 className='text-black font-bold lg:text-3xl md:text-3xl text-2xl'> Bucket </h1>
                </div>
                <div className='register flex row items-center'>
                    <div className='cursor-pointer no-underline button border-black border-2 bg-white text-black rounded-3xl p-1 px-2 text-xs md:text-sm lg:text-sm mx-3' onClick={openRegistration}>რეგისტრაცია</div>
                    <div className='cursor-pointer no-underline button border-black border-2 bg-black text-white rounded-3xl p-1 px-4 text-xs md:text-sm lg:text-sm' onClick={openSignin}>შესვლა</div>
                </div>
            </header>

            <div className='line border-b-2 border-gray-100'></div>
        </div>
    );
}

export default header;