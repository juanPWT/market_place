import React from "react";
import TextGradient from "../utils/components/TextGradient";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[70px] flex  justify-end z-20 fixed top-0  p-4">
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
      <div className="flex gap-4 justify-end items-end ">
        <TextGradient size={"text-2xl"} child={"MP"} />
        <button className="bg-fuchsia-400 p-2  rounded-xl font-bold hover:shadow-lg hover:shadow-fuchsia-200 hover:bg-fuchsia-500">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Navbar;
