import { useNavigate } from "react-router-dom";
import Button from "./common/Button";
export default function MainCard() {
  const navigate = useNavigate();
  const handleGoToProjectList = () => {
    navigate("/work");
  };
  return (
    <article className="main-card" onClick={handleGoToProjectList}>
      <div className="main-card-container">
        <header className="main-card-header">my Project</header>
        <div className="main-card-content pd48">컨텐츠</div>
        <footer>
          <div className="main-card-footer-inner flex-between">
            <div></div>
            <Button text="see all work" className="btn-base" />
          </div>
        </footer>
      </div>
    </article>
  );
}
