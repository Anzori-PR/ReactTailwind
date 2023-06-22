import React from 'react';


function search() {
    return (
        <div classNameName='p-1'>
            <section className='container py-5'>
                <div className='xl:h-[512px] lg:h-[410px] md:h-[322px] sm:h-[264px] h-[41vh] bg-cover bg-center bg-no-repeat rounded-3xl bg-[url(./img/garderobi.jpg)]'>
                    <p className='flex justify-center items-center text-center px-2 xl:text-[40px] lg:text-3xl md:text-3xl sm:text-2xl text-[1rem] text-black font-bold h-[50%]'>
                        შეცვალეთ გარდერობი. <br className='hidden lg:block' /> <br className='hidden lg:block' /> იპოვეთ საინტერესო საქონელი.
                    </p>

                    <form className='container w-[75%] text-black'>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                <li className='fa-solid fa-search text-lg font-semibold text-gray-400'></li>
                            </div>
                            <input type='search' id='default-search' className='block w-full p-4 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-3xl placeholder:text-[12px]' placeholder='What are you looking for?' required />
                            <button type='submit' className='text-white absolute right-2.5 bottom-2.5 bg-cyan-500 hover:bg-cyan-600 focus:outline-none font-medium rounded-full text-sm px-3 py-1.5'>
                                <li className='fas fa-arrow-right '></li>
                            </button>
                        </div>
                    </form>

                </div>
            </section>

        </div>
    );
}

export default search;