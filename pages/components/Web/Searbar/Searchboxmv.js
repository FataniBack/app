import React from "react";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Searchboxmv = () => {
  const [Filterhide, FilterShow] = useState(false);
  const [Bedhide, BedShow] = useState(false);
  const [Sizehide, SizeShow] = useState(false);
  const [Pricehide, PriceShow] = useState(false);

  return (
    <>
      <div className="flex p-1 w-full text-sm text-gray-900 bg-gray-50 opacity-45 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <div>
          <div className="hidden mx-5 my-3 md:flex md:grid-cols-3 md:gap-1  ">
            <div>
              {" "}
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    className=" p-3 pl-10 w-[20rem] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search House, Plots, FLats..."
                    required
                  />
                </div>
              </form>
            </div>

            <div className="mt-0 p-3 pl-3 pr-5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <select>
                <option value="fruit">Karachi</option>
                <option value="vegetable">Vegetable</option>
                <option value="meat">Meat</option>
              </select>
            </div>
            <div className="mt-0   p-3 pl-3 pr-5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <select>
                <option value="fruit">Select Area</option>
                <option value="vegetable">Vegetable</option>
                <option value="meat">Meat</option>
              </select>
            </div>

            <div className="mt-0   p-3 pl-3 pr-5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <select>
                <option value="fruit">Property Type...</option>
                <option value="vegetable">Vegetable</option>
                <option value="meat">Meat</option>
              </select>
            </div>
            <button
              type="submit"
              className="text-white mx-1  text-lg p-4 pl-5 pr-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-7 ml-4 mr-4  h-10 text-white dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {/* down options */}
          <div className="flex justify-between mt-2  mx-2  ml-1 mr-4 p-1 mb-2">
            <div className="font-bold flex text-sm space-x-3">
              <div onClick={() => PriceShow(!Pricehide)} className="font-bold text-sm space-x-1 flex  cursor-pointer">
                <span>Price</span>
                <BiChevronDown className="mt-0 text-xl" />
              </div>
              <div onClick={() => SizeShow(!Sizehide)} className="font-bold text-sm space-x-1 flex  cursor-pointer">
                <span>Size</span>
                <BiChevronDown className="mt-0 text-xl" />
              </div>
              <div
                onClick={() => BedShow(!Bedhide)}
                className="font-bold text-sm space-x-1 flex  cursor-pointer"
              >
                <span>Beds</span>
                <BiChevronDown className="mt-0 text-xl" />
              </div>
            </div>
            <div className="font-bold text-md"></div>
            <div
              onClick={() => FilterShow(!Filterhide)}
              className="font-bold text-sm space-x-1 flex  cursor-pointer"
            >
              <button>Filter</button>
              <BiChevronDown className="mt-0 text-xl" />
            </div>
          </div>
          {/* Filter */}
          {Filterhide ? (
            <div className="p-4 border cursor-pointer bg-white rounded">hello</div>
          ) : null}
          {/* Filterend */}
          {/* Bed */}
          {Bedhide ? <div className="p-4 border cursor-pointer bg-white rounded">hello</div> : null}
          {/* Bedend */}
          {/* Size */}
          {Sizehide ? <div className="p-4 border cursor-pointer bg-white rounded">hello</div> : null}
          {/* Sizeend */}
          {/* Price */}
          {Pricehide ? <div className="p-4 border cursor-pointer bg-white rounded">hello</div> : null}
          {/* Priceend */}
        </div>
      </div>
    </>
  );
};

export default Searchboxmv;
