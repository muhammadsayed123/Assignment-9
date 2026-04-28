// import React from 'react';

import { useParams } from "react-router";
import useProduct from "../Hook/useProduct";
import { FaStar } from "react-icons/fa6";
import TryCard from "./TryCard";

const ProductDetails = () => {
  const { id } = useParams();

  const { product, loading } = useProduct();

  const singleProduct = product.find((p) => String(p.toyId) === id);

  console.log(singleProduct);

  if (loading) {
    return <div className="text-center py-20 text-2xl">Loading...</div>;
  }

  return (
    <div className="bg-orange-100 min-h-120">
      <div className=" md:w-9/12 sm:w-11/12 mx-auto flex gap-10 py-10">
        <div className="left-div flex-1">
          <img
            src={singleProduct.pictureURL}
            alt=""
            className="h-75 w-120"
          />
        </div>
        <div className="right-div flex-1">
          <h1 className="font-extrabold text-3xl">{singleProduct.toyName}</h1>
          <h1 className="font-bold text-2xl text-amber-600 py-3">${singleProduct.price}</h1>
          <div className="flex gap-10">
            <p className="text-green-600 font-medium flex items-center gap-1  bg-green-200 rounded-xl px-2">
              <FaStar className="text-yellow-400" />
              {singleProduct.rating}
            </p>
            <p className="text-amber-700 font-medium flex items-center gap-1  bg-amber-300 rounded-xl px-2">
              {singleProduct.availableQuantity} Available
            </p>
          </div>
          <p className="text-gray-600 py-5">{singleProduct.description}</p>
          <TryCard></TryCard>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
