import {Navbar} from "@components/navbar/navbar";
import {mediaQueries} from "@styles/theme/theme";
import {Flex, VStack} from "@utils/utils";
import styled from "styled-components";
import React, {useState} from "react";

interface Props {
  children: React.ReactNode;
}
export const Layout: React.FC<Props> = ({children}) => {
  const [changeTitle, setChangeTitle] = useState("");
  // useAuthenticated();

  // const mdUp = useMdUp();

  return (
    <>
      {/* <Head
          title={
            changeTitle === "session"
              ? "مدیریت نشست ها | تترلند"
              : changeTitle === "toman"
                ? "کیف پول تومانی | تترلند"
                : "کیف پول تتری | تترلند"
          }
        />*/}
      <Navbar isLandingPage={false} />

      <Container>{children}</Container>
    </>
  );
};

const Container = styled(Flex)`
  width: 100%;
  max-width: 1440px;
  height: calc(100% - 68px);
  margin: 0px auto 40px auto;

  padding: 12px 120px 0;

  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  ${mediaQueries.lgDown} {
    padding: 20px 10px 0;
    // padding-block: 40px 20px;
  }
  ${mediaQueries.xlDown} {
    padding: 0px 4px 0;
    // padding-block: 40px 20px;
  }
  ${mediaQueries.mdDown} {
    // padding-inline: 0px;
    flex: 1 1 100%;
    // max-width: 100vw;
    // width: 100vw;
    // height: 100vh;
    // display: flex;
    // position: absolute;
    // top: var(--navbar-height);
    // right: 0px;
    // border: none;
    // border-radius: 0px;
    // z-index: 200;
  }
`;
const Wrapper = styled(VStack)`
  /* Extra 20px for 10px padding on each side */
  max-width: 1220px;

  margin: 22px auto 40px;
  padding-inline: 10px;

  gap: 14px;

  position: relative;

  background-color: transparent;

  ${mediaQueries.mdDown} {
    display: contents;

    margin: 0;
    padding: 0;
  }
`;

// const Container = styled(SpaceBetween)`
//   align-items: flex-start;
//   gap: 26px;

//   position: relative;

//   ${mediaQueries.lgDown} {
//     gap: 0.5rem;
//   }

//   ${mediaQueries.mdDown} {
//     display: contents;

//     margin: 0;
//     padding: 0;
//   }
// `;
