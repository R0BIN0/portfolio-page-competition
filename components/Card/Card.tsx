// General
import { FC, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { motion, Variants } from "framer-motion";

// Styles
import { CardBox, CardYear, CardLeft, CardRight } from "./Card.styles";
import { Flex } from "../../styles/Global/Global.styles";

// Components
import ImgLoader from "../ImgLoader/ImgLoader";

// Types

type Props = {
  id: number;
  animation: Variants;
  href: string;
  year: string;
  type: string;
  title: string;
  technologies: StaticImageData[];
  image: string;
  backgroundColor: string;
};

const Card: FC<Props> = ({
  id,
  animation,
  href,
  year,
  type,
  title,
  technologies,
  image,
  backgroundColor,
}) => {
  // ========= animations ========= //

  const [imgLoad, setImgLoad] = useState(false);

  return (
    <motion.div variants={animation}>
      <Link href={href}>
        <CardBox backgroundcolor={backgroundColor}>
          {id === 0 && (
            <CardYear>
              <Flex justifyContent="space-between" alignItems="center">
                <p>{year}</p>
                <div className="line"></div>
              </Flex>
            </CardYear>
          )}
          <CardLeft>
            <Flex
              justifyContent="space-between"
              alignItems="flex-start"
              flexFlow={true}
            >
              <div>
                <p className="card-top-title">{type}</p>
                <h2 className="card-title">{title}</h2>
              </div>
              <div>
                <p className="technologies-title">Technologies</p>
                <Flex justifyContent="flex-start" alignItems="center">
                  {technologies.map((item) => (
                    <div key={uuidv4()} className="icon-container">
                      <Image
                        src={item}
                        width={item.width}
                        height={item.height}
                        alt="Logo de technologies de développement web"
                      />
                    </div>
                  ))}
                </Flex>
              </div>
            </Flex>
          </CardLeft>
          <CardRight backgroundcolor={backgroundColor}>
            <div className="img-container">
              {imgLoad && <ImgLoader backgroundColor={backgroundColor} />}
              {image && (
                <Image
                  src={image}
                  alt="pages des différents projets"
                  layout="fill"
                  objectFit="cover"
                  quality={20}
                  onLoadingComplete={() => setImgLoad(true)}
                  loading="lazy"
                />
              )}
            </div>
          </CardRight>
        </CardBox>
      </Link>
    </motion.div>
  );
};

export default Card;
