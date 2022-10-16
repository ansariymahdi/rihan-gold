import icons from "@icons/index";
import {mediaQueries} from "@styles/theme/theme";
import useWindowScroll from "@utils/hooks/useWindowScroll";
import {VStack} from "@utils/utils";
import NextLink from "next/link";
import React, {SVGProps, useRef, useEffect, useState} from "react";
import Strings from "src/common/Strings";
import styled, {css} from "styled-components";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  isLandingPage: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  isLandingPage = false,
  ...restProps
}) => {
  const navListRef = useRef<HTMLUListElement>(null);
  const {isTransparent} = useChangeBgOnScroll(isLandingPage);

  console.log(isTransparent);

  const items: {
    label: string;
    link: string;
    icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    openNewTab?: boolean;
  }[] = [
    {
      label: "خانه",
      link: "/",
      //   icon: icons.Home,
    },
    {
      label: "محصولات",
      link: "/products",
      //   icon: icons.Home,
    },
    {
      label: "بلاگ",
      link: "",
      openNewTab: true,
    },
    {
      label: "سوالات متداول",
      link: "/FAQ",
    },

    {
      label: "دعوت دوستان",
      link: "/invite-friends",
    },
  ];
  return (
    <Wrapper isTransparent={isTransparent}>
      <Container>
        <NavContainer>
          <NextLink href="/" passHref>
            <LogoLink>
              <LogoIcon>
                <icons.GoldLogo height={30} width={90} />
              </LogoIcon>
              <VStack>
                <div>گالری طلا و جواهر ریحان</div>
                <div>{Strings.app_description}</div>
              </VStack>
            </LogoLink>
          </NextLink>
          <NavList ref={navListRef} isOpen={true}>
            <NavListHeader>
              {/* <HamburgerIcon onClick={toggleNavList} /> */}
              {/* <NextLink href="/" passHref>
                <LogoLink>
                  <icons.GoldLogo height={150} width={150} />
                </LogoLink>
              </NextLink> */}
            </NavListHeader>
            {items.map(({label, link, icon: Icon, openNewTab}, index) => (
              <NextLink key={`${index}`} href={link} passHref>
                <NavItem
                  {...(openNewTab ? {target: "_blank"} : {})}
                  onClick={(e) => {
                    //   toggleNavList(false);
                  }}
                >
                  {/* {Icon && (
                  <Icon
                    color={mdDown ? "black" : "white"}
                    width="24px"
                    height="24px"
                  />
                )} */}
                  <span>{label}</span>
                </NavItem>
              </NextLink>
            ))}
          </NavList>
        </NavContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.nav<{isTransparent: boolean}>`
  --navbar-height: 102px;
  width: 100%;
  height: var(--navbar-height);

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  /* top: 50px; */

  inset: 0 0 auto 0;
  transition: all 0.3s linear, border-bottom 1s linear;

  ${({theme, isTransparent}) =>
    isTransparent
      ? css`
          background-color: transparent;
          color: ${theme.white};
          border-bottom: none;
        `
      : css`
          background-color: ${theme.bgColors[1]};
          color: ${theme.neutralColors.secondary};
          border-bottom: ${theme.border};
        `}
  z-index: 1001;
  ${mediaQueries.lgDown} {
    padding: 0 20px;
  }
  ${mediaQueries.mdDown} {
    padding: 0;
  }
`;

const Container = styled.div`
  /* Extra 20px for 10px padding on each side */
  max-width: 1220px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled.a`
  /* Extra 20px for 10px padding on each side */
  padding-top: 1rem;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  background: #f2f2f2;
  left: 33px;
  position: relative;
  padding-bottom: 0px;
  padding: 8px;
  border-radius: 10px;
`;

const LogoIcon = styled.div`
  padding-top: 1rem;
  padding-right: 0.5rem;
  svg {
    scale: 5;
    padding-left: 0.5rem;
  }
`;
const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;
const NavList = styled.ul<{isOpen: boolean}>`
  --navList-open-width: 300px;

  margin: 0 0 0 5rem;

  display: flex;
  gap: 24px;

  font-size: 16px;
  font-weight: 400;

  ${mediaQueries.lgDown} {
    margin: 0 2rem;
    gap: 20px;
  }

  ${mediaQueries.mdDown} {
    color: ${({theme}) => theme.color.black};

    width: 300px;
    height: 100%;
    flex-direction: column;
    gap: 36px;
    position: fixed;
    font-size: 16px;
    font-weight: 600;

    box-shadow: ${({theme}) => theme.shadow};

    background-color: ${({theme}) => theme.bgColors[1]};

    z-index: 300;
    inset: 0 0 auto auto;

    ${({isOpen}) =>
      isOpen
        ? css`
            margin: initial;
          `
        : css`
            margin-right: -300px;
          `}
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: var(--navList-open-width);
    }
  }
`;

const NavListHeader = styled.div`
  display: none;
  ${mediaQueries.mdDown} {
    height: var(--navbar-height);
    margin: 0 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({theme}) => theme.bgColors[2]};
  }
`;

const NavItem = styled.a`
  height: var(--navbar-height);

  /* padding-block: 32px; */

  display: flex;
  align-items: center;
  gap: 10px;

  list-style: none;
  text-decoration: none;
  color: inherit;

  /* transition: color 5ms ease; */
  cursor: pointer;

  svg {
    display: none;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${({theme}) => theme.primaryColors.primary};
  }

  ${mediaQueries.lgDown} {
    white-space: nowrap;
  }

  ${mediaQueries.mdDown} {
    height: fit-content;
    padding: 0 20px;
    font-size: 14px;
    font-weight: 400;

    svg {
      display: block;
    }
  }
`;

const useChangeBgOnScroll = (isLandingPage: boolean) => {
  const [isTransparent, setIsTransparent] = useState<boolean>(isLandingPage);

  const {y} = useWindowScroll();

  useEffect(() => {
    if (isLandingPage) {
      if (y > 10) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    }
  }, [isLandingPage, y]);

  return {isTransparent};
};
