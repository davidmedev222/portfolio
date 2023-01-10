import { useContext } from 'react';
import { GlobalContext } from '../../context/global/GlobalContext';
import { ProjectsItem } from './ProjectsItem';

const Projects = () => {
  const { projects } = useContext(GlobalContext); // HELPER

  const projectsItems = projects.articles.map((cadaProject) => (
    <ProjectsItem key={cadaProject.id} {...cadaProject} />
  )); // COMPONENT

  return (
    <section className="projects">
      {/* TITLE */}
      <h3 className="projects-title">
        <span className="projects-span">{projects.span}</span>
        {projects.title}
      </h3>
      {/* PROJECTS */}
      <div className="projects-content">{projectsItems}</div>
    </section>
  );
};

export { Projects };
