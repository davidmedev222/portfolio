import { useContext } from 'react'
import { GlobalContext } from '../../context/global/GlobalContext'
import { ProjectsItem } from './ProjectsItem'

const Projects = () => {
  const { projects } = useContext(GlobalContext)

  const { span, title, articles } = projects

  const projectsItems = articles.map((cadaProject) => (
    <ProjectsItem key={cadaProject.id} {...cadaProject} />
  )) // COMPONENT

  return (
    <section id='projects' className='projects'>
      {/* TITLE */}
      <h3 className='projects-title'>
        <span className='projects-span'>{span}</span>
        {title}
      </h3>
      {/* PROJECTS */}
      <div className='projects-content'>{projectsItems}</div>
    </section>
  )
}

export { Projects }
