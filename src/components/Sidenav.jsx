import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineOneToOne,
} from "react-icons/ai";
import { FaRegFileAlt } from "react-icons/fa";

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
        <div className="fixed w-full h-screen bg-zinc-900/95 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-black/30 bg-zinc-800 text-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-black/30 bg-zinc-800 text-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineOneToOne size={20} />
            <span className="pl-4">Projetos</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-black/30 bg-zinc-800 text-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contato</span>
          </a>
          <a
            onClick={handleNav}
            href=""
            rel="noreferrer"
            target="_blank"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-black/30 bg-zinc-800 text-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FaRegFileAlt size={20} />
            <span className="pl-4">Currículo</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[30%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-zinc-800 text-white shadow-black/30 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            title="Home"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-zinc-800 text-white shadow-black/30 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            title="Projetos"
          >
            <AiOutlineOneToOne size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-zinc-800 text-white shadow-black/30 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            title="Contato"
          >
            <AiOutlineMail size={20} />
          </a>
          <a
            href="https://1drv.ms/b/s!AhrEjI8obX-2ouBe183icAl4inlnzQ?e=MdUZWK"
            rel="noreferrer"
            target="_blank"
            className="rounded-full shadow-lg bg-zinc-800 text-white shadow-black/30 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            title="Currículo"
          >
            <FaRegFileAlt size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
