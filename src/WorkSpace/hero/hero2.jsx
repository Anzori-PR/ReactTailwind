import cardlist from '../../Data_maylike';
import React, { useState, useRef } from 'react';


function Hero2() {
    const cardlistRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScrollLeft = () => {
        cardlistRef.current.scrollLeft -= 230; // Adjust the scroll amount as needed
        setScrollPosition(cardlistRef.current.scrollLeft);
    };

    const handleScrollRight = () => {
        cardlistRef.current.scrollLeft += 230; // Adjust the scroll amount as needed
        setScrollPosition(cardlistRef.current.scrollLeft);
    };

    return (
        <div className='p-1'>
            <section className='container flex flex-col justify-between'>
                <div className='flex justify-between items-center'>
                    <span className='font-bold'>შესაძლოა მოგწონდეს</span>
                    <span className='flex justify-between flex-row items-center w-10'>
                        <i
                            className='fas fa-chevron-left text-gray-900 cursor-pointer lg:text-[18px] text-[15px]'
                            onClick={handleScrollLeft}
                        ></i>
                        <i
                            className='fas fa-chevron-right text-gray-900 cursor-pointer lg:text-[18px] text-[15px]'
                            onClick={handleScrollRight}
                        ></i>
                    </span>
                </div>
            
            </section>
            
            <div className='container h-96 mx-auto'>
                <div className='overflow-x-hidden flex'  ref={cardlistRef}>
                    <div className='flex flex-row row-auto whitespace-nowrap gap-5 my-8'>
                        {cardlist.map((card) => (
                            <div className='w-52 rounded-md' key={card.id}>
                                <img className='rounded-2xl' src={card.image} alt='image' />
                                <p className='py-2'>{card.name}</p>
                                <h1 className='text-[16px] font-semibold'>{card.price}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            

        </div>
    );
}

export default Hero2;
