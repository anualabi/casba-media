import AccountabilityIcon from '../app/svgs/AccountabilityIcon';
import InnovationIcon from '../app/svgs/InnovationIcon';
import ExpertiseIcon from '../app/svgs/ExpertiseIcon';
import IntegrityIcon from '../app/svgs/IntegrityIcon';
import DesignDevIcon from '../app/svgs/DesignDevIcon';
import DigitalMarketingIcon from '../app/svgs/DigitalMarketingIcon';
import MediaBuyingIcon from '../app/svgs/MediaBuyingIcon';
import ProgrammaticIcon from '../app/svgs/ProgrammaticIcon';

export const menu = [
  { id: 1, link: '/#about-us', text: 'About us' },
  { id: 2, link: '/#services', text: 'Services' },
  { id: 3, link: '/#contact-us', text: 'Get in touch' }
];

export const scoreCard = [
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
    image: <MediaBuyingIcon />,
    title: 'Media Buying',
    text: 'We take a holistic approach with paid media to execute campaigns to strategically deliver customer acquisition with effective budgeting.'
  },
  {
    id: 4,
    image: <ProgrammaticIcon />,
    title: 'Programmatic Advertising',
    text: 'In the simplest terms, we use an automated software driven way to buy digital space for your advert to be displayed.'
  }
];
