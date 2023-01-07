// General
import styled from "styled-components";

// Types

type Loader = {
  backgroundcolor?: string;
};

export const Loader = styled.div<Loader>`
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundcolor }) => backgroundcolor};

  .loader {
    width: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader > div {
    background-color: white;
    height: 100%;
    width: 6px;
    margin: 0 2px;
    animation: grow 1.2s infinite ease-in-out;
    opacity: 0.1;
  }

  .loader .rect2 {
    animation-delay: -1.1s;
  }

  .loader .rect3 {
    animation-delay: -1s;
  }

  .loader .rect4 {
    animation-delay: -0.9s;
  }

  .loader .rect5 {
    animation-delay: -0.8s;
  }

  @keyframes grow {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
    }
  }
`;
