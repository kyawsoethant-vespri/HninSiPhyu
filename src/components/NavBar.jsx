import React from "react";
import NavList from "./NavList";
import { CgShoppingCart } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import { BsBook } from "react-icons/bs";
import SideBar from "./SideBar";

const NavBar = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-around py-4 border-solid border-2 shadow-sm gap-1 items-center">
          <div className=" px-3 font-sans lg:text-lg md:text-md font-bold">
            Hnin Si Phyu
            <div className=" font-mono text-[10px]">Publishing House</div>
          </div>

          <NavList />

          <div className=""></div>

          <div>
            <div className=" text-xl text-slate-900">
              <CgShoppingCart />
            </div>
            <div className=" text-xs font-medium font-sans lg:text-sm md:text-sm lg:py-1 md:py-1">
              Basket
            </div>
          </div>

          <div>
            <div className=" text-xl text-slate-900">
              <BsBook />
            </div>
            <div className=" text-xs font-medium font-sans lg:text-sm md:text-sm lg:py-1 md:py-1">
              About
            </div>
          </div>

          <div>
            <div className=" text-xl text-slate-900">
              <VscAccount />
            </div>

            <div className=" text-xs font-medium font-sans lg:text-sm md:text-sm lg:py-1 md:py-1">
              Account
            </div>
          </div>
        </div>
      </div>
      <SideBar />
    </>
  );
};

export default NavBar;
