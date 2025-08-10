import { TPROJECTDETAIL } from "../models/project";

// 메인 페이지
export const PROJECTS = [
  {
    name: "신한 EZ 손해보험",
    image: [
      "assets/images/project_01_01.png",
      "assets/images/project_01_02.png",
      "assets/images/project_01_03.png",
      "assets/images/project_01_04.png",
      "assets/images/project_01_05.png",
      "assets/images/project_01_06.png",
      "assets/images/project_01_07.png",
      "assets/images/project_01_08.png",
    ],
  },
  {
    name: "신한라이프 스마트보장분석",
    image: [
      "assets/images/project_02_01.png",
      "assets/images/project_02_02.png",
    ],
  },
  {
    name: "널리 (Neurly)",
    image: ["assets/images/project_03.png"],
  },
];

//프로젝트 페이지
export const PROJECTLIST = [
  {
    title: "신한 EZ 손해보험 보험 가입 웹 페이지",
    skills: ["HTML", "CSS", "JavaScript(ES6+)"],
    image: "assets/images/project/ez.png",
    slug: "ez",
    tab: "Project",
  },
  {
    title: "신한라이프 스마트보장분석 개발고도화",
    skills: ["HTML", "CSS", "JavaScript(ES6+)"],
    image: "assets/images/project/life.png",
    slug: "life",
    tab: "Project",
  },
  {
    title: "널리 (Neurly)",
    skills: ["Next.js(App Router)", "TypeScript", "Tailwind CSS v4"],
    image: "assets/images/project/neurly.png",
    slug: "neurly",
    tab: "Side Project",
  },
  {
    title: "모바일 간편결제 애플리케이션 사용성 평가 연구",
    skills: [],
    image: "assets/images/project/research.png",
    slug: "research",
    tab: "Side Project",
  },
];

//프로젝트 상세 페이지
export const PROJECTDETAIL: Record<string, TPROJECTDETAIL> = {
  ez: {
    title: "신한 EZ 손해보험 보험 가입 웹 페이지",
    role: "퍼블리싱 기여도 100%",
    period: "2023.06 ~ 2023.11 ",
    source: "/my_website/assets/images/project/ez.mp4",
    poster: "/my_website/assets/images/project/ez.png",
    detail:
      "기아멤버스, 현대캐피탈, 신한 SOL 등 다양한 채널에서 운영된 이벤트성 보험 가입 페이지로, 현재는 서비스가 종료된 프로젝트입니다. 모바일 및 데스크탑 환경에 대응하는 반응형 웹 퍼블리싱과 다양한 브라우저에서 일관된 UI/UX를 구현하기 위한 크로스 브라우징 작업을 담당했습니다.",
    works: [
      "모바일, 태블릿, 데스크탑 환경 대응 반응형 웹 퍼블리싱",
      "다양한 브라우저 환경에 대응하는 크로스 브라우징 작업",
      "인터랙션 및 모션 구현을 위한 애니메이션 표현을 위한 Lottie 활용",
      "디자이너, 백엔드 개발자와의 협업을 통해 개발 환경에서 발생하는 문제를 함께 해결",
    ],
  },
  life: {
    title: "신한라이프 스마트보장분석 개발고도화",
    role: "퍼블리싱 기여도 PC, mobile 100%, tablet 일부",
    period: "2024.01 ~ 2024.07",
    source: "/my_website/assets/images/project/life.mp4",
    poster: "/my_website/assets/images/project/life.png",
    detail:
      "보험 설계사 FC 전용 고객 관리 및 상품 조회 웹페이지의 반응형 UI(모바일, 태블릿, 데스크탑)를 구현하였으며, 퍼블리싱부터 사용자 인터랙션을 포함한 동적 기능까지 대부분의 화면 개발을 담당했습니다. 애자일 방식으로 기획자, 디자이너, 개발자와 협업을 통해 비즈니스 요구사항이 수시로 바뀌는 환경에서도 일정 내 안정적으로 기능을 구현해 프로젝트의 완성도를 높였습니다.",
    works: [
      "모바일, 태블릿, 데스크탑 환경 대응 반응형 웹 퍼블리싱",
      "다양한 브라우저 환경에 대응하는 크로스 브라우징 작업",
      "자동 무한 슬라이드 배너, 탭 UI 등 사용자 인터랙션 중심의 동적 기능 구현",
    ],
    live: "https://smart.shinhanlife.co.kr/adminLogin.do",
  },
  neurly: {
    title: "널리 (Neurly)",
    role: "퍼블리싱 기여도 100%, 프론트개발",
    period: "2025.05",
    source: "/my_website/assets/images/project/neurly.mp4",
    poster: "/my_website/assets/images/project/neurly.png",
    detail:
      "기획자, 디자이너, 개발자가 협업하여 진행한 웹 프로젝트로, 대선 후보자의 핵심 공약을 정리하여 전달하고 사용자가 밈 기반 공유 기능을 통해 친구들과 쉽게 공약을 공유할 수 있도록 기획되었습니다.",
    works: [
      "반응형 UI 화면 퍼블리싱",
      "공통 디자인 컴포넌트 설계 및 구현",
      "공통 로직 분리를 위한 커스텀 훅 생성 및 적용",
      "Context API를 활용한 전역 상태 관리 구조 설계",
      "카카오톡 공유 기능 연동",
      "API 연동 및 비동기 처리 로직 구현",
    ],
    live: "https://leginote.net/",
  },
  research: {
    title: "모바일 간편결제 애플리케이션 사용성 평가 연구",
    role: "KCI 등재 / 한국디지털정책학회 디지털융복합연구",
    period: "2018",
    detail:
      "사용자 대상의 웹 접근성 및 UI 적합성 개선을 위한 연구로, 모바일 앱카드 애플리케이션 사용자들의 편의성과 만족도 증진을 위해 필요한 사항을 도출해 향후 간편결제 앱 설계 시 고려해야 할 UI/UX 원칙과 방향성에 대해 제안했습니다",
    works: [
      "실제 사용자 대상의 정성적 인터뷰 및 사용성 테스트를 통해 사용자 관점에서 화면 흐름, 정보 구조, 인터랙션 피드백 등을 비교 분석",
    ],
    live: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE08852006",
  },
};
