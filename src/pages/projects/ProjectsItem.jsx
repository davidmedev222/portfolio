import { RedirectGroup } from '../../components/redirect/RedirectGroup';

const ProjectsItem = ({ image, alt, redirect }) => {
  const { github, site } = redirect;

  return (
    <article className="projects-art">
      {/* IMAGE */}
      <picture className="projects-picture">
        <img className="projects-img" src={image} alt={alt} />
      </picture>
      {/* COMPONENT */}
      <RedirectGroup github={github} site={site} />
    </article>
  );
};

export { ProjectsItem };
