import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./common/Button";
import Card from "./common/Card";
import { PROJECTS } from "../constants/project";

export default function MainCard() {
  const navigate = useNavigate();
  const handleGoToProjectList = () => navigate("/project");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentProject = PROJECTS[currentProjectIndex];
  const imageList = currentProject.image;
  const [isContentOpen, setIsContentOpen] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        // 마지막 이미지면 다음 프로젝트로
        if (prev + 1 >= imageList.length) {
          const nextProjectIndex = (currentProjectIndex + 1) % PROJECTS.length;
          setCurrentProjectIndex(nextProjectIndex);
          return 0;
        }
        return prev + 1;
      });
    }, 500);
    return () => clearInterval(interval);
  }, [currentProjectIndex, imageList.length]);

  const handleToggleContent = () => setIsContentOpen((prev) => !prev);

  return (
    <Card>
      <div className="main-card">
        <div
          className={`main-card__inner ${isContentOpen ? "" : "is-collapsed"}`}
        >
          <header className="main-card__header" onClick={handleToggleContent}>
            <span className="title">Project</span>
            <button className="toggle">
              <span className="sr-only">더보기</span>
            </button>
          </header>
          <div className="main-card__collapsible">
            <div
              className="main-card__content flex-center"
              onClick={handleGoToProjectList}
            >
              <img
                src={imageList[currentImageIndex]}
                alt=""
                className="h-full"
              />
            </div>
            <footer className="main-card__footer">
              <span className="name">{currentProject.name}</span>
              <div>
                <span className="count">
                  {currentProjectIndex + 1} / {PROJECTS.length}
                </span>
                <Button text="see all work" onClick={handleGoToProjectList} />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </Card>
  );
}
