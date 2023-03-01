import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Shounak Chandra',
  title: "Hi all, I'm Shounak",
  description:
    "I'm a hardworking and smart tech enthusiast with a high aspiration. I learn new skills and tools quickly, constantly upskilling and exploring new technologies. I'm a team player, a creative thinker, and always eager to learn.",
  resumeLink:
    'https://drive.google.com/file/d/1z5aifWOae9xhjiHHDB0gFZ-ygw_VPT9G/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'Shounak2003',
};

export const contact = {};

export const socialLinks = {
  url: 'https://github.com/Shounak2003',
  linkedin: 'https://www.linkedin.com/in/shounak-chandra/',
  github: 'https://github.com/Shounak2003',
  instagram: 'https://www.instagram.com/_shounak_chandra_/',
  facebook: 'https://www.facebook.com/profile.php?id=100014075717385',
  twitter: 'https://twitter.com/_shounakchandra?t=FUwAqlR4YKJJ5Z22uHk7_A&s=08',
};

export const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Software Developer',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },

        {
          skillName: 'Python',
          fontAwesomeClassname: 'logos:python',
        },
        {
          skillName: 'C',
          fontAwesomeClassname: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'Vizard',
          fontAwesomeClassname: 'vscode-icons:file-type-django',
        },

      ],
    },
    {
      title: 'Unity Development',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Understanding and skills required in C#'),
        emoji(
          '⚡ Strong understanding of the Unity Editor'
        ),
        emoji(
          '⚡ Understanding of game development concepts'
        ),
      ],

      
    
  },
],
};




export const SkillBars = [
  {
    Stack: 'UI/UX', //Insert stack or technology you have experience in
    progressPercentage: '50', //Insert relative proficiency in percentage
  },
  {
    Stack: 'AR/VR',
    progressPercentage: '70',
  },
  {
    Stack: 'IoT',
    progressPercentage: '50',
  },

];

export const educationInfo = [
  {
    schoolName: 'SRM Institute of Science and Technology',
    subHeader: 'Bachelors of Technology in Computer Science',
    duration: 'September 2021 - June 2025',
 
  },
];

export const experience = [
  {
    role: 'Sales and Marketing Operational Lead',
    company: 'Tech Analogy',
    companylogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2022 – Jun 2022',
    desc: 'Tech Analogy is a company that aims in providing STEM education by conducting various workshops, webinars , bootcamps and hackathons. Primary task was to use marketing strategy for establishing Tech Analogy as a brand. Responsible for bringing in partner(s) and sponsor(s) either for an event or for future collaborations',
  },
  {
    role: 'AR/VR Research Scholar',
    company: 'IIT Roorkee',
    companylogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Jan 2022 – Mar 2022',
    desc: 'A custom-made program using Vizard (world viz), a python based virtual stimulation for psychophysiological analysis. It investigated the impact of environmental color and structural significance in Route Planning that manipulated the human psycho physiological response. In this study, participant would be a shown virtual environment, and the physiological response would be recorded throughout the experiment session. The efficacy of color on Route Planning was then assess ed using psychophysiological response such as electroencephalography (EEG), skin conductance response (SCR), heartrate variability (HRV), blood- volume pressure (BVP), and respiratory response',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },

];

export const projects = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',

  },
  {
    name: 'NEUROSCIENCE & NEURO-INSTRUMENTATION',
    desc: 'The project, in collaboration with Christ University, aims to investigate neural mechanisms underlying cognitive processes through the use of a virtual reality platform developed in Unity Engine. Participants will engage in various cognitive tasks involving mental rotation, and their neural and physiological responses will be measured using state-of-the-art neuroimaging techniques.',
 
  },
];

export const feedbacks = [
  {
    name: 'Sambath RD',
    feedback:
      'Shounak Chandra is a very sincere and hardworking young programmer and UX-UI Designer. He has excellent coding proficiency and problem solving skills. He is a very productive person and is a multi-skilled person with a high level of patience. He associated with me in one of my Virtual reality-based research projects. Shounak made a custom-made program using Vizard (world viz), a python based virtual stimulation for psychophysiological analysis. His desire for proficiency and education makes him a valuable asset to the team. ',
  },
  {
    name: 'Shaurya Srinet',
    feedback:
      'Shounak Chandra is one of the best among all the people I have ever worked with. Shounak is a very productive person, is hardworking, broad-minded and forward thinking individual.  Shounak is very passionate and has great vision for his work. His focus keeps everything moving smoothly, he makes sure all the deadlines are met. Desire for proficiency and education makes Shounak a valuable asset to the team. Working with Shounak is a signature of success.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: 'Shounak Chandra',
  description:
    'A passionate AR/VR and IoT Developer .',
  author: 'Shounak Chandra',



};
