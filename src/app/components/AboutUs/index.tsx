import Typography from '@mui/material/Typography';
import AboutIcon from '../../svgs/AboutIcon';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ourValues } from '../../utilities/constants';
import {
  StyledAboutContainer,
  StyledAboutImage,
  StyledAboutText,
  StyledCardList,
  StyledCardItem
} from './styles';

const AboutUs = () => {
  return (
    <section id="about-us">
      <StyledAboutContainer maxWidth="xl">
        <StyledAboutText>
          <Typography variant="h2" className="title">
            Our Purpose
          </Typography>
          <Typography variant="body1" className="description">
              We are on a mission to become the world’s number one provider of high quality online leads and to disrupt any industry through creativity and innovation.
          </Typography>
        </StyledAboutText>
        <StyledAboutImage>
          <AboutIcon />
        </StyledAboutImage>
      </StyledAboutContainer>
      <StyledCardList>
        <Container>
          <Typography variant="h2" align='center' mb={5}>
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {ourValues.map((card) => (
              <Grid item xs={12} md={3} key={card.id}>
                <StyledCardItem>
                  {card.image}
                  <Typography variant="body1">{card.description}</Typography>
                </StyledCardItem>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledCardList>
    </section>
  );
};

export default AboutUs;
