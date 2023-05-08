import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledHeroContainer = styled(Container)(
  ({ theme }) => `
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    min-height: 80vh;
    margin: 5rem 0;

    ${theme.breakpoints.up('md')} {
      flex-direction: row;
      min-height: 90vh;
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
    margin: -8rem 0 0;
    padding: 1%;
    text-align: center;
    width: 95%;
    min-height: 40vh;

    .heading {
      font-size: 1.8rem;
      font-weight: bolder;
      line-height: 2.4rem;
      margin: -1rem auto 1rem;
    }

    .subheading {
      font-size: 0.9rem;
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
      margin: -0.25rem auto 0;
      text-align: left;
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
        line-height: 3.5rem;
      }

      .subheading {
        font-size: 1.1rem;
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
    min-height: 25vh;

    svg {
      width: 90%;
    }


    ${theme.breakpoints.up('md')} {
      margin-top: 0rem;
      max-width: 50%;
    }
  `
);

export const StyledBrandsBox = styled(Box)(
  ({ theme }) => `
    .brand-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 1rem 0.5rem;
    }

    .brand-heading {
      background: white;
      color: #EA2C76;
      min-width: 100%;
      text-align: center;
    }

    .brand-item {
      width: 50%;
      padding: 1rem 0;
    }

    .brand-logo {
      display: flex;
      align-items: center;

      img {
        max-width: 50px;
      }

      .brand-name {
        color: #EA2C76; 
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 1rem;
        display: flex;
        flex-wrap: wrap;
        margin: 0.5rem 0 0 0.35rem;
      }
    }

    ${theme.breakpoints.up('md')} {
      background: white;
      padding: 2rem 0;

      .brands-list {
        flex-direction: row;
        align-items: center;
        padding: 0;
      }

      .brand-heading {
        min-width: 20%;
        text-align: left;
      }

      .brand-item {
        width: 20%;
        padding: 0;
      }

      .brand-logo {
        flex-direction: row;

        img {
          max-width: 90px;
        }

        .brand-name {
          font-size: 1rem;
          margin: 0 0 0 0.5rem;
        }
      }
    }
  `
);
