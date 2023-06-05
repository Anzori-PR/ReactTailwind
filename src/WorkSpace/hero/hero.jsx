import cardlist from '../../Data_recantly';
import React, { useState, useRef, useEffect } from 'react';

function Hero() {
    const cardlistRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollAmount, setScrollAmount] = useState(0);

    const [favorites, setFavorites] = useState([]);
    const [clickCounts, setClickCounts] = useState({});

    const handleHeartClick = (cardId) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(cardId)) {
                return prevFavorites.filter((id) => id !== cardId);
            } else {
                return [...prevFavorites, cardId];
            }
        });
    
        setClickCounts((prevClickCounts) => {
            const updatedCounts = { ...prevClickCounts };
            if (prevClickCounts[cardId] && prevClickCounts[cardId] > 0) {
                updatedCounts[cardId] = prevClickCounts[cardId] - 1;
            } else {
                updatedCounts[cardId] = (updatedCounts[cardId] || 0) + 1;
            }
            localStorage.setItem('clickCounts', JSON.stringify(updatedCounts));
            return updatedCounts;
        });
    };
    

    useEffect(() => {
        // Retrieve click counts from localStorage on component mount
        const storedClickCounts = localStorage.getItem('clickCounts');
        if (storedClickCounts) {
            setClickCounts(JSON.parse(storedClickCounts));
        }

        // Retrieve favorites from localStorage on component mount
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }

        // Calculate the scroll amount based on the container width
        const calculateScrollAmount = () => {
            const containerWidth = cardlistRef.current.offsetWidth;
            setScrollAmount(containerWidth);
        };

        calculateScrollAmount();

        // Recalculate scroll amount on window resize
        window.addEventListener('resize', calculateScrollAmount);

        return () => {
            // Clean up the event listener on component unmount
            window.removeEventListener('resize', calculateScrollAmount);
        };
    }, []);

    useEffect(() => {
        // Update favorites in localStorage when it changes
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const handleScrollLeft = () => {
        cardlistRef.current.scrollLeft -= scrollAmount;
        setScrollPosition(cardlistRef.current.scrollLeft);
    };

    const handleScrollRight = () => {
        cardlistRef.current.scrollLeft += scrollAmount;
        setScrollPosition(cardlistRef.current.scrollLeft);
    };

    return (
        <div className="p-1">
            <section className="container flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <span className="font-bold">ახალი ატვირთული</span>
                    <span className="flex justify-between flex-row items-center w-10">
                        <i
                            className="fas fa-chevron-left text-gray-900 cursor-pointer lg:text-[18px] text-[15px]"
                            onClick={handleScrollLeft}
                        ></i>
                        <i
                            className="fas fa-chevron-right text-gray-900 cursor-pointer lg:text-[18px] text-[15px]"
                            onClick={handleScrollRight}
                        ></i>
                    </span>
                </div>
            </section>

            <div className="container h-auto mx-auto">
                <div
                    className="flex overflow-auto custom-scrollbar"
                    ref={cardlistRef}
                    style={{
                        scrollBehavior: 'smooth',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    <div className="flex justify-center items-center flex-row row-auto whitespace-nowrap gap-5 my-8 mx-2">
                        {cardlist.map((card) => (
                            <div className="w-52 rounded-xl smm:w-72" key={card.id}>
                                <img className="rounded-2xl" src={card.image} alt="image" />
                                <span className='flex justify-between pt-3'>
                                    <p className="">{card.name}</p>
                                    <span className='flex items-center gap-2'>
                                        <p className='text-[11px]'> {clickCounts[card.id] || 0} </p>
                                        <i className={`fas fa-heart ${favorites.includes(card.id) ? 'text-red-500' : 'text-gray-300'
                                            } cursor-pointer`}
                                            onClick={() => handleHeartClick(card.id)}></i>
                                    </span>
                                </span>
                                <h1 className="text-[16px] py-1 font-semibold">{card.price}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
