import {Navbar} from "@components/navbar/navbar";
import {css} from "styled-components";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export const Layout: React.FC<Props> = ({children}) => {
  return (
    <div
      css={css`
        /* background-image: url("/images/supergraphics/profile.svg");
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover; */
      `}
    >
      <Navbar isLandingPage={false} />
      {children}
    </div>
  );
};
