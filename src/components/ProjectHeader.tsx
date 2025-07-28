import Button from "./common/Button";
import Card from "./common/Card";

export default function ProjectHeader() {
  return (
    <Card>
      <div className="project-header">
        <div className="project-header__inner p-24">
          <div className="project-header__intro font-noto-serif-kr">
            <h1 className="text-32 title">PORTFOLIO</h1>
            <p className="text-36 year">
              2023<span className="hyphen">-</span>25
            </p>
          </div>
          <div className="project-header__tabs">
            <p className="text-14 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ipsa mollitia quos reiciendis sequi commodi asperiores hic eius,
            </p>
            <div className="tabs">
              <Button text="All" className="tag" />
              <Button text="Project" className="tag" />
              <Button text="Side Project" className="tag" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
