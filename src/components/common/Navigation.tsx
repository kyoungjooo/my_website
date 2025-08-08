export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__inner px-12">
        <div className="navigation__link text-14">
          <ul className="navigation__link-items flex-center">
            <li className="navigation__link-item">
              <a href="mailto:leekjoo1008@gmail.com">LEEKJOO1008@GMAIL.COM</a>
            </li>
            <li className="navigation__link-item">
              <a
                href="https://kyoungjooo.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="blog"
              >
                BLOG
              </a>
            </li>
            <li className="navigation__link-item">
              <a
                href="https://github.com/kyoungjooo"
                target="_blank"
                rel="noopener noreferrer"
                className="navigation__link-item github"
              >
                GITHUB
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
