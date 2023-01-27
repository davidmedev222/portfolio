import { useToggle } from '../../hooks/toggle/useToggle';
import { useTheme } from '../../hooks/theme/useTheme';
import { Theme } from '../theme/Theme';

const Widget = () => {
  const { toggle, handleOnToggle } = useToggle();

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="widget">
      {/* NAVBAR */}
      <nav className={`widget-nav ${toggle ? 'widget-nav-active' : ''}`}>
        <ul className="widget-ul">
          <li className="widget-li">
            <a href="#projects" className="widget-a">
              Projects
              <svg className="widget-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
              </svg>
            </a>
          </li>
          <li className="widget-li">
            <a href="#aboutme" className="widget-a">
              About Me
              <svg className="widget-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </a>
          </li>
          <li className="widget-li">
            <a href="#contact" className="widget-a">
              Contact
              <svg className="widget-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm96-96c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
              </svg>
            </a>
          </li>
          <li className="widget-li">
            <Theme theme={theme} toggleTheme={toggleTheme} />
          </li>
        </ul>
      </nav>
      {/* BUTTON */}
      <button
        onClick={handleOnToggle}
        className={`widget-btn ${toggle ? 'widget-btn-active' : ''}`}
      >
        <div className="widget-line widget-line-one"></div>
        <div className="widget-line widget-line-two"></div>
      </button>
    </div>
  );
};

export { Widget };
