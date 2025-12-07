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
                href="https://vintage-emmental-4d1.notion.site/UI-Developer-1f5f6910522e804da878d1dbfeb45ece"
                target="_blank"
                rel="noopener noreferrer"
                className="navigation__link-item resume"
              >
                RESUME
              </a>
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
