import React from "react";

function footer() {
    return (
        <div className="p-1 bg-slate-100 ">
            <footer className="container lg:flex lg:justify-between lg:flex-row py-10 sm:grid sm:grid-cols-2 gap-7 smm:grid smm:grid-cols-2">
                <div className="contact w-full flex">
                    <div>
                        <h1 className="font-bold text-2xl mb-2">BUCKET</h1>
                        <p className="lg:text-[1rem] md:text-[1rem] sm:text-[0.9rem] text-[0.7rem]">ნომერ პირველი ონლაინ ტანსაცმლის მაღაზია</p>
                    </div>
                </div>

                <div className="w-full flex">
                    <div>
                        <p className="mb-5 font-semibold lg:text-[1rem] md:text-[1rem] sm:text-[0.9rem] text-[0.7rem]">მიიღეთ უახლესი ინფორმაცია</p>
                        <div className='relative'>
                            <input type='email' id='default-search' className='block w-full p-2.5 pl-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-3xl placeholder:text-[12px] smm:placeholder:text-[10px]' placeholder='Enter Your e-mail' required />
                            <button type='submit' className='text-white absolute right-2.5 top-[0.3rem] bg-cyan-500 hover:bg-cyan-600 focus:outline-none font-medium rounded-full text-sm px-2.5 py-1.5'>
                                <li className='fas fa-arrow-right'></li>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="vertline bg-gray-200 lg:w-[1px] lg:h-auto mx-10 sm:w-full sm:h-[1px] hidden lg:block"></div>

                <div className="fotlink w-full flex lg:justify-end justify-start">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold mb-2 lg:text-[1rem] md:text-[1rem] sm:text-[0.9rem] text-[0.7rem]">საკონტაქტო ინფორმაცია</h3>
                        <p className="flex justify-start items-center gap-3 mb-2 cursor-pointer">
                            <i className="fas fa-phone text-[13px]"></i>
                            <p className="lg:text-[1rem] md:text-[1rem] sm:text-[0.9rem] text-[0.7rem]">(+995) 069 777 777</p>
                        </p>
                        <p className="flex justify-start items-center gap-3 cursor-pointer">
                            <i className="fas fa-envelope text-[13px]"></i>
                            <p className="lg:text-[1rem] md:text-[1rem] sm:text-[0.9rem] text-[0.7rem]">Info_bucket@gmail.com</p>
                        </p>
                    </div>
                </div>

                <div className="follow w-full flex  lg:justify-end justify-start"
                >
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold lg:text-[1rem] md:text-[1rem] sm:text-[0.9rem] text-[0.7rem]">გამოგვიწერეთ</h1>
                            <div className="flex justify-between items-center my-2 gap-3">
                                <i className="fab fa-instagram text-3xl cursor-pointer"><a href="#"></a></i>
                                <i className="fab fa-facebook text-3xl cursor-pointer"><a href="#"></a></i>
                                <i className="fab fa-twitter text-3xl cursor-pointer"><a href="#"></a></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default footer;