import ProjectCard from "../components/ProjectCard";
import ProjectHeader from "../components/ProjectHeader";
import { PROJECTLIST } from "../constants/project";

export default function Project() {
  return (
    <section className="container">
      <ProjectHeader />
      {PROJECTLIST.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
}
