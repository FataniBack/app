import React from 'react'
import Featureevents from './Featureevents'

const Featureview = () => {
  return (
    <>
     <div className="flex justify-between mt-3">
    <h1 className="font-bold text-2xl mx-2 ">Featured Events</h1>
    <h1>See All</h1>
    </div>
    <section></section>

    <div className="grid grid-cols-2 gap-4">
      <div><Featureevents/></div>

      <div><Featureevents/></div>
    </div>

    </>
  )
}

export default Featureview