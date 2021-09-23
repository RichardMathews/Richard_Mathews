import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'RichardMathews', // e.g: 'Name | Developer'
  lang: 'pt-BR', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Richard Mathews',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Me.jpg',
  paragraphOne: 'Richard Mathews, 21 anos, programador e me graduando em Sistemas de informação. ',
  paragraphTwo:
    'Atualmente atuo no desenvolvimento de aplicativos móveis e websites, incluindo aplicativo de rastreamento veicular, plataformas de atendimento ao cliente e gerenciamento empresarial.',
  paragraphThree: 'Estou sempre interessado em novos desafios. ',
  resume: 'https://drive.google.com/u/0/uc?id=1vfeTbk1K7CFiKUFcqGia2XrYG4ogYZS6&export=download', // if no resume, the button will not show up
};

// https://www.resumemaker.online/es.php

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'AV.png',
    title: 'Alerta Virtual',
    info: 'Aplicativo de rastreio veicular e smartphones em tempo real, que contém também um histórico de viagens, registro de cercas, entre outras funcionalidades. Caso queira saber mais, download disponível na PlayStore e AppStore.',
    info2: '',
    primaryButton: 'PlayStore',
    secondButton: 'AppStore',
    url: 'https://play.google.com/store/apps/details?id=br.com.alertavirtual.aplicativo',
    repo: 'https://apps.apple.com/br/app/alerta-virtual/id1554346082', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rocketShoes.png',
    title: 'Rocket Shoes',
    info: 'Loja virtual de tênis utilizando React, NodeJS, Redux e Styled Components.',
    info2: '',
    primaryButton: 'Código Fonte',
    url: 'https://github.com/RichardMathews/RocketShoes/tree/master',
    repo: 'https://github.com/RichardMathews/RocketShoes/tree/master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'github.png',
    title: 'Outros Projetos',
    info: 'Você pode ter acesso aos meus outros projetos disponíveis no Github.  Bem diversificados e modernos, que irão atrair seu interesse.',
    info2: '',
    repo: '', // if no repo, the button will not show up
    primaryButton: 'Saber Mais',
    url: 'https://github.com/RichardMathews',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'richardmathewsa.silva@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/richard-mathews-537150185/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RichardMathews',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://richardmathewsalmeidasilva.medium.com/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
