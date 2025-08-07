import Button from "./Button";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__inner px-12 ">
        <div className="navigation__links text-14">
          <div className="profile flex-center">
            <a
              href="https://kyoungjooo.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog px-12"
            >
              BLOG
            </a>
            <a
              href="https://github.com/kyoungjooo"
              target="_blank"
              rel="noopener noreferrer"
              className="github px-12"
            >
              GITHUB
            </a>
          </div>
          <Button text="CONTACT" className="contact" />
        </div>
      </div>
    </nav>
  );
}
