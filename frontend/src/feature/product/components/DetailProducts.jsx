import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as dataFetch from "../../../api/index";
import { formatCurrency } from "../../../hook/formatCurrency";

export const DetailProducts = () => {
  const [detailProduct, setDetailProduct] = useState({
    product: {
      _id: "",
      name: "",
      stok: 0,
      price: 0,
      description: "",
      imageCover: "",
    },
    store: {
      _id: "",
      storename: "",
      address: {
        state: "",
        city: "",
        block: "",
      },
      category: [],
      email: "",
    },
  });
  const [amount, setAmount] = useState(1);

  //for handler total price
  const [totalPrice, setTotalPrice] = useState(0);
  const handlerIncrease = () => {
    if (amount === detailProduct.product.stok) {
      setAmount(detailProduct.product.stok);
    } else {
      setAmount(amount + 1);
    }
  };
  const handlerDecrease = () => {
    if (amount === 1) {
      setAmount(amount);
    } else {
      setAmount(amount - 1);
      setTotalPrice(totalPrice - detailProduct.product.price);
    }
  };

  //for float card
  const [float, setFloat] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setFloat(
          "xl:fixed xl:w-[530px]  xl:top-1/2 xl:left-[1080px] xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2"
        );
      } else {
        setFloat("");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //fetch data
  const getId = location.pathname.split("/");
  const id = getId[2];

  useEffect(() => {
    const getDetailProductHandler = async () => {
      const get = await dataFetch.getDetailProduct(id);
      setDetailProduct({
        product: {
          _id: get.data.product._id,
          name: get.data.product.name,
          description: get.data.product.description,
          imageCover: get.data.product.imageCover,
          price: get.data.product.price,
          stok: get.data.product.stok,
        },
        store: {
          _id: get.data.store._id,
          storename: get.data.store.storename,
          address: {
            state: get.data.store.address.state,
            city: get.data.store.address.city,
            block: get.data.store.address.block,
          },
          category: get.data.store.category,
          email: get.data.store.email,
        },
      });
      setTotalPrice(get.data.product.price * amount);
    };

    getDetailProductHandler();
  }, [id, amount]);

  return (
    <div className="min-h-screen flex flex-col xl:flex-row justify-between p-2 mt-10 xl:mt-20 gap-4  items-center ">
      {/* komponen satu  */}
      <div className="flex flex-col xl:w-[800px]">
        <div className="w-full p-2 flex flex-col justify-center items-center h-[200px] bg-gradient-to-t from-fuchsia-700/50 to-white/10 mt-10 rounded-xl mb-2">
          <div className="flex gap-6 text-white">
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
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
              />
            </svg>
            <div className="flex flex-col gap-2">
              <h1 className=" font-semibold">
                {detailProduct.store.storename}
              </h1>
              <div className="flex gap-2  ">
                <span className="bg-green-400 w-[10px] h-[10px] my-auto rounded-full"></span>
                <span className="text-white my-auto">online</span>
              </div>
            </div>
            |
            <div className="bg-fuchsia-500 px-2 py-1 rounded-md font-semibold flex h-10 gap-1 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              <span>Chat</span>
            </div>
          </div>
          <div className="flex gap-4 text-white mt-6">
            <span>{detailProduct.store.email}</span>|
            <span>
              {detailProduct.store.address.state},{" "}
              {detailProduct.store.address.city}
            </span>
          </div>
        </div>
        <div className="m-auto w-full flex flex-col  bg-white overflow-hidden  h-[700px] rounded-xl">
          <img
            src={detailProduct.product.imageCover}
            alt="product"
            className="w-full h-[400px] object-cover"
          />
          <h1 className="mt-6 font-bold text-xl mx-6 text-gray-700">
            {detailProduct.product.name}
          </h1>
          <p className="mx-6 mt-5">{detailProduct.product.description}</p>
          <div className="mt-10 gap-8  mx-6 flex">
            <h1 className=" font-bold text-2xl">
              {formatCurrency(detailProduct.product.price)}
            </h1>
            <span className="my-auto flex gap-2">
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
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              <p className="bg-gradient-to-br from-orange-500 via-fuchsia-500 to-sky-500 font-bold text-lg text-transparent bg-clip-text">
                tersisa {detailProduct.product.stok} stok
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* komponen dua  */}
      <div
        className={`mt-3   p-4 m-auto w-full h-auto gap-3 bg-white rounded-lg flex flex-col xl:w-[530px] xl:mt-10  ${float} `}
      >
        <h1 className="mt-2 font-bold text-xl">Atur jumlah dan catatan</h1>
        <div className="w-full mt-5 flex justify-center items-center gap-3 ">
          <div className=" w-40 h-12 my-auto  border-2 border-gray-600 rounded-lg gap-6 flex justify-center items-center">
            <button onClick={handlerDecrease}>
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
                  d="M19.5 12h-15"
                />
              </svg>
            </button>
            <span className="font-bold">{amount}</span>
            <button onClick={handlerIncrease}>
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
          <p className="bg-gradient-to-br from-orange-500 via-fuchsia-500 my-auto to-sky-500 font-bold text-lg text-transparent bg-clip-text">
            tersisa {detailProduct.product.stok} stok
          </p>
        </div>
        <Link className="mt-5 flex justify-start items-start gap-5 cursor-pointer">
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
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          <p>tambahkan catatan</p>
        </Link>
        <div className="w-full h-full mt-2 flex ">
          <div className="flex w-full justify-center items-center">
            <h1 className="text-xl">subtotal</h1>
          </div>
          <div className="flex w-full justify-center items-center ">
            <div className="flex flex-col ">
              {/* <h1 className="font-thin line-through">Rp.4.000.000</h1> */}
              <h1 className="font-bold text-lg">
                {formatCurrency(detailProduct.product.price)}
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 flex flex-col gap-1">
          <div className="flex mx-auto justify-center items-center gap-2">
            <h1 className="font-bold text-xl my-5 ">Total : </h1>
            <h1 className="font-semibold text-xl my-5 ">
              {formatCurrency(totalPrice)}
            </h1>
          </div>

          <button className="w-full bg-fuchsia-500 p-2 rounded-lg text-white font-bold text-xl">
            Cart
          </button>
          <button className="w-full border-2 border-fuchsia-500 p-2 rounded-lg text-fuchsia-500 font-bold text-xl">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};
