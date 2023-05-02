import Typography from '@mui/material/Typography';
import FooterImage from '../../svgs/FooterImage';
import { StyledContactContainer, StyledFooterText, StyledFooterImage } from './styles';

const ContactUs = () => {
  return (
    <StyledContactContainer id="contact-us" maxWidth="xl">
      <StyledFooterText>
        <Typography variant="h3" className="heading">
          It'd be great to hear from you!
        </Typography>
        <Typography variant="body1" className="subheading">
            CASBA Media processes your personal data based on a legitimate interest.
        </Typography>
        <a href="mailto:contact@casbamedia.com" className="cta-btn" >
          Get in Touch
        </a>
      </StyledFooterText>
      <StyledFooterImage>
        <FooterImage />
      </StyledFooterImage>
    </StyledContactContainer>
  );
};

export default ContactUs;