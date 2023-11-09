import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <div className="w-full h-screen absolute top-0 left-0 bg-zinc-900">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-100">
            Meu nome é Raul
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-100">
            Sou um&nbsp;
            <TypeAnimation
              sequence={[
                "Web Developer",
                3000,
                "Escritor",
                3000,
                "Game Developer",
                3000,
              ]}
              wrapper="span"
              speed={60}
              style={{ fontSize: "1em", paddingLef: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-5 max-w-[150px] w-full text-gray-100">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaLinkedin className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
