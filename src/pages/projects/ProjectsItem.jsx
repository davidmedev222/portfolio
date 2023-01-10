import { RedirectGroup } from '../../components/redirect/RedirectGroup';

const ProjectsItem = ({ image, alt, redirect }) => {
  return (
    <article className="projects-art">
      {/* IMAGE */}
      <picture className="projects-picture">
        <img className="projects-img" src={image} alt={alt} />
      </picture>
      {/* COMPONENT */}
      <RedirectGroup github={redirect.github} site={redirect.site} />
    </article>
  );
};

export { ProjectsItem };
