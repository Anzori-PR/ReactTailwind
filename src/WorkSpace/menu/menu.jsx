import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function menu() {
    return (
        <div className='p-1'>
            <nav class="border-b-2 border-gray-300 relative">
                <div class="container flex flex-row justify-between items-center py-2">

                    <menu class="lg:w-[55%] md:w-[65%] w-[75%] hidden sm:block">
                        <ul class="flex flex-row justify-between items-center font-semibold">
                            <li><a href="#">ქალი</a></li>
                            <li><a href="#">კაცი</a></li>
                            <li><a href="#">ბავშვი</a></li>
                            <li><a href="#">მოდა</a></li>
                            <li><a href="#">სპორტული</a></li>
                            <li><a href="#">საშინაო</a></li>
                        </ul>
                    </menu>

                    <div class="dropdown cursor-pointer sm:hidden block relative group">
                        <button class="dropbtn"> აირჩიე ტიპი
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content hidden absolute bg-white border border-gray-300 bg-opacity-95 z-50 h-56 px-4 right12 group-focus-within:block top-10">
                            <div class="flex flex-col justify-between items-center gap-3 py-2 cursor-pointer">
                                <a href="#" class="hover:text-gray-500 cursor-pointer">ქალი</a>
                                <a href="#" class="hover:text-gray-500 cursor-pointer">კაცი</a>
                                <a href="#" class="hover:text-gray-500 cursor-pointer">ბავშვი</a>
                                <a href="#" class="hover:text-gray-500 cursor-pointer">მოდა</a>
                                <a href="#" class="hover:text-gray-500 cursor-pointer">სპორტული</a>
                                <a href="#" class="hover:text-gray-500 cursor-pointer">საშინაო</a>
                            </div>
                        </div>
                    </div>



                    <span class="busket relative float-right">
                        <li class="fa-solid text-xl fa-cart-shopping cursor-pointer"></li>
                        <FontAwesomeIcon icon="home" />
                    </span>

                </div>
            </nav>
        </div>
    );
}

export default menu;