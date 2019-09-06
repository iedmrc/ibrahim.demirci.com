module.exports = {
  siteTitle: 'Ibrahim Ethem Demirci | Computer Scientist & Mathematician',
  siteDescription:
    'Ibrahim Ethem Demirci is a computer scientist & mathematician who specializes in developing machine learning and web applications.',
  siteKeywords:
    'Ibrahim Ethem Demirci, Ibrahim Ethem, Demirci, iedmrc, software engineer, machine learning engineer, web developer, devops',
  siteUrl: 'https://ibrahim.demirci.com',
  siteLanguage: 'en_US',

  googleVerification: '',//'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Ibrahim Ethem Demirci',
  location: 'Ankara, TR',
  email: 'demirciibrahim.e@gmail.com',
  github: 'https://github.com/iedmrc/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/iedmrc/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/iedmrc',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/iedmrc/',
    },
    {
      name: 'Devto',
      url: 'https://dev.to/iedmrc',
    },
    {
      name: 'PGP',
      url: 'pgp_keys.asc',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@iedmrc',
  googleAnalyticsID: '',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
