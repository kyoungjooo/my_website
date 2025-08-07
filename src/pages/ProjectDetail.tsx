import { useParams } from "react-router-dom";
import { PROJECTDETAIL } from "../constants/project";

export default function ProjectDetail() {
  const { id } = useParams();
  if (!id || !(id in PROJECTDETAIL)) {
    return <div>존재하지 않는 프로젝트입니다.</div>;
  }

  const currentProject = PROJECTDETAIL[id];
  const { title, role, period, source, detail, works, live } = currentProject;

  return (
    <>
      <div className="project-detail">
        <div className="project-detail__inner py-24">
          <div className="project-detail__header px-24">
            <h1 className="title text-18 bold">{title}</h1>
            <div className="meta text-12">
              <span className="role">{role}</span>
              <span className="period">{period}</span>
            </div>
          </div>
          {source && (
            <video
              className="w-full"
              src={source}
              autoPlay
              muted
              preload="auto"
              controls
            />
          )}
          {!source && <div className="py-24" />}
          <div className="project-detail__desc px-24">
            <div className="detail">
              <span className="title bold">Description.</span>
              <p className="text-14">{detail}</p>
            </div>
            <div className="work">
              <span className="title bold">What did I do.</span>
              <ul className="text-14">
                {works.map((work, idx) => (
                  <li key={idx}>{work}</li>
                ))}
              </ul>
            </div>
            {live && (
              <div className="live">
                <span className="title bold">LiveSite.</span>
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-12 link"
                >
                  {title}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
