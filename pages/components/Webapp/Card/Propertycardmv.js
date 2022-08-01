import React from "react";
import Image from "next/image";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

const Propertycardmv = () => {
  return (
    <>
      
        <div className="  max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-4 ">
        <div className="relative">
          <Image
            src="/demo.avif"
            alt="Picture of the author"
            width={550}
            height={430}
          />
           <h3 className="absolute text-xs text-blue-800 top-5 left-0 bg-white p-1 rounded-sm font-bold opacity-75">For Sale</h3>
        </div>
        <div className=" flex grid-cols-2 gap-1 p-1">
          <div className="items-start mx-1 p-1">
            <p className="text-xs bg-red-200 rounded-md p-1 opacity-70">
              Post 2 hours ago
            </p>
            <a
              href="#"
              className=" text-sm font-bold text-gray-800 dark:text-white"
            >
              House for Sale
            </a>
            <p className="text-xs text-green-600 dark:text-gray-200">
              Clifton, Karachi
            </p>
            <div className="flex">
              <p className="text-sm text-gray-700 dark:text-gray-200 ">PKR</p>
              <span className="text-sm mx-0.5">3.8</span>
              <span className="text-sm">Crore</span>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-4">
              <div className="text-xs font-semibold">
                2<span className="mx-0.5">beds</span>
              </div>
              <div className="text-xs font-semibold">
                1<span className="mx-0.5">bath</span>
              </div>

              <div className="text-xs font-semibold ">
                60<span className="mx-0.5">sqyd</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 bottom-5 ">
            <span className="">|</span>
            {/* <img className="object-cover w-auto h-10" src="demo.png" alt="avatar" /> */}
            <button className="text-sm bg-red-400 p-1 rounded-lg font-semibold  ">
              <BiPhoneCall />
            </button>
            <button className="text-sm bg-green-400 p-1 rounded-lg font-semibold ">
              <AiOutlineWhatsApp />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Propertycardmv;
