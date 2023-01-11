import { RedirectGroup } from '../redirect/RedirectGroup';

const HeroProjects = ({ image, alt, redirect }) => {
  return (
    <picture className="hero-picture">
      <img className="hero-img" src={image} alt={alt} />
      <RedirectGroup github={redirect.github} site={redirect.site} />
    </picture>
  );
};

export { HeroProjects };
