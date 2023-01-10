const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-ul">
          <li className="header-li">
            <a className="header-a" href="#projects">
              projects
            </a>
            <span className="header-line"></span>
          </li>
          <li className="header-li">
            <a className="header-a" href="#aboutme">
              about me
            </a>
            <span className="header-line"></span>
          </li>
          <li className="header-li">
            <a className="header-a" href="#contact">
              contact
            </a>
            <span className="header-line"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
