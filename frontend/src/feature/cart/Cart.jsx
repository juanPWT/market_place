/* eslint-disable react/prop-types */
import React from "react";
import { formatCurrency } from "../../hook/formatCurrency";

const Cart = ({ cartItems }) => {
  //for cart
  return (
    <ul className="menu p-4  xl:w-[600px] min-h-full bg-gradient-to-t from-fuchsia-500 to-white/20 text-base-content">
      {/* Sidebar content here */}
      {Array.isArray(cartItems) && cartItems.length >= 1 ? (
        cartItems.map((data) => {
          const totalPrice = data.qty * data.product.price;

          return (
            <li className="mt-5" key={data.product._id}>
              <div className="w-full h-auto flex justify-start items-start gap-5">
                <img
                  src={data.product.imageCover}
                  alt="product"
                  className="w-[250px] h-[200px] object-cover rounded-xl"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-white text-xl">{data.product.name}</h1>
                  <div className="w-32 xl:w-40 h-12 my-auto  border-2 border-white rounded-lg gap-6 flex justify-center items-center">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </button>
                    <span className="font-bold text-white">{data.qty}</span>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                  <h1 className="text-white font-bold text-lg">
                    {formatCurrency(totalPrice)}
                  </h1>
                  <p className="text-white text-sm font-semibold">
                    From : {data.store.storename}
                  </p>
                </div>
              </div>
            </li>
          );
        })
      ) : (
        <li className="mt-5 text-white text-xl font-bold mx-5">
          <div className="flex gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span>Cart masih kosong</span>
          </div>
        </li>
      )}
    </ul>
  );
};

export default Cart;
