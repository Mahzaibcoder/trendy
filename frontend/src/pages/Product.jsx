import { useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { products } from "../data/product";

export default function Product() {

  const { productId } = useParams();

  const product = products.find((p) => p._id === productId);

  const [mainImage, setMainImage] = useState(product.imageUrls[0]);

  const handleAddToCart = () => {
    toast.success("Product added to cart 🛒");
  };

  return (
    <div className="max-w-6xl mx-auto p-3">

      <h1 className="text-3xl font-semibold pb-3 border-b">
        Product Details
      </h1>

      <div className="flex flex-col md:flex-row gap-6 mt-6">

        <div>

          <img
            src={mainImage}
            alt=""
            className="w-[350px] h-[350px] object-cover"
          />

          <div className="flex gap-2 mt-3">

            {product.imageUrls.map((img, index) => (

              <img
                key={index}
                src={img}
                alt=""
                className="w-16 h-16 object-cover border cursor-pointer"
                onClick={() => setMainImage(img)}
              />

            ))}

          </div>

        </div>

        <div>

          <h2 className="text-2xl font-semibold">
            {product.name}
          </h2>

          {product.offer ? (
            <div className="flex gap-2 mt-4">
              <p className="text-red-500 line-through">
                ${product.regularPrice}
              </p>
              <p className="font-semibold">
                ${product.discountPrice}
              </p>
            </div>
          ) : (
            <p className="mt-4 font-semibold">
              ${product.regularPrice}
            </p>
          )}

          <div className="flex mt-3 text-yellow-400 text-xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>

          <p className="mt-5 text-gray-600">
            {product.description}
          </p>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white p-2 rounded mt-6 flex items-center gap-2 hover:bg-blue-700"
          >
            <FaCartPlus />
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}