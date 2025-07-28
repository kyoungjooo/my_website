import { useNavigate } from "react-router-dom";
import Button from "./common/Button";
import Card from "./common/Card";

export default function MainCard() {
  const navigate = useNavigate();
  const handleGoToProjectList = () => {
    navigate("/project");
  };
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
          <div className="main-card__content" onClick={handleGoToProjectList} />
          <footer className="main-card__footer">
            <Button text="see all work" />
          </footer>
        </div>
      </div>
    </Card>
  );
}
