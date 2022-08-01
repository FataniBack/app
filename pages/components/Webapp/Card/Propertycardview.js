import React from 'react'
import Propertycardmv from './Propertycardmv'

const Propertycardview = () => {
  return (
   <>
     <div className="flex justify-between mt-3">
    <h1 className="font-bold text-2xl mx-2 ">Recent Listings</h1>
    <h1>See All</h1>
    </div>
    <section></section>

    <div className="grid grid-cols-2 gap-4">
      <div><Propertycardmv/></div>

      <div><Propertycardmv/></div>
    </div>

    </>
  
  )
}

export default Propertycardview