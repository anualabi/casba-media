import Typography from '@mui/material/Typography';
import { HashLink } from 'react-router-hash-link';
import HeroImage from '../../svgs/HeroImage';
import { brands } from '../../utilities/constants';
import { StyledHeroContainer, StyledHeroText, StyledHeroImage, StyledBrandsBox } from './styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const HeroHeader = () => {
  return (
    <>
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
      <StyledBrandsBox >
        <Container maxWidth="xl">
          <Box className="brand-list">
          <Typography variant="h4" key={0} className="brand-item brand-heading">Some brands we work with</Typography>
            {brands.map((card) => (
              <Box key={card.id} className="brand-item brand-logo">
                {card.image}
                <Typography className="brand-name">{card.description}</Typography>
              </Box>
            ))}
          </Box>
          </Container>
      </StyledBrandsBox>
      </>
  );
};

export default HeroHeader;
