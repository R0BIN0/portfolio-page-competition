/* eslint-disable indent */
// General
import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

// Styles
import {
  Container,
  TitleContainer,
  Flex,
  LineContainer,
  PageTransition,
  Banner,
} from "../styles/Global/Global.styles";

import {
  CardContainer,
  DarkBackground,
  LittleLoader,
} from "../styles/PagesStyles/index.styles";

// Components
import ButtonGithub from "../components/ButtonGithub/ButtonGithub";
import { MemoizedCardList } from "../components/CardList/CardList";

// Data
import TopProject from "../components/TopProject/TopProject";

// Type
import { TopProjectProps } from "../config/types";
import ImgLoader from "../components/ImgLoader/ImgLoader";

// Animations
import {
  darkBackground,
  goToMeTransition,
  loader,
  projectTransition,
} from "../animations/animations";
import FormModal from "../components/FormModal/FormModal";

const Home: FC = () => {
  const [clickedProject, setClickedProject] = useState<TopProjectProps>();

  // ========= animation and page transition ========= //

  const [goToMe, setGoToMe] = useState<boolean>(false);
  const { pathname } = useRouter();
  const transitionTime = 1;
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "all";

    setTimeout(() => {
      document.body.style.overflow = "initial";
    }, transitionTime * 1000);
  }, []);

  useEffect(() => {
    if (pathname === "/me") document.body.style.overflow = "hidden";
  }, [pathname]);

  const switchTransition = (): void => {
    setGoToMe(true);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio Robin Blanquart | Accueil</title>
      </Head>

      {/* =========== RELATIVE TO PAGE TRANSITION =========== */}

      {goToMe && (
        <>
          <motion.div
            exit={{ opacity: 0, transition: { duration: 2 } }}
          ></motion.div>

          <LittleLoader
            initial="hidden"
            animate="show"
            exit="exit"
            variants={loader}
          >
            <Flex justifyContent="center" alignItems="center">
              <motion.div className="little-loader"></motion.div>
            </Flex>
          </LittleLoader>
        </>
      )}

      <PageTransition
        initial="show"
        animate="hidden"
        exit="exit"
        variants={goToMe ? goToMeTransition : projectTransition}
      >
        <Flex justifyContent="center" alignItems="center">
          <ImgLoader />
        </Flex>
      </PageTransition>

      {/* =================================================== */}

      <LineContainer>
        <div className="line-border">
          <div className="line-absolute">
            <Flex justifyContent="center" alignItems="center">
              <p className="line-title">Work</p>
              <div className="line-arrow"></div>
            </Flex>
          </div>
        </div>

        <Container maxwidth="1024px">
          <Flex alignItems="flex-start" justifyContent="center" flexFlow={true}>
            <Banner>
              <div className="banner-top">
                <p className="uppercase-job">DEVELOPPEUR FRONT-END</p>
                <p className="uppercase-date">2020-2022</p>
              </div>

              <h1 className="uppercase-title">BLANQUART ROBIN</h1>
              <TitleContainer>
                <p className="banner-description">
                  Bonjour, je suis Robin Blanquart. Jeune développeur passionné
                  par <strong>le développement web et l’Ui/Ux Design</strong>.{" "}
                  <Link passHref href="/me">
                    <button onClick={switchTransition}>
                      En savoir plus sur moi
                    </button>
                  </Link>
                  {""} ou bien {""}
                  <button onClick={() => setFormIsOpen(true)}>
                    me contacter
                  </button>
                </p>
              </TitleContainer>
            </Banner>
          </Flex>
        </Container>

        <Container maxwidth="1024px" padding="3rem">
          <CardContainer>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexFlow={true}
              margin="4rem 0 0 0"
            >
              <MemoizedCardList
                filter="2022"
                setClickedProject={setClickedProject}
              />
              <div className="card-separation">
                <MemoizedCardList
                  filter="2021"
                  setClickedProject={setClickedProject}
                />
              </div>
            </Flex>
          </CardContainer>

          <Flex justifyContent="center" alignItems="center" margin="2rem 0">
            <ButtonGithub
              txt="Plus de projets"
              href="https://github.com/R0BIN0"
            />
          </Flex>
        </Container>
      </LineContainer>

      {clickedProject && (
        <>
          <TopProject {...clickedProject} route={true} />
          <DarkBackground
            initial="hidden"
            animate="show"
            variants={darkBackground}
          ></DarkBackground>
          <LittleLoader
            initial="hidden"
            animate="show"
            exit="exit"
            variants={loader}
          >
            <Flex justifyContent="center" alignItems="center">
              <motion.div className="little-loader"></motion.div>
            </Flex>
          </LittleLoader>
        </>
      )}

      <>
        <AnimatePresence exitBeforeEnter>
          {formIsOpen && <FormModal setFormIsOpen={setFormIsOpen} />}
        </AnimatePresence>
      </>
    </>
  );
};

export default Home;
