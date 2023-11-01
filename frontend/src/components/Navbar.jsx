import React from "react";
import TextGradient from "../utils/components/TextGradient";
import { Link } from "react-router-dom";
import Cart from "../feature/cart/Cart";
import { useCart } from "../hook/CartContext";

const Navbar = () => {
  const user = false;

  //for cart
  const { cartItems } = useCart();
  const amountItemsInCart = cartItems.length === null ? 0 : cartItems.length;

  return (
    <div className="w-full h-[70px] flex  justify-end z-20 fixed top-0  py-2 px-10">
      <div className="m m-auto flex justify-center items-center gap-2">
        <h1 className="text-white font-semibold">Free Palestine</h1>
        <Link
          to={
            "https://www.wfp.org/support-us/stories/palestine-appeal?utm_source=google&utm_medium=cpc&utm_campaign=20641571722&utm_content=153122019966&gad_source=1&gclid=Cj0KCQjw4vKpBhCZARIsAOKHoWSlSUst4jjUQdrfTzk0KJrDg2lRwGZq7WRxxJcvaFJCspY9lR2xZ4gaAuEhEALw_wcB&gclsrc=aw.ds"
          }
          target="_blank"
          className="text-black font-bold bg-gradient-to-r from-red-600 via-green-700 to-white rounded-xl p-1 text-sm xl:text-lg"
        >
          click to support
        </Link>
      </div>
      {!user ? (
        <>
          <div className="flex gap-4 justify-end items-end  ">
            <div className="drawer drawer-end">
              <input
                id="content-cart"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content ">
                {/* Page content here */}
                <label
                  htmlFor="content-cart"
                  className="drawer-button w-[50px] h-[50px] relative rounded-full bg-fuchsia-500 flex justify-center items-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  <div className="absolute bg-red-500 w-6 h-6 rounded-full flex justify-center items-center -bottom-2 right-0 ">
                    <span className="text-white">{amountItemsInCart}</span>
                  </div>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="content-cart"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <Cart cartItems={cartItems} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex gap-4 justify-end items-end ">
          <TextGradient size={"text-2xl"} child={"MP"} />
          <button className="bg-fuchsia-400 p-2  rounded-xl font-bold hover:shadow-lg hover:shadow-fuchsia-200 hover:bg-fuchsia-500">
            LOGIN
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
