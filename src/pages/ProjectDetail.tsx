export default function ProjectDatail() {
  return (
    <section className="container">
      <div className="project-detail">
        <div className="project-detail__inner">
          <div className="project-detail__header px-24">
            <h1 className="title text-18 bold">
              신한라이프 스마트보장분석 개발고도화
            </h1>
            <div className="meta text-14">
              <span className="role">퍼블리싱 기여도 80%</span>
              <span className="period">2024.01~2024.07</span>
            </div>
          </div>
          <video
            className="w-full"
            src="/assets/images/project/ez.mp4"
            autoPlay
            muted
            loop
            preload="auto"
            controls
          />
          <div className="project-detail__desc px-24">
            <div className="detail">
              <span className="title bold">Description.</span>
              <p className="text-14">
                보험 설계사 FC 전용 고객 관리 및 상품 조회 웹페이지의 반응형
                UI(모바일, 태블릿, 데스크탑)를 구현하였으며, 퍼블리싱부터 사용자
                인터랙션을 포함한 동적 기능까지 대부분의 화면 개발을
                담당했습니다. 애자일 방식으로 기획자, 디자이너, 개발자와 협업을
                통해 비즈니스 요구사항이 수시로 바뀌는 환경에서도 일정 내
                안정적으로 기능을 구현해 프로젝트의 완성도를 높였습니다.
              </p>
            </div>
            <div className="work">
              <span className="title bold">What did I do.</span>
              <ul className="text-14">
                <li>모바일, 태블릿, 데스크탑 환경 대응 반응형 웹 퍼블리싱</li>
                <li>다양한 브라우저 환경에 대응하는 크로스 브라우징 작업</li>
                <li>
                  자동 무한 슬라이드 배너, 탭 UI 등 사용자 인터랙션 중심의 동적
                  기능 구현
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
