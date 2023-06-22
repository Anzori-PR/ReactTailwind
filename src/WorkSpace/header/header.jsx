import React, { useState } from 'react';

function Header() {

    return (
        <div className='p-1'>
            <header className='container flex flex-row justify-between py-4'>
                <div className='logo flex flex-row items-center'>
                    <h1 className='text-black font-bold lg:text-3xl md:text-3xl text-2xl'>Bucket</h1>
                </div>
                <div>
                    
                </div>
            </header>
            <div className='line border-b-2 border-gray-100'></div>
        </div>
    );
}

export default Header;