// General
import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Styles
import {
  LineContainer,
  Flex,
  Container,
  TitleContainer,
  Title,
  Text,
} from "../../styles/Global/Global.styles";
import { ButtonBack, ImageContainer } from "./TopProject.styles";

// Components
import ButtonLink from "../ButtonLink/ButtonLink";
import ImgLoader from "../ImgLoader/ImgLoader";

// Types
import { TopProjectProps } from "../../config/types";

const TopProject: FC<TopProjectProps> = ({
  firstTitle,
  site,
  description,
  image,
  backgroundColor,
  route,
}) => {
  const ease = [0.7, 0, 0.15, 1];

  const animation: Variants = {
    ...(route && {
      hidden: {
        position: "fixed",
        top: 0,
        left: 0,
        transform: "translateY(100vh)",
      },
      exit: {
        transform: "translateY(0vh)",
        transition: {
          duration: 1.5,
          ease: ease,
        },
      },
    }),
  };

  const [imgLoad, setImgLoad] = useState(false);

  return (
    <motion.div
      initial="hidden"
      exit="exit"
      variants={animation}
      style={{
        width: "100%",
        backgroundColor: "#FFF",
        zIndex: 1000,
        marginBottom: "6rem",
      }}
    >
      <LineContainer>
        <div className="line-border">
          <div className="line-absolute">
            <Flex justifyContent="center" alignItems="center">
              <p className="line-title">Project</p>
              <div className="line-arrow"></div>
            </Flex>
          </div>
        </div>

        <Link href="/" passHref>
          <ButtonBack>
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 15L8 8L1 1"
                stroke="#393D46"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Retour</p>
          </ButtonBack>
        </Link>

        <Container maxwidth="1024px" padding="6rem">
          <TitleContainer>
            <Title>{firstTitle}</Title>
            <ButtonLink external={true} txt="Visiter le site" href={site} />
          </TitleContainer>
          <Text margin="2.5rem 0 0 0" maxwidth="525px">
            {description}
          </Text>
        </Container>
      </LineContainer>
      <ImageContainer>
        {!imgLoad && <ImgLoader backgroundColor={backgroundColor} />}
        <Image
          src={image}
          alt="pages des différents projets"
          layout="fill"
          objectFit="cover"
          quality={50}
          priority
          onLoadingComplete={() => setImgLoad(true)}
        />
      </ImageContainer>
    </motion.div>
  );
};

export default TopProject;
