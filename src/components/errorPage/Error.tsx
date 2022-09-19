// import {Button} from "@components/NewButton";
import router from "next/router";
import styled from "styled-components";
// import { CenterColumn, Center } from "./utils";
import NextImage from "next/image";
import {Center, CenterColumn} from "@utils/utils";
import icons from "@icons/index";

export const Error: React.FC<{
  code: string | number;
  msg?: string;
}> = ({code = 404, msg = "صفحه مورد نظر در تترلند موجود نیست."}) => {
  return (
    <Wrapper>
      <CenterColumn>
        <IconNotFound>
          <icons.NotFoundIcon />
        </IconNotFound>
        {/* <NextImage src="/images/error.png" width="578px" height="270px" /> */}
        <Title>خطای {code}</Title>
        <p className="mt-5 weight-600">{msg}</p>
        <p className="mt-3 weight-600">
          از طریق دکمه زیر می‌توانید به صفحه اصلی منتقل شوید.
        </p>
        {/* <HomeBtn size="lg" onClick={() => router.replace("/")}>
          بازگشت به خانه
        </HomeBtn> */}
      </CenterColumn>
    </Wrapper>
  );
};

const Wrapper = styled(Center)`
  width: 100vw;
  height: calc(100vh - 70px);
`;

const Title = styled.h5`
  margin-top: 64px;

  font-size: 24px;
  font-weight: 700;
`;

const IconNotFound = styled.div`
  svg {
    width: 125px;
    height: 100px;
    scale: 2;
  }
`;

// const HomeBtn = styled(Button)`
//   width: 260px;
//   margin-top: 40px;
// `;
