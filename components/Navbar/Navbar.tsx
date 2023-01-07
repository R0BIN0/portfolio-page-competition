// General
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

// Styles
import { Nav, IconContainer } from "./Navbar.styles";
import { Flex, Container } from "../../styles/Global/Global.styles";

// Images
import Logo from "../../assets/images/Logo.png";

const Navbar: FC = () => {
  return (
    <Nav>
      <Container maxwidth="1024px">
        <Flex justifyContent="space-between" alignItems="center">
          {/* ================================== NAV LEFT ================================== */}

          <div>
            <Link href={"/"}>
              <a style={{ position: "relative" }}>
                <Image
                  src={Logo}
                  width="40px"
                  height="40px"
                  alt="logo de Robin Blanquart"
                />
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    opacity: 0,
                  }}
                >
                  Logo de Robin Blanquart
                </p>
              </a>
            </Link>
          </div>

          {/* ================================== NAV RIGHT ================================== */}

          <div>
            <Link href="https://github.com/R0BIN0">
              <a style={{ position: "relative" }} target="_blank">
                <IconContainer aria-label="Bouton Github de Robin">
                  <Flex justifyContent="center" alignItems="center">
                    <svg
                      viewBox="0 0 196 185"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M98 0C43.855 0 0 42.4408 0 94.8397C0 136.806 28.0525 172.253 67.0075 184.819C71.9075 185.649 73.745 182.803 73.745 180.314C73.745 178.061 73.6225 170.593 73.6225 162.65C49 167.036 42.63 156.841 40.67 151.506C39.5675 148.78 34.79 140.363 30.625 138.11C27.195 136.332 22.295 131.946 30.5025 131.827C38.22 131.709 43.7325 138.703 45.57 141.548C54.39 155.893 68.4775 151.862 74.1125 149.372C74.97 143.208 77.5425 139.059 80.36 136.688C58.555 134.317 35.77 126.137 35.77 89.8606C35.77 79.5468 39.5675 71.0112 45.815 64.3724C44.835 62.0014 41.405 52.2804 46.795 39.2399C46.795 39.2399 55.0025 36.7504 73.745 48.961C81.585 46.8271 89.915 45.7601 98.245 45.7601C106.575 45.7601 114.905 46.8271 122.745 48.961C141.488 36.6318 149.695 39.2399 149.695 39.2399C155.085 52.2804 151.655 62.0014 150.675 64.3724C156.923 71.0112 160.72 79.4282 160.72 89.8606C160.72 126.255 137.813 134.317 116.008 136.688C119.56 139.651 122.623 145.342 122.623 154.233C122.623 166.918 122.5 177.113 122.5 180.314C122.5 182.803 124.338 185.767 129.238 184.819C148.692 178.462 165.597 166.362 177.573 150.221C189.55 134.08 195.994 114.711 196 94.8397C196 42.4408 152.145 0 98 0Z" />
                    </svg>
                  </Flex>
                </IconContainer>
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    opacity: 0,
                  }}
                >
                  Github de Robin Blanquart
                </p>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/robin-blanquart-44107122b/">
              <a style={{ position: "relative" }} target="_blank">
                <IconContainer aria-label="Bouton Github de Robin">
                  <Flex justifyContent="center" alignItems="center">
                    <svg
                      viewBox="0 0 195 184"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M44.3066 59.7875V184H2.41211V59.7875H44.3066ZM46.9727 21.4332C47.0573 27.5332 44.9202 32.6303 40.5615 36.7248C36.2028 40.8193 30.4688 42.8665 23.3594 42.8665H23.1055C16.1654 42.8665 10.5794 40.8193 6.34766 36.7248C2.11589 32.6303 0 27.5332 0 21.4332C0 15.2498 2.17936 10.1317 6.53809 6.07902C10.8968 2.02634 16.5885 0 23.6133 0C30.638 0 36.2663 2.02634 40.498 6.07902C44.7298 10.1317 46.888 15.2498 46.9727 21.4332ZM195 112.807V184H153.232V117.569C153.232 108.796 151.519 101.923 148.091 96.951C144.663 91.9791 139.31 89.4932 132.031 89.4932C126.699 89.4932 122.235 90.9346 118.638 93.8174C115.041 96.7003 112.354 100.272 110.576 104.534C109.645 107.041 109.18 110.425 109.18 114.687V184H67.4121C67.5814 150.659 67.666 123.628 67.666 102.905C67.666 82.1817 67.6237 69.8147 67.5391 65.8038L67.4121 59.7875H109.18V77.8365H108.926C110.618 75.1626 112.354 72.8229 114.131 70.8174C115.908 68.812 118.299 66.6394 121.304 64.2997C124.308 61.96 127.99 60.1426 132.349 58.8474C136.707 57.5522 141.553 56.9046 146.885 56.9046C161.357 56.9046 172.995 61.6467 181.797 71.1308C190.599 80.6149 195 94.5068 195 112.807Z" />
                    </svg>
                  </Flex>
                </IconContainer>
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    opacity: 0,
                  }}
                >
                  Linkedin de Robin Blanquart
                </p>
              </a>
            </Link>
          </div>
        </Flex>
      </Container>
    </Nav>
  );
};

export default Navbar;
