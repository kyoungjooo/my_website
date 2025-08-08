import { useNavigate } from "react-router-dom";
import Button from "./common/Button";
import Card from "./common/Card";

type ProjectCardProps = {
  project: {
    title: string;
    skills: Array<string>;
    image: string;
    slug: string;
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, skills, image, slug } = project;
  const navigate = useNavigate();
  const handleGoToProjectDetail = () => navigate(`${slug}`);

  return (
    <Card>
      <div className="project-card">
        <div
          className="project-card__inner p-24"
          onClick={handleGoToProjectDetail}
        >
          <div className="project-card__content">
            <span className="title">{title}</span>
            <ul className="text-14 skills">
              {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="project-card__image-wrapper flex-center p-48">
            <img src={image} alt={`title 프로젝트 이미지`} className="h-full" />
          </div>

          <div className="project-card__footer">
            <Button text="See more" className="w-full" />
          </div>
        </div>
      </div>
    </Card>
  );
}
