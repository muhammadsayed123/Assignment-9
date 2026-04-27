// import React from 'react';

import { useParams } from "react-router";
import useProduct from "../Hook/useProduct";

const ProductDetails = () => {
  const { id } = useParams();

  const { product } = useProduct();

  const singleProduct = product.find((p) => String(p.toyId) === id);

  console.log(singleProduct);

  return <div>catagory--------------{id}</div>;
};

export default ProductDetails;
