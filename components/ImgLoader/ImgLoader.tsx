import { FC } from "react";
import { Flex } from "../../styles/Global/Global.styles";

import { Loader } from "./ImgLoader.style";

type Props = {
  backgroundColor?: string;
};

const ImgLoader: FC<Props> = ({ backgroundColor }) => {
  return (
    <Loader backgroundcolor={backgroundColor}>
      <Flex justifyContent="center" alignItems="center">
        <div className="loader">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </Flex>
    </Loader>
  );
};

export default ImgLoader;
