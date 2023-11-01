import React from "react";
import TextGradient from "../../../utils/components/TextGradient";

const Hero = () => {
  return (
    <div className="w-full h-full flex  flex-col justify-center items-center p-4 gap-4">
      <TextGradient size={"text-5xl"} child={"Market Place."} />
      <p className="text-gray-300 text-sm mx-auto ">
        Selamat datang di{" "}
        <span className="font-bold text-fuchsia-500 text-lg">
          Market Place.id
        </span>{" "}
        website terpercaya untuk membantu menguhubungkan antara penjual dan
        pembeli, di website kami menyediakan berbagai metode pembayaran dan
        integrasi ke berbagai jasa ongkir di indonesia, selain itu{" "}
        <span className="font-bold text-fuchsia-500">Market Place.id</span>{" "}
        selalu mendukung produk lokal atau UMKM untuk mempromosikan atau
        mempercayakan product nya di platfrom kita
      </p>
      <button className="bg-fuchsia-500 px-5 py-2 rounded-xl mt-5 hover:bg-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-400 group">
        <span className="font-bold text-gray-950 text-2xl group-hover:text-white">
          JOIN.
        </span>
      </button>
    </div>
  );
};

export default Hero;
