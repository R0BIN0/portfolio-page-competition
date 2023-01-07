import { motion } from "framer-motion";
import styled from "styled-components";
import { colors, fontFamily, fontSize, margin } from "../../config/variables";

// Types

type ModalFormProcess = {
  backgroundcolor: string;
};

export const FormModalStyle = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  .dark-background {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .form-modal-backgroud {
    width: 100%;
    height: 100%;
    .form-modal-card {
      will-change: transform;
      color: ${colors.PRIMARY};
      position: relative;
      top: 50%;
      left: 50%;
      width: 100%;
      max-width: 500px;
      /* height: 700px; */
      background-color: white;
      padding: 4rem 2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

      @media screen and (max-width: 500px) {
        height: 100%;
      }

      .form-modal-close {
        position: absolute;
        top: 25px;
        right: 25px;
      }

      h3 {
        font-size: 1.75em;
        line-height: 1.1;
        font-weight: 500;
        max-width: 350px;
        margin-bottom: ${margin.MARGIN_8};
      }

      .form-grid-container {
        display: flex;
        align-items: flex-start;
        flex-flow: column nowrap;
        width: 100%;
      }

      .inps-container {
        width: 100%;
      }

      .modal-form-send-btn {
        font-family: ${fontFamily.SANS_SERIF};
        width: 100%;
        background-color: ${colors.PRIMARY};
        color: white;
        padding: 0 2rem;
        border-radius: 5px;
        font-weight: 600;
        transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
        min-height: 52.5px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          transform: translateY(-2.5px);
          background: ${colors.PRIMARY_LIGHT};
        }
      }

      p {
        font-size: 0.75em;
        margin-top: 1.25rem;
      }
    }
  }
`;

export const InputFormStyle = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  label {
    font-size: ${fontSize.S};
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  input,
  textarea {
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    margin-bottom: 1.25rem;
    background: #f7f7f7;
    padding: 0.5rem;
    border-radius: 5px;
    font-family: ${fontFamily.SANS_SERIF};
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

export const ModalFormProcess = styled(motion.div)<ModalFormProcess>`
  position: fixed;
  top: 50px;
  right: 50px;
  padding: 1rem 2rem;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  border-radius: 5px;

  p {
    font-weight: 700;
    color: white;
    margin-right: 0.5rem;
  }
`;
