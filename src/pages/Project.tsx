import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectHeader from "../components/ProjectHeader";
import { PROJECTLIST } from "../constants/project";

export default function Project() {
  const [currentTab, setCurrentTab] = useState("All");
  const filteredProjects = PROJECTLIST.filter((project) =>
    currentTab === "All" ? true : project.tab === currentTab
  );
  return (
    <div className="project">
      <ProjectHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {filteredProjects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
