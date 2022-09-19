import {Navbar} from "@components/navbar/navbar";
import {css} from "styled-components";

export const Layout: React.FC = ({children}) => {
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
      <Navbar />
      {children}
    </div>
  );
};
