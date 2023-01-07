// Images

import PhotoShop from "../assets/images/PS.png";
import React from "../assets/images/React.png";
import Redux from "../assets/images/Redux.png";
import Next from "../assets/images/Next.png";
import JavaScript from "../assets/images/JS.png";
import TypeScript from "../assets/images/TS.png";
import StyledComponent from "../assets/images/StyledComponent.png";
import FramerMotion from "../assets/images/FramerMotion.png";
import Node from "../assets/images/Node.png";
import Mongo from "../assets/images/Mongo.png";
import Prettier from "../assets/images/Prettier.png";
import ESLint from "../assets/images/ESLint.png";
import Husky from "../assets/images/Husky.png";
import AndroidStudio from "../assets/images/AndroidStudio.png";

// Types
import { Project, ProjectHome } from "../config/types";

export const projects: Project[] = [
  {
    title: "Portfolio",
    href: "portfolio",
    firstTitle:
      "Portfolio.. ception ! Il regroupe mes plus gros projets permettant d’expliquer et de faire comprendre le rôle que j’ai joué à travers mes différentes créations.",
    site: "",
    github: "https://github.com/R0BIN0/Portfolio-2022",
    description:
      "Conserver un design simple et le plus ergonomique possible, le maintien global des performances et un apprentissage approfondi des notions de Next.js font partie de la longue liste des objectifs de ce projet.",
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1654680894/Frame_33_solot0.png",
    technologies: [
      Next,
      TypeScript,
      StyledComponent,
      FramerMotion,
      Prettier,
      ESLint,
      Husky,
    ],
    secondTitle:
      "Assimilation, compréhension, remise en question, sont les nombreux comportements que j’ai développé à travers les projets que je vous présente dans mon portfolio et celui-ci en fait partie !",
    role: "Ma tâche primaire ici est avant tout de captiver l’utilisateur en proposant une Ui / Ux la plus agréable possible malgré des difficultés en terme de performance afin de mettre en avant mes différents projets.",
    process:
      "Faire des projets oui, mais si on peut les mettre en avant c’est mieux, c’est exactement dans ce but précis que j’entame mon premier portfolio. Ayant de maigres connaissances avec Next.js j’ai décidé d’en apprendre un peu plus dessus, notamment son environnement propice à l’optimisation qui est un sujet essentiel de mon projet, car très gourmand (dû à l’utilisation d’images assez grosses ou encore de vidéos) Les performances sont d’ailleurs à l’origine des principales difficultés de ce projet. En dépit de nombreux efforts fournis (optimisation des images / “lazyLoading”). cela m’aura permis d’apprendre à disséquer les éléments de la console Google. Après la réalisation en brut de la maquette initiale, j’ai décidé d’intégrer des animations grâce à “Framer-motion” une librairie d’animation idéale pour l’environnement de React. Une intégration facilitée par une expérience précédente avec cette librairie (projet : “Panier”). C’est alors que mon portfolio 2022 voit le jour avec une hâte sans précédent de voir mon évolution pour mon portfolio 2023 !",
    video:
      "https://res.cloudinary.com/e-tech-test/video/upload/v1654681870/PortfolioPortfolioProject_sxujov.mp4",
    backgroundColor: "#422727",
  },
  {
    title: "Mobile App",
    href: "mobile_app",
    firstTitle:
      "Movie App est une application IOS et Android de films avec système de recherche et d’ajout aux favoris avec l’utilisation de l’API “The Movie DataBase“ (TMDB) !",
    site: "https://expo.dev/@robino02100/mobile-movie-app",
    github: "https://github.com/R0BIN0/Mobile-Movie-app",
    description:
      "J’avais en ligne de mire d’apprendre les rudiments du développement mobile ainsi que ses propres codes. C'est en me plongeant dedans que j'ai pu enrichir mes compétences et ainsi avoir une vision plus lucide du développement mobile.",
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1654626274/Frame_32-min_chxn2z.jpg",
    technologies: [React, TypeScript, Prettier, ESLint, AndroidStudio],
    secondTitle:
      "“L'important est de ne jamais cesser de poser des questions. Ne perdez jamais une sainte curiosité” une citation d’Albert Einstein qui prend tout son sens ici...",
    role: "Mon principal but ici était de développer une application mobile en partant de 0 (ou presque) avec React Native, technologie qui permet de développer des applications IOS et Android grâce à l’environnement React. Il fallait alors apporter un design propre aux appareils mobiles et proposer une application pleinement compatible des 2 systèmes d’exploitation.",
    process:
      "C’est avec un but précis et une inéxpérience en terme de développement mobile que ma curiosité est invitée à en apprendre davantage sur ce dernier. Après avoir pris connaissance des fondamentaux de React Native. Ce n’est pas sans mal que je mets en place un environnement de développement mobile via “Android Studio” et “Expo” afin de créer un téléphone virtuel puis de créer une base de travail solide grâce à Expo. Après quelques mini-projets afin d’acquérir de l’expérience ainsi que des habitudes, je décide enfin de créer ma première application avec Typescript pour renforcer mon code et prévenir des éventuels problèmes. Hormis le “styling” des éléments qui ressemble à la syntaxe de “Styled Component”, ce projet m’a posé bien des soucis, premièrement avec l’importation de polices d’écritures qui de prime-abord  n’est pas très limpide. Vient ensuite l’utilisation du “localStorage” qui est quelque peu différent de celui du web (utilisation de “AsyncStorage” de la communauté React Native). Dernièrement il fallait prévenir les failles possibles de l’API (TMDB), comme le manque d’image de fond ou d’autres valeurs, Typescript ayant été très utile ici. Finalement le projet a été posté sur le store d’Expo donnant un résultat assez agréable visuellement avec un système d’ajout aux favoris et de recherches avancées.  ",
    video:
      "https://res.cloudinary.com/e-tech-test/video/upload/v1654679049/PortfolioMobileApp_jpdvc5.mp4",
    backgroundColor: "#151129",
  },

  {
    title: "Panier",
    href: "panier",
    firstTitle:
      "Le projet “Panier” est un site de montres de luxe ayant les fonctionnalités d’un simple système de panier, certes mais avec style ! ",
    site: "https://r0bin0.github.io/Cart-FramerMotion/#/",
    github: "https://github.com/R0BIN0/Cart-FramerMotion",
    description:
      "Le principal objectif de ce projet était d’allier la technique à la créativité, pour ce faire j’ai choisi un projet simple d’apparence mais qui cachait quelques difficultés comme la gestion des performances dû à l’utilisation des states avec une librairie d’animation.",
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1653561163/Frame_25_2_vine9f.png",
    technologies: [React, JavaScript, FramerMotion, Prettier, ESLint],
    secondTitle:
      "Un projet simple d’apparence mais qui n’en n’a que l’air, en effet l’utilisation d’une librairie d’animation avec React à su me poser quelques obstacles",
    role: "Mon rôle ici était de proposer un design original pour un site de produits de luxe, et ainsi coordonner parfaitement le côté technique d’un panier (ajout, modification de mon panier...) en temps réel, et la partie visuelle qui devait rester attrayante et à minima intuitive.  ",
    process:
      "Un “mini projet” ne se soustrait pas à la mise en place d’un processus stricte, c’est pour cette raison que j’ai décidé pour ce projet de me plonger davantage dans les “bonnes pratiques” de développement, après quelques recherches je mets en place “Prettier” ainsi que “ESLint” afin de converser un style de code linéaire et gagner en propreté de code. De plus en amont du projet j’ai fait beaucoup de recherches sur les “spread operators” ainsi que la notion de “Mémoïsation” en React. Mes armes faites j’engage le projet, sans réels problèmes jusqu’à la mise en place de la librairie d’animation “Framer Motion” qui en raison des “render(s)” générés par une application React à chaque changement de state ont complexifié le rendu de mes animations (ex: animations qui se répètent). Après plusieurs recherches ainsi qu’approfondissement de la documentation de framer-motion, les bugs n’étaient devenus que de mauvais souvenirs, laissant place à un projet visuellement appréciable.",
    video:
      "https://res.cloudinary.com/e-tech-test/video/upload/v1653576999/PortfolioPanier_trnhre.mp4",
    backgroundColor: "#3C2C05",
  },

  {
    title: "E-Tech",
    href: "e_tech",
    firstTitle:
      "E-Tech est un site e-commerce fictif de ventes de produits et périphériques d’ordinateur avec la plupart des différentes fonctionnalités présentes sur un site de vente en ligne.",
    site: "https://frozen-plains-30973.herokuapp.com/",
    github: "",
    description:
      "Le but de ce projet a été d'apprendre à manipuler les différents aspects de la programmation web : faire interagir le Front-end avec le Back-end et une base de données mais également d'améliorer mon autonomie face aux difficultés rencontrées.",
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1653571296/Frame_24_hbvvav.png",
    technologies: [
      PhotoShop,
      React,
      JavaScript,
      Redux,
      FramerMotion,
      Node,
      Mongo,
    ],
    secondTitle:
      "E-Tech représentait un énorme défi pour moi, n’ayant aucune notion de développement “back-end” Je me lançais un peu dans l’inconnu.",
    role: "Ma principale tâche ici était de savoir mettre en relation une base de données, du back-end et du front-end ainsi que de proposer une Ui/Ux reprennant les codes des sites e-commerce afin de ne pas perdre l’utilisateur.",
    process:
      "Le projet débute en Mai 2021 des suites de mon apprentissage des fondamentaux de React. Afin de structurer mon projet j’ai décidé de développer la maquette sur Figma en amont en me basant sur des sites e-commerce afin de conserver les codes propres à ces sites (Amazon, Cdiscount, BackMarket).  Toujours dans l’idée de conserver une structure du projet correcte, je décide de réaliser toute la partie front-end avec des valeurs brutes. Aucune grosse difficulté rencontrée. Néanmoins la partie Back-end a été un gros challenge pour moi car j’ai dû apprendre en parallèle de mon projet énormément de notions liées au développement back-end et de sécurité (SQL Injection) ainsi que Node / Express / MongoDB. C’est ici que j’ai développé des réflexes pour faire face aux différentes difficultés comme la lecture de la documentation, Stack Overflow, Youtube. C’est après 4 longs mois de bataille que j’arrive à sortir ce projet.",
    video:
      "https://res.cloudinary.com/e-tech-test/video/upload/v1653573235/PortfolioE_tech_odrwpt.mp4",
    backgroundColor: "#393D46",
  },
];

export const projectsHome: ProjectHome[] = [
  {
    href: "portfolio",
    year: "2022",
    type: "Site web",
    title: "Portfolio",
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1654680894/Frame_33_solot0.png",
    technologies: [
      Next,
      TypeScript,
      StyledComponent,
      FramerMotion,
      Prettier,
      ESLint,
      Husky,
    ],
    backgroundColor: "#422727",
    firstTitle:
      "Portfolio.. ception ! Il regroupe mes plus gros projets permettant d’expliquer et de faire comprendre le rôle que j’ai joué à travers mes différentes créations.",
    site: "",
    description:
      "Conserver un design simple et le plus ergonomique possible, le maintien global des performances et un apprentissage approfondi des notions de Next.js font partie de la longue liste des objectifs de ce projet.",
  },
  {
    href: "mobile_app",
    year: "2022",
    type: "Application mobile",
    title: "Movie App",
    technologies: [React, TypeScript, Prettier, ESLint, AndroidStudio],
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1654626274/Frame_32-min_chxn2z.jpg",
    backgroundColor: "#151129",
    firstTitle:
      "Movie App est une application IOS et Android de films avec système de recherche et d’ajout aux favoris avec l’utilisation de l’API “The Movie DataBase“ (TMDB) !",
    site: "https://expo.dev/@robino02100/mobile-movie-app",
    description:
      "J’avais en ligne de mire d’apprendre les rudiments du développement mobile ainsi que ses propres codes. C'est en me plongeant dedans que j'ai pu enrichir mes compétences et ainsi avoir une vision plus lucide du développement mobile.",
  },
  {
    href: "panier",
    year: "2022",
    type: "Mini projet",
    title: "Panier",
    technologies: [React, JavaScript, FramerMotion, Prettier, ESLint],
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1653561163/Frame_25_2_vine9f.png",
    backgroundColor: "#3C2C05",
    firstTitle:
      "Le projet “Panier” est un site de montres de luxe ayant les fonctionnalités d’un simple système de panier, certes mais avec style ! ",
    site: "https://r0bin0.github.io/Cart-FramerMotion/#/",
    description:
      "Le principal objectif de ce projet était d’allier la technique à la créativité, pour ce faire j’ai choisi un projet simple d’apparence mais qui cachait quelques difficultés comme la gestion des performances dû à l’utilisation des states avec une librairie d’animation.",
  },
  {
    href: "e_tech",
    year: "2021",
    type: "Site e-commerce",
    title: "E-tech",
    image:
      "https://res.cloudinary.com/e-tech-test/image/upload/v1653571296/Frame_24_hbvvav.png",
    technologies: [
      PhotoShop,
      React,
      JavaScript,
      Redux,
      FramerMotion,
      Node,
      Mongo,
    ],
    backgroundColor: "#393D46",
    firstTitle:
      "E-Tech est un site e-commerce fictif de ventes de produits et périphériques d’ordinateur avec la plupart des différentes fonctionnalités présentes sur un site de vente en ligne.",
    site: "https://frozen-plains-30973.herokuapp.com/",
    description:
      "Le but de ce projet a été d'apprendre à manipuler les différents aspects de la programmation web : faire interagir le Front-end avec le Back-end et une base de données mais également d'améliorer mon autonomie face aux difficultés rencontrées.",
  },
];

export default projects;
