import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import {Navbar} from "../components/navbar/navbar";
import NextImage from "next/image";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rihan Gold</title>
        <meta name="description" content="Rihan-Gold" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar isLandingPage={true} />
        <ImageContainer>
          <ImageCover />
          <NextImage
            src="/images/bg_site.jpg"
            objectFit="contain"
            layout="fill"
          />
        </ImageContainer>
      </main>

      <footer></footer>
    </div>
  );
};

const ImageContainer = styled.div`
  /* Extra 20px for 10px padding on each side */
  width: 100%;
  height: 1067px;
  position: absolute;
  inset: 0px 0px auto;
  z-index: -1;
`;
const ImageCover = styled.div`
  /* Extra 20px for 10px padding on each side */
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 1067px;

  z-index: 100;
  position: absolute;
`;
export default Home;
