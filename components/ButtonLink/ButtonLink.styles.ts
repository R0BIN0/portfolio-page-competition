// General
import styled from "styled-components";

// Variables
import { colors, fontSize, margin } from "../../config/variables";

export const CustomLink = styled.a`
  height: 20px;
  color: ${colors.CTA};
  font-size: ${fontSize.XS};
  font-weight: 600;
  transition: all 500ms cubic-bezier(1, 0, 0, 1) 0ms;

  &:hover {
    transform: translateX(10px);
  }

  .link-arrow {
    margin-left: ${margin.MARGIN_3};
    width: 45px;
    height: 2px;
    transition: all 500ms cubic-bezier(1, 0, 0, 1) 0ms;
    background-color: ${colors.CTA};
  }

  .link-arrow::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 2px;
    background-color: ${colors.CTA};
    right: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    border-radius: 30px;
  }

  .link-arrow::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 2px;
    background-color: ${colors.CTA};
    right: 0;
    transform: rotate(-45deg);
    transform-origin: 100% 0%;
    border-radius: 30px;
  }

  &:hover .link-arrow {
    width: 65px;
    transform: translateX(10px);
  }
`;
