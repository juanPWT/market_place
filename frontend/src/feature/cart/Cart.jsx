/* eslint-disable react/prop-types */
import React from "react";
import { formatCurrency } from "../../hook/formatCurrency";
import { useCart } from "../../hook/CartContext";

const Cart = ({ cartItems }) => {
  const { incrementItems, decrementItems, deleteItems } = useCart();
  return (
    <ul className="menu p-4  xl:w-[600px] min-h-full bg-gradient-to-t from-fuchsia-500 to-white/20 text-base-content">
      {/* Sidebar content here */}
      {Array.isArray(cartItems) && cartItems.length >= 1 ? (
        cartItems.map((data, i) => {
          return (
            <li className="mt-5" key={data.item.product._id}>
              <div className="w-full h-auto flex justify-start items-start gap-5">
                <img
                  src={data.item.product.imageCover}
                  alt="product"
                  className="w-[250px] h-[200px] object-cover rounded-xl"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-white text-xl">
                    {data.item.product.name}
                  </h1>
                  <div className="w-32 xl:w-40 h-12 my-auto  border-2 border-white rounded-lg gap-6 flex justify-center items-center">
                    <button onClick={() => decrementItems(i)}>
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
                    <button onClick={() => incrementItems(i)}>
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
                    {formatCurrency(data.total)}
                  </h1>
                  <p className="text-white text-sm font-semibold">
                    From : {data.item.store.storename}
                  </p>
                  <button
                    onClick={() => deleteItems(i)}
                    className="flex gap-5 w-[100px] bg-red-500 rounded-xl text-white py-2 px-3 hover:bg-red-600"
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                    <span className="m-auto">Delete</span>
                  </button>
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
      {cartItems.length >= 1 ? (
        <li className="mt-10">
          <button className="bg-white text-fuchsia-500 w-full rounded-xl text-xl font-bold flex justify-center items-center">
            Check out
          </button>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

export default Cart;
