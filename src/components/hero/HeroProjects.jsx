import { RedirectGroup } from '../redirect/RedirectGroup';

const HeroProjects = ({ image, alt, github, site }) => {
  return (
    <picture className="hero-picture">
      <img className="hero-img" src={image} alt={alt} />
      <RedirectGroup github={github} site={site} />
    </picture>
  );
};

export { HeroProjects };
