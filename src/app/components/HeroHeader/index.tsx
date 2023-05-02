import Typography from '@mui/material/Typography';
import HeroImage from '../../svgs/HeroImage';
import { HashLink } from 'react-router-hash-link';
import { StyledHeroContainer, StyledHeroText, StyledHeroImage } from './styles';

const HeroHeader = () => {
  return (
    <StyledHeroContainer maxWidth="xl">
      <StyledHeroText>
        <Typography variant="h2" className="heading">
          Lead Generation And Digital Marketing Provider
        </Typography>
        <Typography variant="body1" className="subheading">
            Casba Media runs leading site brands within casino and sports betting. We are proud of our widespread reach and  business diversification. We can supply you with high quality online leads with a global reach.

        </Typography>
        <HashLink smooth to="/#contact-us" className="cta-btn">
          Get in Touch
        </HashLink>
      </StyledHeroText>
      <StyledHeroImage>
        <HeroImage />
      </StyledHeroImage>
    </StyledHeroContainer>
  );
};

export default HeroHeader;
