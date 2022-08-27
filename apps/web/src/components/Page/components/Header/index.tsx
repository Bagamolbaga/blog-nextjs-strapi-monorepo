import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { routes } from 'constants/routes';

import NavItem from './components/NavItem';

import Logo from 'assets/logo.svg';
import Bars from 'assets/bars.svg';


const Header = () => {
  const [showMobileSideMenu, setShowMobileSideMenu] = useState(false);

  const closeMenu = () => setShowMobileSideMenu(false);
  const toggleMenu = () => setShowMobileSideMenu((prev) => !prev);

  return (
    <header className="relative w-full h-20">
      <div className="relative h-full px-5 mx-auto max-w-content flex items-center justify-between">
        <div className="w-10 h-10 flex justify-center items-center mr-20">
          <Image src={Logo} alt="Idealtechno" />
        </div>
        <div className="flex sm:hidden">
          {routes.map((route) => (
            <NavItem key={route.path} {...route} />
          ))}
        </div>
        <div
          className="w-5 h-5 flex justify-center items-center ml-20 opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto sm:cursor-pointer"
          onClick={toggleMenu}
        >
          <Image src={Bars} alt="" />
        </div>
      </div>
      {showMobileSideMenu && (
        <div className="absolute overflow-hidden hidden -z-10 sm:block sm:z-10 w-full h-screen max-h-navMenu bg-gray">
          <div className="">
            {routes.map((route) => (
              <NavItem
                key={route.path}
                mobile
                {...route}
                closeMobileSideMenu={closeMenu}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
