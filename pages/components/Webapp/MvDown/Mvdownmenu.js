import React from 'react'
import {  BsFillHouseDoorFill, BsPlusSquareDotted } from 'react-icons/bs';
import {  RiAdvertisementLine } from 'react-icons/ri';
import {  CgMoreVerticalO } from 'react-icons/cg';
import {  AiOutlinePlusCircle } from 'react-icons/ai';




const Mvdownmenu = () => {
  return (
    <div className="  grid grid-cols-5 gap-0.5 p-1 m-1">
  
    
  <button className="bg-blue-100 place-items-center p-1"><div ><BsFillHouseDoorFill className="flex mt-1 mx-6 text-2xl "/><br/> <p className="font-semibold text-sm">Home</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><RiAdvertisementLine className="flex mt-1 mx-6 text-2xl "/><br/> <p className="font-semibold text-sm">My Ads</p></div></button>
  
  <button className=" place-items-center border bg-red-100 p-1"><div ><BsPlusSquareDotted className="flex mt--2 mx-6 text-4xl "/><br/> <p className="font-semibold text-sm">Post Property</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><BsFillHouseDoorFill className="flex mt-1 mx-6 text-2xl "/><br/> <p className="font-semibold text-sm">Invest</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><CgMoreVerticalO className="flex mt-1 mx-6 text-2xl "/><br/> <p className="font-semibold text-sm">More</p></div></button>
  
</div>

  )
}

export default Mvdownmenu