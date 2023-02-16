import { useContext } from 'react'
import { GlobalContext } from '../../context/global/GlobalContext'
import { HeroProjects } from './HeroProjects'

const Hero = () => {
  const { hero } = useContext(GlobalContext)

  const { spanOne, titleOne, spanTwo, titleTwo, rol, button } = hero

  const heroProjects = hero.projects.map((cadaProject) => (
    <HeroProjects key={cadaProject.id} {...cadaProject} />
  ))

  return (
    <div className='hero'>
      {/* INFO */}
      <div className='hero-info'>
        <h1 className='hero-name'>
          <span className='hero-span'>{spanOne}</span>
          {titleOne}
          <span className='hero-span'> {spanTwo}</span>
          {titleTwo}
        </h1>
        <h2 className='hero-rol'>{rol}</h2>
        {/* BUTTON */}
        <a href='#projects' className='hero-btn'>
          {button}
        </a>
      </div>
      {/* PROJECTS */}
      <div className='hero-projects'>
        {/* COMPONENT */}
        {heroProjects}
      </div>
    </div>
  )
}

export { Hero }
