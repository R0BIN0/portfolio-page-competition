// General
import { FC, useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// Styles
import {
  Container,
  Flex,
  PageTransition,
  Text,
  TextTitle,
  Title,
  TitleContainer,
} from "../styles/Global/Global.styles";
import {
  TextContainer,
  ButtonContainer,
  BackgroundVideo,
  LinkProject,
} from "../styles/PagesStyles/project.styles";
import { IconContainer } from "../styles/PagesStyles/project.styles";

// Components
import TopProject from "../components/TopProject/TopProject";
import ButtonGithub from "../components/ButtonGithub/ButtonGithub";
import ButtonLink from "../components/ButtonLink/ButtonLink";
import ImgLoader from "../components/ImgLoader/ImgLoader";

// Data
import projects from "../data/projects";

// Types
import { Project } from "../config/types";
import Head from "next/head";
import { animation, sectionAnimationProject } from "../animations/animations";

type Props = {
  obj: Project;
};

const project: FC<Props> = ({ obj }) => {
  // ========= animation and page transition ========= //

  useEffect(() => {
    document.body.style.pointerEvents = "all";
  }, []);

  const { pathname } = useRouter();
  const transitionTime = 2;

  useEffect(() => {
    if (pathname !== "/[project]") document.body.style.overflow = "hidden";
  }, [pathname]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio Robin Blanquart | {obj.title}</title>
      </Head>

      {/* =========== RELATIVE TO PAGE TRANSITION =========== */}

      <motion.div
        exit={{ opacity: 0, transition: { duration: transitionTime } }}
      ></motion.div>
      <PageTransition initial="hidden" exit="exit" variants={animation}>
        <Flex justifyContent="center" alignItems="center">
          <ImgLoader />
        </Flex>
      </PageTransition>

      {/* =================================================== */}

      <TopProject
        firstTitle={obj.firstTitle}
        site={obj.site}
        description={obj.description}
        image={obj.image}
        backgroundColor={obj.backgroundColor}
      />
      <Container maxwidth="1024px">
        <TitleContainer>
          <Title
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={sectionAnimationProject}
          >
            {obj.secondTitle}
          </Title>
        </TitleContainer>
        <TextContainer>
          <div>
            <TextTitle
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={sectionAnimationProject}
            >
              Mon rôle
            </TextTitle>
            <Text
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={sectionAnimationProject}
            >
              {obj.role}
            </Text>

            <ButtonContainer
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={sectionAnimationProject}
            >
              {obj.github && (
                <ButtonGithub txt="Code source" href={obj.github} />
              )}
              <ButtonLink
                external={true}
                txt="Visiter le site"
                href={obj.site}
              />
            </ButtonContainer>
          </div>
          <div>
            <TextTitle
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={sectionAnimationProject}
            >
              Déroulement
            </TextTitle>
            <Text
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={sectionAnimationProject}
            >
              {obj.process}
            </Text>
          </div>
        </TextContainer>
        <TextTitle
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnimationProject}
        >
          Technologies
        </TextTitle>
        <Flex justifyContent="flex-start" alignItems="center">
          {obj.technologies.map((item, i) => (
            <IconContainer
              initial="hidden"
              whileInView={{
                transform: "translateY(0px)",
                opacity: 1,
                transition: {
                  delay: i * 0.075,
                  duration: 0.5,
                  ease: [1, 0, 0, 1],
                },
              }}
              viewport={{ once: true }}
              variants={sectionAnimationProject}
              key={uuidv4()}
            >
              <Image
                src={item}
                width={item.width}
                height={item.height}
                alt="Logo de technologies de développement web"
              />
            </IconContainer>
          ))}
        </Flex>
      </Container>
      <Container maxwidth="1500px">
        <BackgroundVideo
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnimationProject}
          backgroundcolor={obj.backgroundColor}
        >
          <Flex justifyContent="center" alignItems="center">
            <video autoPlay muted loop>
              <source type="video/mp4" src={obj.video} />
            </video>
          </Flex>
        </BackgroundVideo>
        <Flex justifyContent="center" alignItems="center">
          <LinkProject>
            <Link href={obj.site}>
              <a target="_blank">Visiter le site</a>
            </Link>
          </LinkProject>
        </Flex>
      </Container>
    </>
  );
};

export default project;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Project[] = projects;

  const paths = data.map((item) => ({
    params: { project: String(item.href) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.project;
  const data: Project[] = projects;
  const index: number = data.findIndex((item) => item.href === id);
  const obj = projects[index];

  return {
    props: { obj },
  };
};
