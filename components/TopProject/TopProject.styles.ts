// General
import styled from "styled-components";

// Variables
import { colors, fontSize } from "../../config/variables";

// Types

export const ButtonBack = styled.a`
  background-color: white;
  position: fixed;
  left: 6rem;
  top: 6rem;
  font-size: ${fontSize.LG};
  font-weight: 500;
  color: ${colors.PRIMARY};
  z-index: 1000;
  line-height: 0.8;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 9px;
    margin-right: 0.75rem;
    transform: rotate(180deg);
  }

  @media screen and (max-width: 1350px) {
    left: 3rem;
    top: 2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: ${fontSize.MD};

    svg {
      width: 7px;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 500px) {
    left: 1.5rem;
    top: 1.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 800px;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 500px;
  }

  @media screen and (max-width: 500px) {
    height: 400px;
  }
`;
