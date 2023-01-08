import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-ul">
          <li className="header-li">
            <Link className="header-a" to={'#projects'}>
              projects
            </Link>
          </li>
          <li className="header-li">
            <Link className="header-a" to={'#aboutme'}>
              about me
            </Link>
          </li>
          <li className="header-li">
            <Link className="header-a" to={'#contact'}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
