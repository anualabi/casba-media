import baocasino from '../assets/baocasino-logo.png'
import betsson from '../assets/betsson-logo.png'
import betwinner from '../assets/betwinner-logo.png'
import playojo from '../assets/playojo-logo.png'
import AccountabilityIcon from '../svgs/scorecard/AccountabilityIcon';
import InnovationIcon from '../svgs/scorecard/InnovationIcon';
import ExpertiseIcon from '../svgs/scorecard/ExpertiseIcon';
import IntegrityIcon from '../svgs/scorecard/IntegrityIcon';
import DesignDevIcon from '../svgs/services/DesignDevIcon';
import DigitalMarketingIcon from '../svgs/services/DigitalMarketingIcon';
import BizDevelopmentIcon from '../svgs/services/BizDevelopmentIcon';
import ProgrammaticIcon from '../svgs/services/ProgrammaticIcon';

export const menu = [
  { id: 1, link: '/#about-us', text: 'About us' },
  { id: 2, link: '/#services', text: 'Services' },
  { id: 3, link: '/#contact-us', text: 'Get in touch' }
];

export const brands = [
  { id: 1, image: <img src={baocasino} alt="Bao Casino logo" />, description: 'Bao casino' },
  { id: 2, image: <img src={betsson} alt="Betsson logo" />, description: 'Betsson casino' },
  { id: 3, image: <img src={betwinner} alt="Betwinner logo" />, description: 'Betwinner' },
  { id: 4, image: <img src={playojo} alt="PlayOjo logo" />, description: 'PlayOJO Casino' },
]

export const ourValues = [
  { id: 1, image: <AccountabilityIcon />, description: 'Accountability' },
  { id: 2, image: <InnovationIcon />, description: 'Innovation' },
  { id: 3, image: <ExpertiseIcon />, description: 'Expertise' },
  { id: 4, image: <IntegrityIcon />, description: 'Integrity' }
];

export const services = [
  {
    id: 1,
    image: <DesignDevIcon />,
    title: 'Design & Development',
    text: 'We create stunning user interfaces and experiences using the latest cutting-edge technologies and bring your ideas to life.'
  },
  {
    id: 2,
    image: <DigitalMarketingIcon />,
    title: 'Digital Marketing',
    text: 'We create compelling, customer focused content and run successful campaigns. We also cover PPC, SEM, SEO and so much more.'
  },
  {
    id: 3,
    image: <ProgrammaticIcon />,
    title: 'Performance Marketing',
    text: 'We build and manage acquisition campaigns across various channels including social, SEM, and display to drive revenue and increase ROI.'
  },
  {
    id: 4,
    image: <BizDevelopmentIcon />,
    title: 'Business Development',
    text: 'We proactively seek new business opportunities within the online gaming market, identify client needs and suggest appropriate products/services.'
  }
];
