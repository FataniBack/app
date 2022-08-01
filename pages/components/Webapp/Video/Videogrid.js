import React from 'react'
import Videos from './Videos'

const Videogrid = () => {
  return (
    <>
    <div className="flex justify-between mt-3">
    <h1 className="font-bold text-2xl mx-2 ">Latest Videos</h1>
    <h1>See All</h1>
    </div>
    <section>
        
    <div className="grid grid-cols-3 gap-4 p-2">
  <div><Videos/></div>
  <div><Videos/></div>
  <div><Videos/></div>
</div>
</section>
    </>
  )
}

export default Videogrid