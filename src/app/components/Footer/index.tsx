import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { HashLink } from 'react-router-hash-link';
import LogoWhiteIcon from '../../svgs/LogoWhiteIcon';
import { menu } from '../../../utils/constants';
import { StyledFooterContainer, StyledTopFooter, StyledBottomFooter } from './styles';

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledTopFooter>
        <Box sx={{ display: 'flex', alignItems: 'center' }} mb={3}>
          <LogoWhiteIcon />
          <Typography variant="body1" className='logo-text'>
            <span style={{ fontWeight: 'bold' }}>Casba </span>
            <span style={{fontWeight: 'lighter'}}>Media</span>
            </Typography>
        </Box>
        <Typography variant="body1" className='menu-text'>
          <HashLink to={'#top'}>Home</HashLink>
          {menu.map((menu) => (
            <HashLink smooth to={menu.link} key={menu.id}>
              {menu.text}
            </HashLink>
          ))}
        </Typography>
        <Divider className="divider" />
        <Typography className='address-text'>
          	Architektų g. 56-101, LT-04111 Vilnius, Lithuania
        </Typography>
      </StyledTopFooter>
      <StyledBottomFooter>
        <Typography variant="body2" className="copyright">
          Copyright © {new Date().getFullYear()} CASBA Media.
        </Typography>
        <Typography variant="body2" className="all-rights">
          All rights reserved.
        </Typography>
      </StyledBottomFooter>
    </StyledFooterContainer>
  );
};

export default Footer;
