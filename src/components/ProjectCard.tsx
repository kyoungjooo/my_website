import Button from "./common/Button";
import Card from "./common/Card";

export default function ProjectCard() {
  return (
    <Card>
      <div className="project-card">
        <div className="project-card__inner">
          <div className="project-card__image-wrapper p-48">
            <img src="" alt="" className="image" />
          </div>
          <div className="project-card__content px-24">
            <span>title</span>
            <p className="text-14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              porro. Eum quod placeat nemo fugiat eligendi odio distinctio,
            </p>
          </div>
          <div className="project-card__footer px-24">
            <Button text="See more" className="w-full" />
          </div>
        </div>
      </div>
    </Card>
  );
}
