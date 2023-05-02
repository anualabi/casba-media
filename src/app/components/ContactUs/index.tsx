import Typography from '@mui/material/Typography';
import FooterImage from '../../svgs/FooterImage';
import { StyledContactContainer, StyledFooterText, StyledFooterImage } from './styles';

const ContactUs = () => {
  return (
    <section id="contact-us">
      <StyledContactContainer  maxWidth="xl">
        <StyledFooterText>
          <Typography variant="h3" className="heading">
            It'd be great to hear from you!
          </Typography>
          <Typography variant="body1" className="subheading">
              CASBA Media processes your personal data based on a legitimate interest.
          </Typography>
          <a href="mailto:contact@casbamedia.com" className="cta-btn" >
            Contact us
          </a>
        </StyledFooterText>
        <StyledFooterImage>
          <FooterImage />
        </StyledFooterImage>
      </StyledContactContainer>
    </section>
  );
};

export default ContactUs;
