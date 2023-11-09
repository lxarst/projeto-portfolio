import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineOneToOne,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden text-gray-100"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-zinc-900/95 flex flex-col justify-center items-center z-20 ease-in duration-200">
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-zinc-800 text-white m-2 p-4 cursor-pointer hover:scale-110"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-zinc-800 text-white m-2 p-4 cursor-pointer hover:scale-110"
          >
            <AiOutlineOneToOne size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-zinc-800 text-white m-2 p-4 cursor-pointer hover:scale-110"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-zinc-800 text-white m-2 p-4 cursor-pointer hover:scale-110"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[30%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-zinc-800 text-white  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#main"
            className="rounded-full shadow-lg bg-zinc-800 text-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineOneToOne size={20} />
          </a>
          <a
            href="#main"
            className="rounded-full shadow-lg bg-zinc-800 text-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#main"
            className="rounded-full shadow-lg bg-zinc-800 text-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
