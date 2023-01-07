// General
import styled from "styled-components";
import { motion } from "framer-motion";

// Variables
import { colors, margin } from "../../config/variables";

// Types

type BackgroundVideo = {
  backgroundcolor: string;
};

export const TextContainer = styled.div`
  width: 100%;
  margin: 2rem 0 4rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media screen and (max-width: 500px) {
    margin: 2rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column nowrap;
  }
`;

export const ButtonContainer = styled(motion.div)`
  max-width: 320px;
  margin-top: ${margin.MARGIN_7};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    max-width: none;
    width: 100%;
    height: 90px;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

export const IconContainer = styled(motion.div)`
  width: 27.5px;
  margin-right: ${margin.MARGIN_4};
`;

export const BackgroundVideo = styled(motion.div)<BackgroundVideo>`
  margin-top: 6rem;
  width: 100%;
  height: 700px;
  padding: 2rem;
  background-color: ${({ backgroundcolor }) => backgroundcolor};

  video {
    width: 100%;
    max-width: 800px;
    max-height: 500px;
  }

  @media screen and (max-width: 768px) {
    height: 400px;

    video {
      max-height: 300px;
    }
  }

  @media screen and (max-width: 500px) {
    height: 300px;
    display: none;
  }
`;

export const LinkProject = styled.div`
  margin: 6rem 0;
  a {
    color: ${colors.CTA};
    font-weight: 500;
    text-decoration: underline;
  }
`;
