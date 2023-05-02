import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledAboutContainer = styled(Container)(
  ({ theme }) => `
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    padding: 4rem 0;

    ${theme.breakpoints.up('md')} {
      flex-direction: row;
      margin-top: 0;
    }
  `
);

export const StyledAboutImage = styled(Box)(
  ({ theme }) => `
    margin: -4rem auto;
    width: 95%;
    display: flex;

    svg {
      margin: auto;
      width: 90%;
    }

    ${theme.breakpoints.up('md')} {
      margin: 0;
      width: 50%;
    }
  `
);

export const StyledAboutText = styled(Box)(
  ({ theme }) => `
    padding: 0;
    margin: 0 auto;
    text-align: center;
    width: 95%;

    .divider {
      background-color: ${theme.palette.secondary.main};
      margin: 0.25rem auto 0.5rem;
      width: 90px;
    }

    .description {
      margin-top: 1rem;
      padding: 0.25rem;
    }


    ${theme.breakpoints.up('md')} {
      margin: 0;
      padding: 0 8% 0 0;
      text-align: left;
      width: 50%;

      .divider {
        margin: 0.25rem 0 0.5rem;
      }

      .subtitle, .description {
        margin-bottom: 2rem;
      }

      .description {
        padding: 0 0.5rem 0 0;
      }
    }
  `
);

export const StyledCardList = styled(Box)(
  ({ theme }) => `
    background-color: white;
    padding: 3rem 0 5rem;
  `
);

export const StyledCardItem = styled(Box)(
  ({ theme }) => `
    background-color: #FCFCFC;
    border-bottom: 6px solid #EA2C76;
    padding: 2rem 1rem;
    text-align: center;
    margin: 0 1rem;
    min-height: 180px;

    p {
      color: black;
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 1rem;
    }

    ${theme.breakpoints.up('md')} {
      margin: 0;
    }
  `
);
