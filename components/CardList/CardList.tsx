// General
import React, { FC, memo } from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

// Variables
import { margin } from "../../config/variables";

// Styles

const CardBoxContainer = styled(motion.div)`
  width: 100%;
  height: 325px;
  margin-bottom: ${margin.MARGIN_4};
  cursor: pointer;

  @media screen and (max-width: 768px) {
    height: 400px;
    margin-bottom: ${margin.MARGIN_8};
  }
`;

// Components
import Card from "../Card/Card";

// Data
import { projectsHome } from "../../data/projects";

// Types
import { TopProjectProps } from "../../config/types";

type Props = {
  filter: string;
  // eslint-disable-next-line no-unused-vars
  setClickedProject: (obj: TopProjectProps) => void;
};

const CardList: FC<Props> = ({ filter, setClickedProject }) => {
  // ========= animation and page transition ========= //

  const ease = [0.7, 0, 0.15, 1];

  const cardBoxAnimation: Variants = {
    hidden: {
      transform: "translateY(50px) scale(1.1)",
      opacity: 0.9,
    },

    show: {
      transform: "translateY(0px) scale(1)",
      opacity: 1,

      transition: {
        duration: 0.75,
        ease: ease,
      },
    },
  };

  const cardAnimation: Variants = {
    hidden: {
      display: "none",
    },

    show: {
      display: "initial",
    },
  };

  const clickedProjectFunc = (obj: TopProjectProps): void => {
    setClickedProject(obj);
    document.body.style.pointerEvents = "none";
  };

  return (
    <>
      {projectsHome
        .filter((item) => item.year.includes(filter))
        .map((item, i) => (
          <CardBoxContainer
            initial="hidden"
            whileInView="show"
            variants={cardBoxAnimation}
            viewport={{ once: true, margin: "0px 0px 50px 0px" }}
            key={uuidv4()}
            onClick={() =>
              clickedProjectFunc({
                firstTitle: item.firstTitle,
                site: item.site,
                description: item.description,
                backgroundColor: item.backgroundColor,
                image: item.image,
              })
            }
          >
            <Card
              id={i}
              animation={cardAnimation}
              href={item.href}
              year={item.year}
              type={item.type}
              title={item.title}
              technologies={item.technologies}
              image={item.image}
              backgroundColor={item.backgroundColor}
            />
          </CardBoxContainer>
        ))}
    </>
  );
};

export const MemoizedCardList = memo(CardList);
