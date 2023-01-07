// General
import styled from "styled-components";

// Variables
import { colors, fontSize, margin, padding } from "../../config/variables";

export const CustomButton = styled.a`
  display: inline-block;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const ButtonContent = styled.div`
  border: 1px solid ${colors.PRIMARY};
  padding: ${padding.PADDING_3} ${padding.PADDING_5};
  position: relative;

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
  }

  &:hover::before {
    transform-origin: 0 0;
    transform: scaleX(1);
  }

  p {
    color: ${colors.PRIMARY};
    font-weight: 700;
    margin-left: ${margin.MARGIN_3};
    font-size: ${fontSize.XS};
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
`;
