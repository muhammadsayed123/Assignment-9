import { useParams } from "react-router";
import useProduct from "../Hook/useProduct";
import { FaStar } from "react-icons/fa6";
import TryCard from "./TryCard";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const { id } = useParams();
  const { product, loading } = useProduct();
  const singleProduct = product.find((p) => String(p.toyId) === id);

  if (loading) {
    return <div className="text-center py-20 text-2xl">Loading...</div>;
  }

  return (
    <div className="bg-orange-100 min-h-screen">
      <Helmet>
        <title>Product Details</title>
      </Helmet>
      <div className="w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row gap-10 py-10">

        <div className="flex-1 flex justify-center">
          <img
            src={singleProduct.pictureURL}
            alt=""
            className="w-full max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        <div className="flex-1">
          <h1 className="font-extrabold text-2xl md:text-3xl">{singleProduct.toyName}</h1>
          <h1 className="font-bold text-xl md:text-2xl text-amber-600 py-3">
            ${singleProduct.price}
          </h1>
          <div className="flex gap-10">
            <p className="text-green-600 font-medium flex items-center gap-1 bg-green-200 rounded-xl px-2">
              <FaStar className="text-yellow-400" />
              {singleProduct.rating}
            </p>
            <p className="text-amber-700 font-medium flex items-center gap-1 bg-amber-300 rounded-xl px-2">
              {singleProduct.availableQuantity} Available
            </p>
          </div>
          <p className="text-gray-600 py-5">{singleProduct.description}</p>
          <TryCard />
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;