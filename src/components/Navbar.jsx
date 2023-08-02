import { useContext } from "react";
import Button from "./Button";
import { ButtonContext } from "../context/ButtonContext";
import { FaBars } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import profilPic from "../images/profile-pic.jpg";

const Navbar = () => {
  const data = [
    {
      name: "MUSTAFA ATMACA",
      img: profilPic,
    },
  ];

  const { navbarWidth, setToggle } = useContext(ButtonContext);

  return (
    <div
      className={`${
        navbarWidth ? "lg:left-16" : "lg:left-72"
      } h-16 fixed flex-1 top-0  left-0  right-0 z-20 bg-grayBackground text-white px-5 flex justify-between items-center `}
    >
      <Button className={"lg:block hidden"}>Öğrenci Bilgi Sistemi</Button>
      <a href="/">
        <img
          src="https://cdn0.sabis.sakarya.edu.tr/logo/1.0.0/logo-sabis-sau.png"
          className="object-contain h-8 w-32 lg:hidden block"
        />
      </a>
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="block hover:text-blueText duration-300 lg:hidden ms-auto mr-3 cursor-pointer text-hamburgerGray"
      >
        <FaBars size={24} />
      </div>
      {data.map((student, index) => (
        <div
          key={index}
          className="flex gap-2 items-center text-grayTextLight font-[500] w-fit lg:min-w-[150px] hover:bg-grayButtonBackgrond px-3 h-10 cursor-pointer rounded-md duration-200"
        >
          <span className="lg:block hidden">{student.name}</span>
          <img
            className="w-9 h-9 z-40 ms-auto lg:block hidden"
            src={student.img}
          />
          <div className="block lg:hidden ms-auto mr-3 cursor-pointer text-hamburgerGray">
            <BiSolidUser size={24} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
