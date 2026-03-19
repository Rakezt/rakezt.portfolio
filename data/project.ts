export const projects = [
  {
    slug: 'zing',
    title: 'Zing ',
    description:
      'A social network platform where user can manage profile, add or reject friend request, chat with friends and buy premium features',
    tech: [
      'Next.js',
      'TypeScript',
      'Redux ',
      'Node.js',
      'Express.js',
      'MongoDB',
      'TailwindCSS',
      'DaisyUI',
      'Socket.IO',
    ],
    img: 'https://res.cloudinary.com/detngmiyp/image/upload/v1773914805/zing_xhk0t8.png',
    github: 'https://github.com/Rakezt/ZingFE',
    demo: 'https://zing-app.netlify.app/',
  },
  {
    slug: 'bang-bang',
    title: 'Bang Bang',
    description:
      'A modern skateboard e-commerce web application built with MERN Stack, focusing on responsive UI, clean architecture, and scalable backend design.',
    tech: [
      'React.js',
      'Redux',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redis',
      'Cloudinary',
    ],
    img: 'https://res.cloudinary.com/detngmiyp/image/upload/v1773914806/bang_acnu0p.png',
    github: 'https://github.com/Rakezt/e-com-app',
    demo: 'https://rakeztecommerce.netlify.app/',
  },
  {
    slug: 'expense-ai',
    title: 'Lets Track Expense-AI',
    description:
      'An expense manager app with AI-driven summarization and interactive 3D visualisations for quick money insights.',
    tech: ['Next.js', 'Node.js', 'Socket.IO', 'MongoDB', 'Google Gemini'],
    img: 'https://res.cloudinary.com/detngmiyp/image/upload/v1773914806/expense_mg29n5.png',
    github: 'https://github.com/Rakezt/lets-track-expense-AI',
    demo: 'https://lets-track-expenses-ai.netlify.app/',
  },
  {
    slug: 'rakezt-bot',
    title: 'Rakezt Bot',
    description:
      'AI chat assistant with persistent user history. The truth it works like the real Chat GPT',
    tech: [
      'React',
      'Google Gemini',
      'Node.js',
      'MongoDB',
      'OpenAI',
      'Socket.IO',
    ],
    img: 'https://res.cloudinary.com/detngmiyp/image/upload/v1773914805/chatbot_senpyp.png',
    github: 'https://github.com/Rakezt/gemini-chatbot-FE',
    demo: 'https://rakezt-chatbot.netlify.app/login',
  },
  {
    slug: 'live-poller',
    title: 'Live Poller',
    description:
      'Live Poller is a real-time voting platform where hosts can create polls and users can vote instantly. With live updates, interactive charts, and one-click sharing, it is the fastest way to gather opinions and visualize feedback — all in the moment',
    tech: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'Redux',
      'MUI',
    ],
    img: 'https://res.cloudinary.com/detngmiyp/image/upload/v1773915398/poll_eu8pus.png',
    github: 'https://github.com/Rakezt/live-poller-fe',
    demo: 'https://live-poller.netlify.app/login',
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  img: string;
  github: string;
  demo: string;
};
