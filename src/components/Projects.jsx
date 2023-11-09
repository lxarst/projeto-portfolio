import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 pt-16">
            <h1 className="text-4xl font-bold text-center">Projects</h1>
            <p className="text-center py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium exercitationem repudiandae at impedit eos deserunt minima voluptate nostrum asperiores earum explicabo quibusdam nemo vitae, perspiciatis voluptatem corrupti ullam laborum!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem /> 
            </div>
        </div>
    )
}

export default Projects;