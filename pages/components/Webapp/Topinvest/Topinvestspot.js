import React from 'react'
import Image from 'next/image'

const Topinvestspot = () => {
  return (
   <>
   <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-4 ">
  <img className="object-cover w-full h-40" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
  <div className=" flex p-1">
    <div className="items-start mx-3 ">
    <a href="#" className=" text-md font-bold text-gray-800 dark:text-white">John Doe</a>
    <p className="text-sm text-green-600 dark:text-gray-200">Karachi</p>
    <p className="text-sm text-gray-700 dark:text-gray-200">View More...</p>
    </div>
   
    <div className="flex items-center space-x-2">
    <span className="">|</span>
    {/* <img className="object-cover w-auto h-10" src="demo.png" alt="avatar" /> */}
    <Image
     
      src="/demo.png"
      alt="Picture of the author"
      width={53}
      height={30}
    />
    </div>
  </div>
</div>

   </>
  )
}

export default Topinvestspot