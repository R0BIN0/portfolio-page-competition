// General
import styled from "styled-components";

// Variables
import { colors, fontFamily, fontSize, margin } from "../../config/variables";

export const Grid = styled.section`
  width: 100%;
  height: calc(100vh - 4rem);
  min-height: 700px;
  display: grid;
  grid-template-columns: 35% 65%;

  .img-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .img-animation {
    width: 100%;
    height: 100%;
  }

  .grid-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column nowrap;
    padding: 0 6rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 75%;
      height: 100%;
      border-right: 2px solid ${colors.SECONDARY};
      z-index: -1;
    }
  }

  .grid-contact-container {
    width: 100%;
  }

  .grid-contact-link {
    color: ${colors.CTA};
    text-decoration: underline;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: ${fontSize.S};
  }

  .grid-contact-container span,
  p {
    color: ${colors.PRIMARY};
    font-size: ${fontSize.S};
  }

  .grid-contact-container span {
    font-weight: 700;
  }

  .grid-contact-container p {
    font-weight: 500;
    margin-left: 0.25rem;
  }

  .me-dowload-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    font-family: ${fontFamily.SANS_SERIF};
    padding: 1rem;
    border: 1px solid ${colors.PRIMARY};
    position: relative;
    text-decoration: none;
    font-size: ${fontSize.S};

    &::before {
      content: "";
      position: absolute;
      background: ${colors.PRIMARY};
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0;
      transform-origin: 100% 0;
      transform: scaleX(0);
      transition: transform 400ms cubic-bezier(1, 0, 0, 1) 0ms;
      z-index: -1;
    }

    &:hover::before {
      transform-origin: 0 0;
      transform: scaleX(1);
    }

    & p {
      color: ${colors.PRIMARY};
      font-weight: 700;
      margin-left: ${margin.MARGIN_3};
      font-size: ${fontSize.MD};
      transition: color 400ms cubic-bezier(1, 0, 0, 1) 0ms;
    }

    &:hover p {
      color: white;
    }

    svg {
      fill: ${colors.PRIMARY};
      width: 20px;
      transition: fill 400ms cubic-bezier(1, 0, 0, 1) 0ms;
    }

    &:hover svg {
      fill: white;
    }
  }

  @media screen and (max-width: 1250px) {
    grid-template-columns: 45% 55%;
    .grid-content {
      padding: 0 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    height: initial;
    grid-template-columns: none;
    grid-template-rows: repeat(2, max-content);

    .grid-content {
      padding: 2rem;

      &::after {
        width: 85%;
      }
    }

    .img-container {
      width: 100%;
      height: 550px;
      position: relative;
    }
  }

  @media screen and (max-width: 500px) {
    height: 3.5rem;

    .img-container {
      width: 100%;
      height: 400px;
      position: relative;
    }

    .me-dowload-btn {
      width: 100%;
    }
  }
`;
