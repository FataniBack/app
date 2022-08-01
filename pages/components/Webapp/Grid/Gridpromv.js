import React from 'react'
import {  GiSpookyHouse, GiHouse } from 'react-icons/gi';
import { BiBuildingHouse  } from 'react-icons/bi';
import { MdHouse ,MdHouseSiding, MdBedroomParent, MdOutlineOtherHouses } from 'react-icons/md';
import {  BsFillHouseDoorFill, BsBuilding } from 'react-icons/bs';
import {  FaBuilding, FaHotel } from 'react-icons/fa';
import {  TbDotsCircleHorizontal } from 'react-icons/tb';


const Gridpromv = () => {
  return (
  <>
  <div className="grid grid-cols-4 gap-2 px-1 py-1 mt-2 ml-1 mb-2 ">
  <button className="bg-gray-200 place-items-center p-1"><div ><GiSpookyHouse className=" text-blue-600 flex mt-3 mx-6 text-4xl "/><br/> <p className="font-semibold text-xs">All Residential</p></div></button>
  <button className="bg-gray-200 place-items-center p-1"><div ><BsFillHouseDoorFill className="flex text-blue-600 mt-3 mx-6 text-4xl "/><br/> <p className="font-semibold text-xs">House</p></div></button>
  <button className="bg-gray-200 place-items-center p-1"><div ><GiHouse className="flex text-blue-600 mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-xs">Guest House</p></div></button>
  <button className="bg-gray-200 place-items-center p-1"><div ><BsBuilding className="flex text-blue-600 mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-xs">Appartment</p></div></button>
  <button className="bg-gray-200 place-items-center p-1"><div ><BiBuildingHouse className="flex text-blue-600 mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-xs">Upper Portion</p></div></button>
  <button className="bg-gray-200 place-items-center p-1"><div ><MdHouse className="flex text-blue-600 mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-xs">Lower Portion</p></div></button>
  <button className="bg-gray-200 place-items-center p-1"><div ><MdHouseSiding className="flex text-blue-600 mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-xs">Farmhouse</p></div></button>
  <button className="bg-gray-200 place-items-center p-1"><div ><MdBedroomParent className="flex text-blue-600 mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-xs">Room</p></div></button>
  <button className="bg-gray-200 place-items-center p-1"><div ><FaBuilding className="flex text-blue-600 mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-xs">Penthouse</p></div></button>
  <button className="bg-gray-200 place-items-center p-1"><div ><FaHotel className="flex text-blue-600 mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-xs">Hotel Suites</p></div></button>
  <button className="bg-gray-200 place-items-center p-1"><div ><MdOutlineOtherHouses className="flex text-blue-600 mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-xs">Basement</p></div></button>
  <button className="bg-gray-200 place-items-center p-1"><div ><TbDotsCircleHorizontal className="flex text-blue-600 mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-xs">Others</p></div></button>
 </div>
  </>
  )
}

export default Gridpromv