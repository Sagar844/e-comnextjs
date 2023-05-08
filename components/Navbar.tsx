import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { BsCartPlusFill } from 'react-icons/bs'
import Link from "next/link";

type Navbarprops = {};

const Navbar: NextPage<Navbarprops> = () => {
  return (
    <>
      <div className="bg-[#2874f0] shadow-white fixed right-0 left-0 z-10 container mx-auto p-6 ">
        <div className="flex justify-around items-center">

          <Link href="/">
            <Image title="logo"
              width={50}
              height={40}
              alt="logo"
              src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
            ></Image>
          </Link>
          <div className="text-green-400 text-xl">
            <Link href="/cartpage">
              <h1 title="cart"><BsCartPlusFill /></h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
