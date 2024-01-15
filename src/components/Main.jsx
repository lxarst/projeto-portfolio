import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedin, FaGithub, FaRegFileAlt } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <div className="w-full h-screen relative top-0 left-0 bg-zinc-900">
        <div className="m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-100">
            Meu nome é Raul
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-100">
            Sou um&nbsp;
            <TypeAnimation
              sequence={[
                "Web Developer",
                3000,
                "Game Developer",
                3000,
                "Escritor",
                3000,
              ]}
              wrapper="span"
              speed={60}
              style={{ fontSize: "1em", paddingLef: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-8 max-w-[200px] w-full text-gray-100">
            <a
              href="https://twitter.com/lxarst"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter className="cursor-pointer" size={20}></FaTwitter>
            </a>
            <a
              href="https://www.linkedin.com/in/raulstsouza/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://github.com/Aornueos"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://1drv.ms/b/s!AhrEjI8obX-2ouBe183icAl4inlnzQ?e=MdUZWK"
              rel="noreferrer"
              target="_blank"
            >
              <FaRegFileAlt className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
