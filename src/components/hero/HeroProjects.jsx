import { RedirectGroup } from '../redirect/RedirectGroup'

const HeroProjects = ({ image, alt, redirect }) => {
  const { github, site } = redirect

  return (
    <picture className='hero-picture'>
      <img className='hero-img' src={image} alt={alt} />
      <RedirectGroup github={github} site={site} />
    </picture>
  )
}

export { HeroProjects }
