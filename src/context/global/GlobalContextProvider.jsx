import { GlobalContext } from './GlobalContext';

const GlobalContextProvider = ({ children }) => {
  const data = {
    hero: {
      spanOne: 'D',
      titleOne: 'AVID',
      spanTwo: 'M',
      titleTwo: 'AMANI',
      rol: 'Front End Developer',
      projects: [
        {
          id: 1,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128462/portfolio/project-two_pcdtoo.jpg',
          alt: 'project',
          github: 'github',
          site: 'https',
        },
        {
          id: 2,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128461/portfolio/project-three_o8tbqe.jpg',
          alt: 'project',
          github: 'github',
          site: 'https',
        },
        {
          id: 3,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128461/portfolio/example-four_wyld70.jpg',
          alt: 'project',
          github: 'github',
          site: 'https',
        },
        {
          id: 4,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128462/portfolio/project-one_fmgww7.jpg',
          alt: 'project',
          github: 'github',
          site: 'https',
        },
      ],
      button: 'View More',
    },
    projects: {
      span: 'P',
      title: 'ROJECTS',
      articles: [
        {
          id: 1,
          alt: '',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128462/portfolio/project-two_pcdtoo.jpg',
          redirect: { github: 'github', site: 'site' },
        },
        {
          id: 2,
          alt: '',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128461/portfolio/example-four_wyld70.jpg',
          redirect: { github: 'github', site: 'site' },
        },
        {
          id: 3,
          alt: '',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128462/portfolio/project-one_fmgww7.jpg',
          redirect: { github: 'github', site: 'site' },
        },
        {
          id: 4,
          alt: '',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128461/portfolio/project-three_o8tbqe.jpg',
          redirect: { github: 'github', site: 'site' },
        },
        {
          id: 5,
          alt: '',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128461/portfolio/project-three_o8tbqe.jpg',
          redirect: { github: 'github', site: 'site' },
        },
        {
          id: 6,
          alt: '',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128462/portfolio/project-one_fmgww7.jpg',
          redirect: { github: 'github', site: 'site' },
        },
        {
          id: 7,
          alt: '',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128461/portfolio/example-four_wyld70.jpg',
          redirect: { github: 'github', site: 'site' },
        },
        {
          id: 8,
          alt: '',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128462/portfolio/project-two_pcdtoo.jpg',
          redirect: { github: 'github', site: 'site' },
        },
        {
          id: 9,
          alt: '',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128461/portfolio/example-four_wyld70.jpg',
          redirect: { github: 'github', site: 'site' },
        },
      ],
    },
    about: {
      span1: 'A',
      title1: 'BOUT',
      span2: 'M',
      title2: 'E',
      description1:
        'I am a Web Developer with MERN stack management, in simple words I am a competitive person.',
      description2:
        'I like learning and based on that make use of my knowledge to solve any kind of problem in the best possible way.',
      description3: 'Currently, I am a freelancer and I create content on Tiktok and Youtube.',
      skills: [
        'ReactJs',
        'Javascript',
        'Typescript',
        'SASS',
        'CSS3',
        'Bootstrap',
        'Tailwind',
        'MaterialUI',
        'HTML5',
        'Firebase',
        'Git',
        'Github',
      ],
    },
    contact: {
      span: 'C',
      title: 'ONTACT',
    },
  };
  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>;
};

export { GlobalContextProvider };
