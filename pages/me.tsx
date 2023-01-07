// General
import React, { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

// Styles
import { PageTransition, Flex, Text } from "../styles/Global/Global.styles";
import { Grid } from "../styles/PagesStyles/me.styles";

// Components
import ImgLoader from "../components/ImgLoader/ImgLoader";
import {
  imageAnimation,
  items,
  sectionAnimationMe,
  transition,
} from "../animations/animations";

const me = () => {
  // ========= animation and page transition ========= //

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      document.body.style.overflow = "initial";
    }, transitionTime * 1000);
  }, []);

  const transitionTime = 1;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio Robin Blanquart | Qui suis-je</title>
      </Head>

      {/* =========== RELATIVE TO PAGE TRANSITION =========== */}

      <motion.div
        exit={{ opacity: 0, transition: { duration: 2 } }}
      ></motion.div>

      <PageTransition
        initial="show"
        animate="hidden"
        exit="exit"
        variants={transition}
      >
        <Flex justifyContent="center" alignItems="center">
          <ImgLoader />
        </Flex>
      </PageTransition>

      {/* =================================================== */}

      <Grid>
        <div className="img-container">
          <motion.div
            initial="hidden"
            animate="show"
            variants={imageAnimation}
            className="img-animation"
          >
            <Image
              src="https://res.cloudinary.com/e-tech-test/image/upload/v1654633421/IMG_0137_1-min_xjgsog.jpg"
              alt="photo de Robin Blanquart"
              layout="fill"
              objectFit="cover"
              quality={50}
              priority
            />
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={sectionAnimationMe}
          className="grid-content"
        >
          <Text variants={items} maxwidth="600px" margin="0 0 2rem 0">
            Je m&apos;appelle <strong>Robin Blanquart</strong>, j&apos;ai 18 ans
            et j&apos;habite actuellement en Picardie, plus précisement dans
            l’Aisne (02). En plus d’être passionné de programmation,{" "}
            <strong>
              j&apos;affectionne particulièrement l&apos;apprentissage du Design
              dans sa globalité
            </strong>{" "}
            (Ui / Ux, la typographie, le graphisme), je suis comme beaucoup un
            grand adepte de jeux vidéo, mais avant tout de{" "}
            <strong>“Esport”</strong>, la compétition sportive en ligne
            notamment sur le jeu “CSGO” ainsi qu’un <i>peu</i>{" "}
            <strong>d’Histoire</strong> 🤓.
          </Text>
          <Text variants={items} maxwidth="600px" margin="0 0 3rem 0">
            Je m’étais initialement destiné à de longues études,{" "}
            <strong>
              mon choix s’est momentanément tourné vers{" "}
              <span>l’autodidaxie</span>{" "}
            </strong>{" "}
            lors de mon année de Terminale{" "}
            <strong>
              en raison de nombreux efforts fournis sans avoir de réels intérêts
              ni but précis
            </strong>
            . C’est alors que peu à peu je me suis désisté du milieu scolaire et
            j’ai ainsi concentré toute mon énergie dans{" "}
            <strong>ce que j’aimais le plus, la programmation</strong>. C’est en
            ayant comme appât la connaissance, que jour et nuit, je développe
            sans être limité par un programme uniforme et désuet.
          </Text>
          <motion.div variants={items} className="grid-contact-container">
            <Flex
              justifyContent="center"
              alignItems="flex-start"
              flexFlow={true}
            >
              <a
                className="grid-contact-link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/R0BIN0"
              >
                Github
              </a>
              <a
                className="grid-contact-link"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/robin-blanquart-44107122b/"
              >
                Linkedin
              </a>
              <Flex justifyContent="center" alignItems="center">
                <span>Mail :</span>
                <p>rob.blanquart02100@gmail.com</p>
              </Flex>
              <a
                className="me-dowload-btn"
                href="/CV_BLANQUART_ROBIN_portfolio.pdf"
                download="CV_ROBIN_BLANQUART"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.666667 14.6667H15.3333C15.5101 14.6667 15.6797 14.7369 15.8047 14.8619C15.9298 14.987 16 15.1565 16 15.3333C16 15.5101 15.9298 15.6797 15.8047 15.8047C15.6797 15.9298 15.5101 16 15.3333 16H0.666667C0.489856 16 0.320287 15.9298 0.195262 15.8047C0.070238 15.6797 0 15.5101 0 15.3333C0 15.1565 0.070238 14.987 0.195262 14.8619C0.320287 14.7369 0.489856 14.6667 0.666667 14.6667ZM8.66667 9.38133L13.5893 4.45733L14.532 5.4L7.93333 12L1.33333 5.4L2.276 4.45733L7.33333 9.51467V0H8.66667V9.38133Z" />
                </svg>
                <p>Télécharger mon CV</p>
              </a>
            </Flex>
          </motion.div>
        </motion.div>
      </Grid>
    </>
  );
};

export default me;
