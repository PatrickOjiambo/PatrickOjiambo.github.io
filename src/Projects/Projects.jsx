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
        <div className="h-screen bg-background bg-[length:30rem_30rem] bg-backGroundColor bg-no-repeat bg-center px-24">
            <p className="text-3xl font-preahvihear text-white text-center mr-36 py-4">My Projects</p>
            <p className="text-white font-preahvihear">Click on image to see project code</p>
            <div className="grid grid-cols-2 gap-4 pt-5">
                {project_cards}
            </div>

        </div>);
}

export default Projects;