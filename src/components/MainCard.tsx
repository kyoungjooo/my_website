import { useNavigate } from "react-router-dom";
import Button from "./common/Button";
import Card from "./common/Card";
import project_02 from "../assets/images/project_02.png";

export default function MainCard() {
  const navigate = useNavigate();
  const handleGoToProjectList = () => {
    navigate("/project");
  };

  const PROJECTS = [{ name: "스마트보장분석", image: project_02 }];
  return (
    <Card>
      <div className="main-card">
        <div className="main-card__inner">
          <header className="main-card__header">
            <span className="title">Project</span>
            <button className="toggle">
              <span className="sr-only">더보기</span>
            </button>
          </header>
          <div
            className="main-card__content flex-center"
            onClick={handleGoToProjectList}
          >
            <img src={PROJECTS[0].image} alt="" className="h-full" />
          </div>
          <footer className="main-card__footer">
            <p className="px-12">{PROJECTS[0].name}</p>
            <Button text="see all work" onClick={handleGoToProjectList} />
          </footer>
        </div>
      </div>
    </Card>
  );
}
