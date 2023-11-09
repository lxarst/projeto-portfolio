const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full group hover:scale-110 shadow-lg shadow-zinc-800 rounded-xl">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">MI</p>
        <a href="">
          <p className="text-center p-3 rounded-lg bg-zinc-700 text-zinc font-bold cursor-pointer text-lg">
            Demonstração
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
