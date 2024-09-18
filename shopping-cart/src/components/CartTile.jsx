import { useContext } from "react";
import { ShoppingCartContext } from "../context";

/* eslint-disable react/prop-types */
const CartTile = ({ singleCartItem }) => {
  const { handleRemoveFromCart, handleAddToCart } =
    useContext(ShoppingCartContext);
  return (
    <>
      <div className="grid grid-cols-3 items-start gap-5 ">
        <div className="col-span-2 flex items-start gap-4 ">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm ">
            <img
              src={singleCartItem?.thumbnail}
              className="w-full h-full object-contain "
              alt={singleCartItem?.title}
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">
              {singleCartItem?.title}
            </h3>
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, true)}
              className="text-sm px-4 py-3 mt-4 bg-red-500 text-white font-extrabold"
            >
              REMOVE
            </button>
          </div>
        </div>
        <div className="ml-auto ">
          <h3 className=" w-fit text-lg font-bold text-gray-900 mx-0 ml-auto ">
            ${singleCartItem?.totalPrice.toFixed(2)}
          </h3>
          <div className="flex gap-2 mt-3">
            <p className="mx-2 my-3 font-bold text-[16px]">
              Quantity:{singleCartItem.quantity}
            </p>

            <button
              onClick={() => handleRemoveFromCart(singleCartItem, false)}
              disabled={singleCartItem?.quantity === 1}
              className="disabled:opacity-65 text-white border border-[#000] "
            >
              -
            </button>
            <button
              onClick={() => handleAddToCart(singleCartItem)}
              className="text-white border border-[#000] "
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500" />
    </>
  );
};

export default CartTile;
