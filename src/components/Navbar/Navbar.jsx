import React, { useState } from "react";
import Logo from "../../assets/guiacorrentelogo.png";
import { NavLink, Link } from "react-router-dom";
// import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Sobre",
    link: "/sobre",
  },
  {
    name: "Turismo",
    link: "/turismo",
  },
  {
    name: "Hospedagem",
    link: "/hospedagem",
  },
  {
    name: "Gastronomia",
    link: "/gastronomia",
  },
];

// const DropdownLinks = [
//   {
//     name: "Our Services",
//     link: "/#services",
//   },
//   {
//     name: "Top Brands",
//     link: "/#mobile_brands",
//   },
//   {
//     name: "Location",
//     link: "/#location",
//   },
// ];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        {/* <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on next booking</p>
              <p>mobile no. +91 123456789</p>
            </div>
          </div>
        </div> */}
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4  font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="h-16" />
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                <li className="py-4">
                  <NavLink to="/" activeClassName="active">
                    Inicio
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/turismo" activeClassName="active">
                    Turismo
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/hospedagem" activeClassName="active">
                    Hospedagem
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/gastronomia" activeClassName="active">
                    Gastronomia
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/sobre" activeClassName="active">
                    Sobre
                  </NavLink>
                </li>
                {/* <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Outros Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                Conheça Agora
              </button>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
