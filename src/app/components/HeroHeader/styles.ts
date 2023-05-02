import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledHeroContainer = styled(Container)(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 90vh;
    margin: 5rem 0;

    ${theme.breakpoints.up('md')} {
      flex-direction: row;
      margin: auto;
    }
  `
);

export const StyledHeroText = styled(Box)(
  ({ theme }) => `
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5rem 0 auto;
    padding: 1%;
    text-align: center;
    width: 95%;
    min-height: 40vh;

    .heading {
      font-size: 1.5rem;
      margin: -1rem auto 1rem;
    }

    .subheading {
      margin-bottom: 2rem;
    }

    .cta-btn,
    .cta-btn:hover {
      background-color: #EA2C76;
      color: white;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-weight: 600;
      margin: auto;
      text-alin: left;
      text-transform: capitalize;
      height: 50px;
      width: 220px;
    }

    ${theme.breakpoints.up('md')} {
      margin: 0 auto;
      padding: 0 8% 0 0;
      text-align: left;
      width: 50%;

      .heading {
        font-size: 2.5rem;
      }

      .cta-btn,
      .cta-btn:hover {
        margin: 0;
      }
    }
  `
);

export const StyledHeroImage = styled(Box)(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -9rem auto 0;
    max-width: 350px;
    min-height: 40vh;

    svg {
      width: 90%;
    }


    ${theme.breakpoints.up('md')} {
      margin-top: 0rem;
      max-width: 50%;
    }
  `
);
