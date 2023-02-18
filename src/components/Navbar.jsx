import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const { pathname } = useLocation();

  return (
    <>
      <nav>
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 md:hidden"></div>
        ) : (
          ""
        )}
        <div onClick={() => setNav(!nav)}>
          <div className="absolute top-0 left-0 w-screen items-center px-[32px] flex justify-start md:justify-center h-[64px] lg:h-[76px] bg-orange-400/[.8] z-[100]">
            <button>
              <FaBars color="white" className="md:hidden" />
            </button>
            <ul
              className="hidden md:flex md:items-center md:text-[20px] md:space-x-6 nav nav-pills"
              id="pills-tab"
              role="tablist"
            >
              <NavLink to="/" className={pathname === "/" ? "activeCl" : ""}>
                <li className="navlink nav-item" role="presentation">
                  <button
                    id="pills-home-tab"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Home
                  </button>
                </li>
              </NavLink>
              <NavLink
                to="/products"
                className={pathname === "/products" ? "activeCl" : ""}
              >
                <li className="navlink nav-item" role="presentation">
                  <button
                    id="pills-profile-tab"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Products
                  </button>
                </li>
              </NavLink>
              <NavLink
                to="/about"
                className={pathname === "/about" ? "activeCl" : ""}
              >
                <li className="navlink nav-item" role="presentation">
                  <button
                    id="pills-profile-tab"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    About us
                  </button>
                </li>
              </NavLink>
              <NavLink
                to="/contact"
                className={pathname === "/contact" ? "activeCl" : ""}
              >
                <li className="navlink nav-item" role="presentation">
                  <button
                    id="pills-profile-tab"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Contact
                  </button>
                </li>
              </NavLink>
            </ul>
          </div>
          <ul
            className={
              nav
                ? "fixed top-0 left-0 z-[50] bg-[#333A44] font-bold text-[18px] items-center duration-300 md:hidden"
                : "fixed top-0 left-[-100%] z-[50] bg-[#333A44] font-bold text-[18px] items-center duration-300 md:hidden overflow-hidden"
            }
          >
            <button>
              <FaTimes
                color="white"
                className="absolute top-[84px] right-4 cursor-pointer z-[100] md:hidden"
              />
            </button>
            <div className="flex flex-col gap-[20px] md:flex mt-[84px] md:mt-[0px] mx-[4rem] text-white text-[15px] items-left h-screen md:h-full z-100">
              <NavLink to="/">
                <li className="navlinkm">Home</li>
              </NavLink>
              <NavLink to="/products">
                <li className="navlinkm">Products</li>
              </NavLink>
              <NavLink to="/about">
                <li className="navlinkm">About us</li>
              </NavLink>
              <NavLink to="/contact">
                <li className="navlinkm">Contact</li>
              </NavLink>
            </div>
          </ul>
        </div>
      </nav>
      <span className="absolute top-0 right-0 z-[100] md:block">
        <h4 className="text-[18px] text-[#fff] pt-[1.5rem] pr-[2rem]">
          May Capital Makine
        </h4>
      </span>
      <Outlet />
    </>
  );
}
