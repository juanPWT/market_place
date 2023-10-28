import React from "react";
import TextGradient from "../../../utils/components/TextGradient";

const Hero = () => {
  return (
    <div className="w-full h-full flex  flex-col justify-center items-center p-4 gap-4">
      <TextGradient size={"text-5xl"} child={"Market Place."} />
      <p className="text-gray-300 text-sm mx-auto ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nobis
        sed delectus quae, repellat fuga temporibus quam fugit vitae reiciendis
        ad autem, qui deleniti, voluptatem reprehenderit? Magnam sunt labore
        excepturi iure nesciunt nulla unde enim omnis at quam, commodi libero?
        dsge seiogioesjio
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
