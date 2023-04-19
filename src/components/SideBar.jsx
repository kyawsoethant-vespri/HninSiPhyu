import React from "react";
import { GiRose } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";

const SideBar = () => (
  <>
    <div className="fixed top-0 h-screen left-0 p-2 w-[210px] overflow-y-auto text-center bg-slate-200 lg:hidden md:hidden">
      <div>
        <GiRose className="relative top-6 text-xl" />
        <div className="">
          <div>
            <div className=" font-sans font-bold text-xl">Hnin Si Phyu</div>
            <div className=" font-mono text-[10px]">Publishing House</div>
          </div>

          <div className=" outline outline-[1px] mt-2"></div>
        </div>
      </div>

      <div className="gap-3 w-auto divide-y divide-black border-2 py-2">
        <div className=" relative flex items-center text-gray-400 focus-within:text-gray-800">
          <BiSearchAlt2 className=" w-5 h-5 absolute ml-1 hidden lg:inline-block md:inline-block" />
          {/* <Search type={"text"}
                name={"search"}
                placeholder="Search Books..."
                autoComplete="off"/> */}
        </div>
      </div>
    </div>
  </>
);

export default SideBar;
