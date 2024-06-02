"use client"
import Image from "next/image";
import { navigation } from "../data/index";
import { useLocation } from 'react-router-dom';
import Button from "./ui/Button";
import MenuSvg from "./ui/design/MenuSvg";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Header = () => {
 

  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 mt-4 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8 " href="#hero">
          <Image src="/Christopher.svg" alt="Logo" width={202} height={40} />
        </a>
        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a key={item.id} href={item.url}>
                {item.title}

              </a>


            ))}

          </div>

        </nav>
      </div>
    </div>
  );
};

export default Header;
