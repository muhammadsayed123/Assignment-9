// import React from 'react';

import { use } from "react";
import Slider from "../Components/Slider";
import ToyCard from "../Components/ToyCard";

const dataPromise = fetch("toyData.json").then((res) => res.json());

const Home = () => {

    const toyData=use(dataPromise)
    // console.log(toyData)
  return (
    <div>
      <Slider></Slider>
      <div className="bg-orange-100">
        <div className="text-center py-10">
          <h1 className="font-extrabold text-4xl">
            Popular <span className="text-amber-600">Toys</span>
          </h1>
          <p className="text-gray-500">Loved by kids, trusted by families</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 w-10/12 mx-auto ">
            {
                toyData.map(data=> (<ToyCard key={data.toyId} toy={data}></ToyCard>))
            }
        </div>
      </div>
    </div>
  );
};

export default Home;
