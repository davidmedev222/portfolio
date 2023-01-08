import { RedirectGroup } from '../redirect/RedirectGroup';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-info">
        <h1 className="hero-name">
          <span className="hero-span">D</span>avid <span className="hero-span">M</span>amani
        </h1>
        <h2 className="hero-rol">Front End Developer</h2>
        <button className="hero-btn">View Projects</button>
      </div>
      <div className="hero-projects">
        <picture className="hero-picture">
          <img
            className="hero-img"
            src="https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128462/portfolio/project-two_pcdtoo.jpg"
            alt="project"
          />
          <RedirectGroup />
        </picture>
        <picture className="hero-picture">
          <img
            className="hero-img"
            src="https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128461/portfolio/project-three_o8tbqe.jpg"
            alt="project"
          />
          <RedirectGroup />
        </picture>
        <picture className="hero-picture">
          <img
            className="hero-img"
            src="https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128461/portfolio/example-four_wyld70.jpg"
            alt="project"
          />
          <RedirectGroup />
        </picture>
        <picture className="hero-picture">
          <img
            className="hero-img"
            src="https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128462/portfolio/project-one_fmgww7.jpg"
            alt="project"
          />
          <RedirectGroup />
        </picture>
      </div>
    </div>
  );
};

export { Hero };
