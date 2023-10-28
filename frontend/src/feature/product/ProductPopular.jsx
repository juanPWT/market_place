import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as fetchData from "../../api/index";

const ProductPopular = () => {
  const [slideView, setSlideView] = useState(1);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlideView(1);
      } else if (window.innerWidth < 1024) {
        setSlideView(2);
      } else if (window.innerWidth < 1280) {
        setSlideView(3);
      } else {
        setSlideView(4);
      }
    };

    const getProduk = async () => {
      const get = await fetchData.getAllProduct();
      setProduct(get);
    };

    getProduk();
    handleResize();
    document.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper spaceBetween={10} slidesPerView={slideView}>
        {product.map((data) => {
          return (
            <SwiperSlide key={data._id}>
              <div className="flex justify-center items-center">
                <div className="bg-white rounded-lg overflow-hidden w-[400px] ">
                  <img
                    src={data.imageCover}
                    alt="product"
                    className="w-full h-[250px] object-cover mb-3"
                  />
                  <div className="flex flex-col  gap-4  p-4 items-start justify-start">
                    <h1 className="text-lg font-semibold text-gray-800">
                      {data.name}
                    </h1>
                    <p className="text-gray-950 font-bold text-2xl">
                      Rp. {data.price}
                    </p>
                    <div className="flex gap-5">
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
                          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                        />
                      </svg>
                      <span>{data.store.storename}</span>
                    </div>
                  </div>
                  <div className="my-3 px-10 py-1 flex justify-end">
                    <button className="bg-gradient-to-br from-orange-500 via-fuchsia-500 to-blue-500 p-3 rounded-lg text-white font-semibold">
                      add cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductPopular;
