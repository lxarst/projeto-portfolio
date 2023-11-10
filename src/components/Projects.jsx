import ProjectItem from "./ProjectItem";
import img1 from "../assets/img1.webp";
import img2 from '../assets/img2.webp';

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center bg-zinc-850 text-white relative w-full h-screen m-auto md:pl-20 p-4 pt-4"
    >
      <h1 className="sm:text-5xl text-4xl font-bold text-center py-8">Projetos</h1>
      {/* <p className="text-center py-8 lg:mx-80 mx-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        accusantium exercitationem repudiandae at impedit eos deserunt minima
        voluptate nostrum asperiores earum explicabo quibusdam nemo vitae,
        perspiciatis voluptatem corrupti ullam laborum!
      </p> */}
      <div className="lg:max-w-[1250px] max-w-[400px] p-6 pt-8">
        <div className="grid sm:grid-cols-2 gap-12">
          <ProjectItem img={img1} title="Agregador de Links" stused='HTML, CSS, Tailwind' />
          <ProjectItem img={img2} title="Vazio" stused='' />
          <ProjectItem img={img2} title="Vazio" stused='' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
