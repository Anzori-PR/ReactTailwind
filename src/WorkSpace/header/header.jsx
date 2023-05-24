import React from 'react';

function header() {
    return (
        <div className='p-1'>
            <header className='container flex flex-row justify-between py-4'>
                <div class='logo flex flex-row items-center'>
                    <h1 className='text-black font-bold lg:text-3xl md:text-3xl text-2xl'> Bucket </h1>
                </div>
                <div className='register flex row items-center'>
                    <a href='' className='no-underline button border-black border-2 bg-white text-black rounded-3xl p-1 px-2 text-xs md:text-sm lg:text-sm mx-3'>რეგისტრაცია</a>
                    <a href='' className='no-underline button border-black border-2 bg-black text-white rounded-3xl p-1 px-4 text-xs md:text-sm lg:text-sm'>შესვლა</a>
                </div>
            </header>

            <div className='line border-b-2 border-gray-300'></div>
        </div>
    );
}

export default header;