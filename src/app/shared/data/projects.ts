export interface Project {
  id: string;
  name: string;
  technologies: Array<Technologies>;
  description: string;
  summary: string;
  github_url?: string;
  web_url?: string;
  _noComponent?: boolean;
  _i18n: string;
}
export interface Technologies {
  name: string;
  icon: string;
}

export const projects: Array<Project> = [
  {
    id: 'birdrockres-desktop',
    name: 'Birdrockres',
    _noComponent: false,
    _i18n: 'app.birdrockres',
    technologies: [
      { name: 'Angular 14', icon: 'angular' },
      { name: 'Typescript', icon: 'typescript' },
      { name: 'HTML', icon: 'html' },
      { name: 'Tailwind', icon: 'tailwind' },
      { name: 'Material', icon: 'material' },
      { name: 'CSS', icon: 'css' },
    ],
    summary: 'Property management application.',
    description: `Birdrockres is a web-based application designed for property management, specifically tailored to streamline the management of rental properties. Built using the Angular framework, the application offers a comprehensive solution for property owners and tenants. It facilitates the upload and management of property-related documents, tracks inspections, and organizes photographic documentation with high resolution.

Key features include advanced functionality to categorize and label data for easier navigation, a user-friendly interface, and seamless document sharing without requiring the recipient to install additional software—accessible directly through a web browser. Developed as part of a personal portfolio project, this application showcases expertise in Angular development, demonstrating the ability to build scalable, functional, and user-focused web applications.`,
  },
  {
    id: 'birdrockres-mobile',
    name: 'Birdrockres Mobile App',
    _noComponent: false,
    _i18n: 'app.birdrockres_mobile',
    technologies: [
      { name: 'Ionic', icon: 'ionic' },
      { name: 'Angular 14', icon: 'angular' },
      { name: 'Typescript', icon: 'typescript' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'PWA', icon: 'pwa' },
      { name: 'Swift', icon: 'swift' },
      { name: 'Kotlin', icon: 'kotlin' },
    ],
    summary: 'Mobile application for property management.',
    description: `The Birdrockres Mobile App is a progressive web application (PWA) designed to complement the Birdrockres web platform, offering a mobile-friendly solution for property management on the go. Developed using the Ionic framework, the app provides a seamless user experience across various devices, enabling property owners and tenants to access key features and functionalities from their smartphones or tablets.
      `,
  },
  {
    id: 'nbazar',
    name: 'NBazar',
    github_url: 'https://github.com/Psovod/NBazar',
    _i18n: 'app.nbazar',
    _noComponent: true,
    technologies: [
      { name: 'Angular 17', icon: 'angular_new' },
      { name: 'Typescript', icon: 'typescript' },
      { name: 'HTML', icon: 'html' },
      { name: 'Tailwind', icon: 'tailwind' },
      { name: 'CSS', icon: 'css' },
    ],
    summary: 'Property marketplace management application',
    description: `NBazar is a web-based application designed for marketplace management, providing a streamlined platform for buying, selling, and managing items. Built using the Angular framework, it showcases robust functionality and a user-centric design, catering to individuals and small businesses looking for an efficient solution for online trading.

Key features include a responsive interface, advanced item categorization, seamless image uploads, and search capabilities. The application emphasizes simplicity and accessibility, ensuring a smooth user experience. Developed as part of a personal portfolio project, NBazar highlights expertise in Angular development, demonstrating proficiency in creating scalable and user-focused web solutions.`,
  },
  {
    id: 'bagrak',
    name: 'Bagrák',
    web_url: 'https://zemniprace-bagrak.cz',
    _noComponent: true,
    _i18n: 'app.bagrak',
    technologies: [
      { name: 'Javascript', icon: 'javascript' },
      { name: 'HTML', icon: 'html' },
      { name: 'Tailwind', icon: 'tailwind' },
      { name: 'CSS', icon: 'css' },
    ],
    summary: 'Agricultural job board application',
    description: `zemniprace-bagrak is a web-based application designed to serve as a job board for agricultural workers and employers. Developed using the Angular framework, the application offers a user-friendly interface for posting and applying for agricultural job opportunities, facilitating communication between job seekers and employers in the agricultural sector.
      `,
  },
];
