import Button from "./common/Button";

export default function ProjectCard() {
  return (
    <article>
      <div className="project-card-top"></div>
      <div className="project-card-bottom"></div>
      <div className="project-card-buttons">
        <Button text="Live site" />
      </div>
    </article>
  );
}
