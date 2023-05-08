import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { HashLink } from 'react-router-hash-link';
import LogoIcon from '../../svgs/LogoIcon';
import NavDrawer from '../NavDrawer';
import { menu } from '../../utilities/constants';
import { StyledNavBar, StyledLogo, StyledMenu, StyledDrawer } from './styles';

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const NavBar = () => {
  return (
    <ElevationScroll>
      <StyledNavBar>
        <Container maxWidth="xl" sx={{ height: '100%' }}>
          <Toolbar disableGutters sx={{ height: '100%' }}>
            <StyledLogo>
              <HashLink smooth to="#top" aria-label="Logo">
                <LogoIcon />
                <Typography variant="body1" className="">
                  <span style={{ fontWeight: 'bold' }}>Casba </span>
                  <span style={{fontWeight: 'lighter'}}>Media</span>
                </Typography>
              </HashLink>
            </StyledLogo>
            <StyledMenu>
              {menu.map((menu) => (
                <HashLink smooth to={menu.link} key={menu.id}>
                  {menu.text}
                </HashLink>
              ))}
            </StyledMenu>
            <StyledDrawer>
              <NavDrawer />
            </StyledDrawer>
          </Toolbar>
        </Container>
      </StyledNavBar>
    </ElevationScroll>
  );
};

export default NavBar;
