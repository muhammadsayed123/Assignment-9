// import React from 'react';
import { BiAdjust } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  //   console.log(toy);
  const { toyId, toyName, price, rating, availableQuantity, pictureURL } = toy;
  return (
    <div>
      <div className="w-full max-w-[320px] sm:max-w-87 md:max-w-95 mx-auto bg-white rounded-xl flex flex-col h-full shadow-md hover:shadow-xl
      transition-transform duration-300 ease-in-out
      hover:-translate-y-2 cursor-pointer">
        <div>
          <img
            src={pictureURL}
            alt={toyName}
            className="h-40 w-full max-w-[320px] sm:max-w-87 md:max-w-95 rounded-t-xl "
          />
          <div className="p-2 flex flex-col gap-1">
            <h1 className="font-bold text-xl">{toyName}</h1>
            <div className="flex items-center justify-between my-2">
              <p className="text-green-500 font-medium flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                {rating}
              </p>
              <p className="text-red-500 flex items-center gap-1">
                <BiAdjust />
                {availableQuantity} left
              </p>
            </div>
            <h1 className="font-medium mb-1">$ {price}</h1>
            <Link
              to={`/productDetails/${toyId}`}
              className="btn bg-amber-600 rounded-2xl transition-all duration-300
            hover:bg-amber-700 hover:scale-95"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
