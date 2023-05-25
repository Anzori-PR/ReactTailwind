import React from "react";

function footer() {
    return (
        <div className="p-1 bg-slate-100 ">
            <footer className="container flex justify-between py-10">
                <div className="contact w-full flex">
                    <div>
                        <h1 className="font-bold text-2xl mb-2">BUCKET</h1>
                        <p>ნომერ პირველი ონლაინ ტანსაცმლის მაღაზია</p>
                    </div>
                </div>

                <div className="w-full flex">
                    <div>
                        <p className="text-[14px] mb-5 font-semibold">მიიღეთ უახლესი ინფორმაცია</p>
                        <div className='relative'>
                            <input type='email' id='default-search' className='block w-full p-2.5 pl-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-3xl placeholder:text-[12px]' placeholder='Enter Your e-mail' required />
                            <button type='submit' className='text-white absolute right-2.5 top-[0.3rem] bg-cyan-500 hover:bg-cyan-600 focus:outline-none font-medium rounded-full text-sm px-2.5 py-1.5'>
                                <li className='fas fa-arrow-right'></li>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="vertline bg-gray-200 w-[1px] h-auto mx-10"></div>

                <div className="fotlink w-full flex justify-end">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold mb-2">საკონტაქტო ინფორმაცია</h3>
                        <p className="flex justify-start items-center gap-3 mb-3 cursor-pointer">
                            <i className="fas fa-phone text-[13px]"></i>
                            <p>(+995) 069 777 777</p>
                        </p>
                        <p className="flex justify-start items-center gap-3 cursor-pointer">
                            <i className="fas fa-envelope text-[13px]"></i>
                            <p>Info_bucket@gmail.com</p>
                        </p>
                    </div>
                </div>

                <div className="follow w-full flex  justify-end">
                    <div className="flex flex-col gap-1">
                        <div className="">
                            <h1 className="font-semibold cursor-pointer">ჩვენს შესახებ</h1>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold">გამოგვიწერეთ</h1>
                            <div className="flex justify-between items-center my-2">
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