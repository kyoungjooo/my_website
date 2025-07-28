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
      <div className="main-card-wrapper">
        <header className="main-card-header">
          <div className="main-card-header-inner">
            <span className="title">project</span>
            <button className="toggle">
              <span className="sr-only">더보기</span>
            </button>
          </div>
        </header>
        <div className="main-card-content" onClick={handleGoToProjectList}>
          <div className="main-card-content-inner" />
        </div>
        <footer className="main-card-footer">
          <div className="main-card-footer-inner">
            <Button text="see all work" className="btn-base" />
          </div>
        </footer>
      </div>
    </Card>
  );
}
