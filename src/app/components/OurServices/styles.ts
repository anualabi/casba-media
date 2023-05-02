import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledServicesContainer = styled(Container)(
  () => `
    padding: 5rem 0;
  `
);

export const StyledServicesHeading = styled(Box)(
  ({ theme }) => `
    color: black;
    text-align: center;
    margin-bottom: 3rem;

    .divider {
      background-color: #EA2C76;
      margin: 0.25rem auto 0.5rem;
      width: 90px;
    }
  `
);

export const StyledServicesList = styled(Grid)(
  ({ theme }) => `
    padding: 0 1rem;

    ${theme.breakpoints.up('md')} {
      padding: 0 4rem;
    }
  `
);

export const StyledServicesItem = styled(Box)(
  ({ theme }) => `
    background-color: white;
    border-bottom: 6px solid #EA2C76;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    margin: 1.5rem auto;
    padding: 0 1.5rem;
    text-align: center;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .title {
      color: #EA2C76;
      margin: 1rem 0;
    }

    .text {
      color: black;
    }

    ${theme.breakpoints.up('sm')} {
      padding: 0 2rem;
      width: 95%;
    }

    ${theme.breakpoints.up('md')} {
      align-items: start;
      justify-content: start;
      width: 90%;
      margin: 2rem auto;
      padding: 2rem;
      text-align: left;
    }
  `
);
