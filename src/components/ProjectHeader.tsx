import { Dispatch, MouseEvent, SetStateAction } from "react";
import Button from "./common/Button";
import Card from "./common/Card";

type ProjectHeaderProps = {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
};
const TABS = ["All", "Project", "Side Project"];

export default function ProjectHeader({
  currentTab,
  setCurrentTab,
}: ProjectHeaderProps) {
  const handleSetCurrentTab = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const selectedTab = target.textContent;
    if (selectedTab) setCurrentTab(selectedTab);
  };

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
              2023년부터 UI 화면을 개발하는 일을 해왔습니다.
              <br /> 단순히 "이렇게 만들면 되겠지"가 아니라, 디자이너와
              기획자와의 소통을 통해 의도를 이해하고 아름답고 완성도 높은 UI를
              구현하는 데 가치를 두고 있습니다.
            </p>
            <div className="tabs" onClick={handleSetCurrentTab}>
              {TABS.map((tab) => {
                const isActive = currentTab === tab;
                const className = `tag ${isActive ? "active" : ""}`;
                return <Button key={tab} text={tab} className={className} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
