import { IconType } from 'react-icons';

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiDaisyui,
  SiShadcnui,
  SiDocker,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiNodedotjs,
  SiExpress,
  SiJira,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMongoose,
} from 'react-icons/si';

import { TbApi } from 'react-icons/tb';

export const skillIcons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  ReactJS: SiReact,
  NextJS: SiNextdotjs,
  Redux: SiRedux,
  'Tailwind CSS': SiTailwindcss,
  MUI: SiMui,
  DaisyUI: SiDaisyui,
  'shadcn/ui': SiShadcnui,

  NodeJS: SiNodedotjs,
  ExpressJS: SiExpress,
  'REST APIs': TbApi,
  'JWT Authentication': SiJsonwebtokens,
  'Socket.IO': SiSocketdotio,

  MongoDB: SiMongodb,
  Mongoose: SiMongoose,

  Docker: SiDocker,
  'CI/CD': SiGithub,

  Git: SiGit,
  Postman: SiPostman,
  Jira: SiJira,
  GitHub: SiGithub,
};
