import React from "react";
import { FaTshirt, FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { products } from "../data/product";

export default function Products() {

  const navigate = useNavigate();

  const handleProductPage = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = () => {
    toast.success("Product added to cart 🛒");
  };

  return (
    <div className="max-w-6xl mx-auto p-3 min-h-screen">

      <h1 className="text-3xl font-semibold border-b pb-4 flex items-center gap-1 mt-3">
        Products <FaTshirt />
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">

        {products.map((product) => (

          <div
            key={product._id}
            className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
          >

            <img
              src={product.imageUrls[0]}
              alt={product.name}
              className="h-[220px] w-full object-cover cursor-pointer"
              onClick={() => handleProductPage(product._id)}
            />

            <div className="p-3 flex flex-col gap-2">

              <h3 className="text-lg font-semibold text-slate-700">
                {product.name}
              </h3>

              <p className="text-sm text-gray-600">
                {product.description}
              </p>

              {product.offer ? (
                <div className="flex gap-2">
                  <p className="text-red-600 line-through">
                    ${product.regularPrice}
                  </p>
                  <p className="text-green-600 font-semibold">
                    ${product.discountPrice}
                  </p>
                </div>
              ) : (
                <p className="font-semibold">
                  ${product.regularPrice}
                </p>
              )}

              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-blue-700"
              >
                <FaCartPlus />
                Add To Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}