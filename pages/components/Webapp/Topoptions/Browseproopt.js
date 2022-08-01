import React from 'react'

const Browseproopt = () => {
  return (
   <>
<div>
    <h1 className="text-2xl  font-bold justify-items-center mt-5 ml-2">
        Browse Properties
    </h1>

</div>

   <div className="flex border-b mt-2 border-gray-200 dark:border-gray-700">
   <button className="h-10 px-4 py-2 -mb-px text-md font-bold text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
    House
  </button>
 
  <button className="h-10 px-4 py-2 -mb-px text-md text-center font-bold text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
   Plot
  </button>
  <button className="h-10 px-4 py-2 -mb-px text-md font-bold text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
    Commercial
  </button>
</div>

   </>
  )
}

export default Browseproopt