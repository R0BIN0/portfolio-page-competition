// General
import styled from "styled-components";

// Variables
import { colors, fontSize, margin, padding } from "../../config/variables";

// Types

type CardBox = {
  backgroundcolor: string;
};

type CardRight = {
  backgroundcolor: string;
};

export const CardBox = styled.div<CardBox>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  transition: transform 350ms cubic-bezier(0.7, 0, 0.15, 1) 0ms;

  position: relative;
  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
  }
`;

export const CardYear = styled.div`
  padding: 0 ${padding.PADDING_4};
  width: 135px;
  height: 40px;
  position: absolute;
  top: 0;
  left: -135px;

  p {
    color: ${colors.PRIMARY};
    height: 35px;
    font-size: ${fontSize.XXL};
    font-weight: 500;
  }

  .line {
    width: 20px;
    height: 1px;
    background-color: ${colors.PRIMARY};
  }

  @media screen and (max-width: 1250px) {
    left: 0px;
    top: -50px;
    padding: 0;
    width: 100px;
  }
`;

export const CardLeft = styled.div`
  width: 100%;
  height: 100%;
  padding: ${padding.PADDING_6};
  .card-top-title {
    color: #c8c8c8;
    font-size: ${fontSize.XS};
    font-weight: 500;
    margin-bottom: ${margin.MARGIN_1};
  }

  .card-title {
    color: #fff;
    font-size: ${fontSize.XL};
    font-weight: 700;
  }

  .technologies-title {
    font-size: ${fontSize.XS};
    margin-bottom: 0.25rem;
    color: #fff;
    font-weight: 500;
  }

  .icon-container {
    width: 16px;
    height: 16px;
    margin-right: ${margin.MARGIN_2};
    position: relative;
  }
`;

export const CardRight = styled.div<CardRight>`
  width: 100%;
  height: 100%;
  position: relative;

  .img-container {
    width: 100%;
    height: 100%;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      background-color: ${({ backgroundcolor }) => backgroundcolor};
      opacity: 0.25;
    }
  }
`;
