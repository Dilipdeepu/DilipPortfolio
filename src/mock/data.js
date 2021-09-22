import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'DILIP K',
  subtitle: 'Developer & Programmer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'dilp.jpg',
  paragraphOne:
    "Hello! I'm Dilip Kumar developer based out of Bengaluru,India. I make web applications ,usually with DJANGO",
  paragraphTwo:
    "I primarily use Python,but picking up a new framework or language isn't a problem. i have extensive programming experiencce in projects i have done and i'm comfortable developing on the frontend or backend as well as setting up or managing infrastruture",
  paragraphThree:
    'I am familiar with Java and its associated stack , my bread and butter is Django other python Libraries Pandas,Numbpy,Matplotlib,OpenCv,MySql',
  resume: 'https://drive.google.com/uc?export=download&id=1VNUc1DzYBvYYuYYeRCUo68RN45N21Zbu', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'railway.png',
    title: 'Railway Databse Management System',
    info: 'ASP.NET web based application carried out in visual studio C# coding in the front end and sql-lite in the back end which will provide a technique and which is used to maintain all records such as Train details,arrival details and departure details of train.',
    info2: '',
    url: 'https://github.com/Dilipdeepu/Railway-Databse-Management-System.git',
    repo: 'https://github.com/Dilipdeepu/Railway-Databse-Management-System.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smart.jpg',
    title: 'Smart pi Mirror using raspberry pi',
    info: 'Description: Using face recognition accuracy and we have used voice recognition and the temperature, humidity and displayed in mirror. And time, date and news are fetched from cloud. And Starting and Stopping of the service is implemented by the python code.',
    info2: '',
    url: 'https://github.com/',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'To-Do.png',
    title: 'TODO-LIST 	',
    info: "A simple app implemented using Html5,CSS3,python and Bootstrap. A list everything that you have to do, with the most  important tasks on daily basis. And by prioritizing tasks, you plan the order in which you'll do them, so that you can know what needs your immediate attention, and what you can leave until later",
    info2: '',
    url: 'https://github.com/',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ecommerce.png',
    title: 'E-Commerce Website',
    info: ' A project implemented using Html5,CSS3,python,sqllite where orders for gadgets,cloths and specification of products can be compared.',
    info2: '',
    url: 'https://github.com/',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dilipdeepu74@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/dilipdeepu',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'www.linkedin.com/in/dilipk97',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Dilipdeepu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
