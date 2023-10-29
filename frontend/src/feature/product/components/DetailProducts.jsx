import React from "react";

export const DetailProducts = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between p-2 mt-10 ">
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
            <h1 className=" font-semibold">Store names</h1>
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
          <span>toko@mail.com</span>|<span>java center, pekalongan</span>
        </div>
      </div>
      <div className="m-auto w-full flex flex-col  bg-white overflow-hidden  h-[900px] rounded-xl">
        <img
          src="https://i.pinimg.com/564x/38/a7/95/38a795fd5008ab241ded26d41f5b0b53.jpg"
          alt="product"
          className="w-full h-[400px] object-cover"
        />
        <h1 className="mt-6 font-bold text-xl mx-6 text-gray-700">
          Product name
        </h1>
      </div>
    </div>
  );
};
