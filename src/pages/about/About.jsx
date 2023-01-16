import { useContext } from 'react';
import { GlobalContext } from '../../context/global/GlobalContext';
import { AboutSkill } from './AboutSkill';

const About = () => {
  const { about } = useContext(GlobalContext);

  const { span1, title1, span2, title2, description1, description2, description3, skills } = about;

  const aboutSkill = skills.map((e) => <AboutSkill key={e} skill={e} />);

  return (
    <section id="aboutme" className="about">
      {/* TITLE */}
      <h3 className="about-title">
        <span className="about-span">{span1}</span>
        {title1}
        <span className="about-span"> {span2}</span>
        {title2}
      </h3>
      {/* DESCRIPTION */}
      <article className="about-art">
        <h4 className="about-subtitle">DESCRIPTION</h4>
        <p className="about-description">{description1}</p>
        <p className="about-description">{description2}</p>
        <p className="about-description">{description3}</p>
      </article>
      {/* SKILLS */}
      <article className="about-art">
        <h4 className="about-subtitle">SKILLS</h4>
        <ul className="about-ul">
          {/* COMPONENT */}
          {aboutSkill}
        </ul>
      </article>
    </section>
  );
};

export { About };
