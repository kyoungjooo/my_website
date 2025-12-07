import Button from "./common/Button";

export default function ProjectCard({ project }) {
  const { title, skills, image, href, role, period } = project;

  return (
    <article className="card">
      <div className="card-inner">
        <div className="project-card">
          <a
            className="project-card__inner p-24"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card__content">
              <span className="title">{title}</span>
              <ul className="text-14 skills">
                {skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
              <span className="role">{role} </span>
              <span className="period">제작 기간: {period}</span>
            </div>
            <div className="project-card__image-wrapper flex-center p-48">
              <img
                src={image}
                alt={`title 프로젝트 이미지`}
                className="h-full"
              />
            </div>

            <div className="project-card__footer">
              <Button text="See more" className="w-full" href={href} />
            </div>
          </a>
        </div>
      </div>
    </article>
  );
}
