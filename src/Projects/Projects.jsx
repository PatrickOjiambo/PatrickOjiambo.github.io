import ProjectCard from "./ProjectCard"
import myProjects from "./MyProjects";
function Projects() {
    let project_cards = myProjects.map(project => {
        return (
            <ProjectCard
                title={project.title}
                briefing={project.briefing}
                description={project.description }
                image={project.image}
                link={project.link}
            />
        )
    })
    return (
        <div className=" pb-4 font-roboto mt-12 flex pt-5 flex-col items-center min-h-screen bg-background bg-[length:30rem_30rem] bg-backGroundColor bg-no-repeat bg-center px-5 md:px-24">
            <br/>
            <p className="md:text-3xl text-lg  text-white text-center md:mr-36 py-4">My Projects</p>
            <div className="lg:grid-cols-2 md:gap-4 md:pt-5 grid grid-cols-1 gap-y-3">
                {project_cards}
            </div>

        </div>);
}

export default Projects;