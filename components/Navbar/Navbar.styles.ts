// General
import styled from "styled-components";

// Variables
import { colors, padding } from "../../config/variables";

// =================================== NAV ===================================

export const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  background-color: ${colors.SECONDARY};

  @media screen and (max-width: 500px) {
    height: 3.5rem;
  }
`;

// =================================== ICON CONTAINER ===================================

export const IconContainer = styled.button`
  padding: ${padding.PADDING_2};
  border-radius: 50%;

  svg {
    width: 18px;
    fill: #ababab;
  }

  &:hover path {
    fill: #393d46;
  }

  &:active {
    animation: Bubble 0.15s forwards ease-in;
  }

  @keyframes Bubble {
    from {
      background-color: #e6e6e6;
    }
    to {
      background: transparent;
    }
  }
`;
