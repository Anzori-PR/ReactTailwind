
import cardlist from '../../Data';
import React, { useState, useRef } from 'react';


function Hero() {
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
                    <span>ახალი ატვირთული</span>
                    <span className='flex justify-between flex-row items-center w-10'>
                        <i
                            className='fas fa-chevron-left text-gray-400 cursor-pointer text-xl sm:text-2xl'
                            onClick={handleScrollLeft}
                        ></i>
                        <i
                            className='fas fa-chevron-right text-gray-400 cursor-pointer text-xl sm:text-2xl'
                            onClick={handleScrollRight}
                        ></i>
                    </span>
                </div>
            
            </section>
            
            <div className='container h-96 mx-auto'>
                <div className='overflow-x-hidden flex'  ref={cardlistRef}>
                    <div className='flex flex-row row-auto whitespace-nowrap gap-5 my-8'>
                        {cardlist.map((card) => (
                            <div className='w-52 p-2 rounded-md' key={card.id}>
                                <img className='rounded-2xl' src={card.image} alt='image' />
                                <p className='py-2'>{card.name}</p>
                                <h1 className='text-[16px] font-bold'>{card.price}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            

        </div>
    );
}

export default Hero;
