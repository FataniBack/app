import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import Searchmvop from "./components/Webapp/Searchitem/Searchmvop";
import Searchboxmv from "./components/Webapp/Searchitem/Searchboxmv";
import Browseproopt from "./components/Webapp/Topoptions/Browseproopt";

const Searchbarmv = () => {
  return (
    <>
      <header className="text-white body-font bg-gradient-to-r from-cyan-400 to-indigo-800 p-1 ">
        <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
          <ul className="   flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto  ">
            <div className="flex items-center ml-8"></div>
          </ul>

          {/* <BiCodeAlt className="text-4xl font-[600] text-teal-900 cursor-pointer" />
          <span className="ml-3 text-3xl font-extrabold text-teal-600 cursor-pointer">Salman Ghouri Dev</span> */}
          <div className="mt-3 mb-5">
        <Searchmvop/>
      <Searchboxmv/>
          </div>

          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            {/* <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
    <span>
    
      <a href="/cart" className=" flex  p-1 border-b-2 border-transparent text-black hover:border-red-700 text-lg">
      <MdAttachEmail className="text-2xl text-black"/> info@cutacut.com
      </a>
    </span>
    <span>
    
    <a href="/cart" className=" flex  p-1 border-b-2 border-transparent text-black hover:border-red-700 text-lg">
    <AiOutlineShoppingCart className="text-2xl text-black"/> Buy
    </a>
  </span>
   
  </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Searchbarmv;
