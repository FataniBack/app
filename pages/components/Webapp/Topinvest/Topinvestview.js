import React from "react";
import Topinvestspot from "./Topinvestspot";

const Topinvestview = () => {
  return (

    <>
      <div className="flex justify-between mt-3">
    <h1 className="font-bold text-2xl mx-2 ">Top Investment Spot</h1>
    <h1>See All</h1>
    </div>
    <section></section>

    <div className="grid grid-cols-2 gap-4">
      <div><Topinvestspot/></div>

      <div><Topinvestspot/></div>
    </div>

    </>
  );
};

export default Topinvestview;
