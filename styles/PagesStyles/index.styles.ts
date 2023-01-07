// General
import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled.div`
  @media screen and (max-width: 1250px) {
    margin-top: 6rem;
  }

  .card-separation {
    width: 100%;
    @media screen and (max-width: 1250px) {
      margin-top: 4rem;
    }
  }
`;

export const DarkBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const LittleLoader = styled(motion.div)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  width: 40px;
  height: 40px;
  background-color: #161616;
  border-radius: 1px;
  z-index: 10000;

  @media screen and (max-width: 768px) {
    top: 1.5rem;
    left: 1.5rem;
    width: 35px;
    height: 35px;
  }

  .little-loader {
    width: 15px;
    height: 15px;
    border: 2px solid white;
    border-color: white #4c505a #4c505a #4c505a;
    border-radius: 50%;
    animation: rotate 1.2s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
