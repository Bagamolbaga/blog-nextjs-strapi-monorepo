import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { routes } from 'constants/routes';
import { useRouter } from 'next/router';

import s from '../../style.module.scss';

type Props = {
  mobile?: boolean;
  label: string;
  path: string;
  items?: { label: string; path: string }[];
  closeMobileSideMenu?: () => void;
};

const NavItem: FC<Props> = ({
  mobile = false,
  label,
  path,
  items,
  closeMobileSideMenu,
}) => {
  const { pathname } = useRouter();
  const [openSubMenu, setOpenSubMenu] = useState(
    mobile ? pathname.includes(path) : false
  );

  useEffect(() => {
    // setOpenSubMenu(false);
  }, [pathname]);

  const toggleSubMenuHandler = () => {
    setOpenSubMenu((prev) => !prev);
  };

  console.log(openSubMenu);
  return (
    <>
      {!mobile && (
        <>
          <div className="relative inline-block group mx-2">
            {items ? (
              <div
                className={cn(
                  'relative overflow-hidden px-5 py-2 text-gray cursor-pointer transition-all before:h-1 group-hover:before:left-0 before:bg-red',
                  s.devider,
                  {
                    'before:left-0': pathname.includes(path),
                  }
                )}
              >
                {label}
              </div>
            ) : (
              <Link href={path}>
                <div
                  className={cn(
                    'relative px-5 py-2 text-gray cursor-pointer transition-all overflow-hidden before:h-1 group-hover:before:left-0 before:bg-red',
                    s.devider,
                    {
                      'before:left-0': pathname === path,
                    }
                  )}
                >
                  {label}
                </div>
              </Link>
            )}

            {items && (
              <div className="absolute w-full hidden z-10 group-hover:block">
                {items.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <div
                      className={cn(
                        'px-5 py-2 bg-gray hover:cursor-pointer hover:text-red transition-all',
                        {
                          'text-red': pathname === item.path,
                          'text-white': pathname !== item.path,
                        }
                      )}
                    >
                      {item.label}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* {items && (
              <div className="absolute w-full top-[100%] opacity-0 group-hover:opacity-100 group-hover:z-10">
                {items.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <div
                      className={cn(
                        "px-5 py-2 bg-gray hover:cursor-pointer hover:text-red transition-all",
                        {
                          "text-red": pathname === item.path,
                          "text-white": pathname !== item.path,
                        }
                      )}
                    >
                      {item.label}
                    </div>
                  </Link>
                ))}
              </div>
            )} */}
          </div>
        </>
      )}

      {mobile && (
        <div className="relative group">
          {items ? (
            <div
              className={cn(
                'relative overflow-hidden px-5 py-2 z-20 bg-gray cursor-pointer transition-all text-white before:h-1 group-hover:before:left-0 before:bg-red',
                s.devider,
                {
                  'before:left-0': pathname.includes(path),
                }
              )}
              onClick={toggleSubMenuHandler}
            >
              {label}
            </div>
          ) : (
            <Link href={path}>
              <div
                className={cn(
                  'relative px-5 py-2 bg-gray cursor-pointer transition-all text-white overflow-hidden before:h-1 group-hover:before:left-0 before:bg-red',
                  s.devider,
                  {
                    'before:left-0': pathname === path,
                  }
                )}
                onClick={closeMobileSideMenu}
              >
                {label}
              </div>
            </Link>
          )}
          {items && (
            <div
              className={cn('relative w-full z-10 transition-all', {
                'pointer-events-auto opacity-100 h-auto top-0': openSubMenu,
                'pointer-events-none opacity-0 h-0 -top-[2.5rem]': !openSubMenu,
              })}
              onClick={closeMobileSideMenu}
            >
              {items.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div
                    className={cn(
                      'px-5 py-2 bg-gray hover:cursor-pointer hover:text-red transition-all',
                      {
                        'text-red': pathname === item.path,
                        'text-white': pathname !== item.path,
                      }
                    )}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavItem;
