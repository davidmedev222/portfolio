import { GlobalContext } from './GlobalContext';

const GlobalContextProvider = ({ children }) => {
  const data = {
    hero: {
      spanOne: 'D',
      titleOne: 'AVID',
      spanTwo: 'M',
      titleTwo: 'AMANI',
      rol: 'Front End Web Developer',
      projects: [
        {
          id: 1,
          alt: 'e-commerce jordan',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128462/portfolio/project-two_pcdtoo.jpg',
          redirect: {
            github: 'https://github.com/davidmedev222/ecommerce-jordan-react',
            site: 'https://jordanstore.vercel.app/',
          },
        },
        {
          id: 2,
          alt: 'plataforma gaming',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128461/portfolio/example-four_wyld70.jpg',
          redirect: {
            github: 'https://github.com/No-Country/C8-73-T-RN',
            site: 'https://e-stadium.vercel.app/',
          },
        },
        {
          id: 3,
          alt: 'landing page',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128462/portfolio/project-one_fmgww7.jpg',
          redirect: {
            github: 'https://github.com/davidmedev222/landing-blizt-react',
            site: 'https://blizt.vercel.app/',
          },
        },
        {
          id: 4,
          alt: 'food store',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673395429/portfolio/project-five_kzepuv.jpg',
          redirect: {
            github: 'https://github.com/davidmedev222/CrismaBurger-Mamani',
            site: 'https://davidmedev222.github.io/CrismaBurger-Mamani/',
          },
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
          alt: 'e-commerce jordan',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128462/portfolio/project-two_pcdtoo.jpg',
          redirect: {
            github: 'https://github.com/davidmedev222/ecommerce-jordan-react',
            site: 'https://jordanstore.vercel.app/',
          },
        },
        {
          id: 2,
          alt: 'plataforma gaming',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128461/portfolio/example-four_wyld70.jpg',
          redirect: {
            github: 'https://github.com/No-Country/C8-73-T-RN',
            site: 'https://e-stadium.vercel.app/',
          },
        },
        {
          id: 3,
          alt: 'landing page',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673128462/portfolio/project-one_fmgww7.jpg',
          redirect: {
            github: 'https://github.com/davidmedev222/landing-blizt-react',
            site: 'https://blizt.vercel.app/',
          },
        },
        {
          id: 4,
          alt: 'food store',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673395429/portfolio/project-five_kzepuv.jpg',
          redirect: {
            github: 'https://github.com/davidmedev222/CrismaBurger-Mamani',
            site: 'https://davidmedev222.github.io/CrismaBurger-Mamani/',
          },
        },
        {
          id: 5,
          alt: 'e-commerce',
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673395511/portfolio/project-six_nbwnre.jpg',
          redirect: {
            github: 'https://github.com/davidmedev222/ecommerce-sneakers',
            site: 'https://davidmedev222.github.io/ecommerce-sneakers/',
          },
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
