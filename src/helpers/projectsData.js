import koffeeImg from '../assets/koffee-cover.webp'
import iStreamImg from '../assets/istream-cover.webp'
import alsaidImg from '../assets/alsaidfoundation-cover.webp'
import alexlandscapingImg from '../assets/alexlandscapingllc-cover.webp'
import portfolioImg from '../assets/jarolriera-portfolio-cover.webp'

const projectsData = [
    {
      name: 'Koffee',
      img: koffeeImg,
      description: 'A fully functional ecommerce site I built with Angular that allows for secure online transactions using the integrated Stripe payment gateway.',
      technologies: 'Angular / TypeScript / Node.js / Stripe API',
      repo_link: 'https://github.com/jarolthecoder/iSTREAM',
      url: 'https://koffeeshop.netlify.app/'
    },
    {
      name: 'iStream',
      img: iStreamImg,
      description: 'iSTREAM is an entertainment web app built to be user-friendly and intuitive. Users can search, browse and save their preferred content with ease.',
      technologies: 'Angular / TypeScript / Mock API',
      repo_link: 'https://github.com/jarolthecoder/Koffee-Ecommerce',
      url: 'https://myistream.netlify.app/'
    },
    {
      name: 'Alsaid Foundation',
      img: alsaidImg,
      description: 'A multipage website I created for the organization during my internship, it includes custom styling and a donation plugin integration that makes it easy for people to donate.',
      technologies: 'WordPress / Elementor / CSS / JavaScript',
      repo_link: '',
      url: 'https://alsaidfoundation.org/'
    },
    {
      name: 'Alex Landscaping LLC',
      img: alexlandscapingImg,
      description: `I assisted Alex, a local business owner, in building a website for his landscaping company. The goal was to effectively showcase the high-quality of his work and establish a strong online presence for the business.`,
      technologies: 'WordPress / Elementor / CSS / JavaScript',
      repo_link: '',
      url: 'https://alexlandscapingllc.com/'
    }
    // {
    //   name: 'Portfolio V3',
    //   img: portfolioImg,
    //   description: `I wanted to provide a more dynamic and engaging experience, while showcasing my work and expertise. It's a great representation of my design and development skills.`,
    //   technologies: 'React / Vite / AOS',
    //   repo_link: 'https://github.com/jarolthecoder/Portfolio-V3',
    //   url: 'https://jarolriera.com/'
    // }
]
  
export default projectsData