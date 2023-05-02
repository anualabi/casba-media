import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledFooterContainer = styled(Box)(
  ({ theme }) => `
    color: white;
    display: flex;
    flex-direction: column;
  `
);

export const StyledTopFooter = styled(Box)(
  ({ theme }) => `
    background-color: #EA2C76;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;

    svg {
      margin-right: 2px;
      width: 50px;
    }

    .logo-text {
      font-size: 1.25rem;
      text-transform: uppercase;
    }

    .menu-text {
      font-size: 0.8rem;
      text-transform: uppercase;

      a {
        color: white;
        padding: 0 1rem;
      }
    }

    .divider {
      border: 0;
      border-top: 0.1rem solid rgba(255, 255, 255, 0.12);
      margin: 1rem auto;
      width: 25%;
    }

    .address-text {
      font-size: 0.9rem;
    }
  `)

export const StyledBottomFooter = styled(Box)(
  ({ theme }) => `
    background-color: #C12562;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1.75rem 0;

    .copyright,
    .all-rights {
      margin: 0.25rem 0;
      text-align: center;
      width: 100%;
    }

    .copyright {
      margin-right: 0.5rem;
    }

    ${theme.breakpoints.up('md')} {
      .copyright,
      .all-rights {
        text-align: left;
        width: auto;
      }
    }
  `
);
