import { useContext, useState } from "react";
import { BiChevronsLeft, BiChevronsRight, BiSolidLayer } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { ButtonContext } from "../context/ButtonContext";
const Leftbar = () => {
  const data = [
    {
      pageUrl: "/",
      pageName: "Anasayfa",
    },
    {
      pageUrl: "/subjects",
      pageName: "Seçilen Dersler",
    },
    {
      pageUrl: "/subjectprogram",
      pageName: "Ders Programı",
    },
    {
      pageUrl: "/examdate",
      pageName: "Sınav Takvimi",
    },

    {
      pageUrl: "/transkript",
      pageName: "Transkript",
    },
  ];

  const { navbarWidth, setNavbarWidth, toggle, setToggle } =
    useContext(ButtonContext);

  const handleClick = () => {
    setNavbarWidth((prev) => !prev);
    console.log(navbarWidth);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className={`left-0 top-0 right-0 bottom-0 bg-black/20 duration-300 z-30 fixed ${
          toggle ? "block" : "hidden"
        } `}
      ></div>
      <div
        className={`${
          toggle ? "left-0" : "-left-[999px] "
        } fixed top-0  duration-300 w-64 min-h-screen bg-white shadow-2xl z-40`}
      >
        <div className="py-5 ">
          {data.map((page, index) => (
            <NavLink
              onClick={() => setToggle((prev) => !prev)}
              key={index}
              className={"flex items-center  text-gray-400 gap-3  px-4 py-3"}
              to={page.pageUrl}
            >
              <BiSolidLayer size={24} />
              <span>{navbarWidth ? "" : page.pageName}</span>
            </NavLink>
          ))}
        </div>
      </div>

      <div className={`${navbarWidth ? "w-16" : "w-72"} lg:block hidden`}>
        <div
          className={`${navbarWidth ? "w-16" : "w-72"} h-full shadow-2xl fixed`}
        >
          <div
            className="h-16  bg-grayBackground flex items-center justify-between px-4
      "
          >
            {navbarWidth ? (
              ""
            ) : (
              <a href="/">
                <img
                  src="https://cdn0.sabis.sakarya.edu.tr/logo/1.0.0/logo-sabis-sau.png"
                  className="object-contain h-8 w-32"
                />
              </a>
            )}
            {navbarWidth ? (
              <BiChevronsRight
                onClick={handleClick}
                size={32}
                className="text-blueText shadow-2xl cursor-pointer"
              />
            ) : (
              <BiChevronsLeft
                onClick={handleClick}
                size={32}
                className="text-grayTextLight hover:text-blueText duration-200 cursor-pointer"
              />
            )}
          </div>
          <div className="py-5 ">
            {data.map((page, index) => (
              <NavLink
                key={index}
                className={
                  "flex items-center hover:bg-grayTextLight/10 text-gray-400 gap-3  px-4 py-3"
                }
                to={page.pageUrl}
              >
                <BiSolidLayer size={24} />
                <span>{navbarWidth ? "" : page.pageName}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
