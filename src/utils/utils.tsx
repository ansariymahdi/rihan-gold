import {useState} from "react";
import styled, {css} from "styled-components";
import {toMobileNoForm} from "../utils/main";
// import {icons} from "./icons";
import Router from "next/router";
import Image from "next/image";

const NextImage = (props: any) =>
  typeof window === "undefined" ? <></> : <Image {...props} />;
export {NextImage as Image};

export const To: React.FC<{
  children: React.ReactNode;
  to: any;
  props: any;
}> = ({children, to, ...props}) => (
  <span onClick={() => to && Router.push(to)} {...props}>
    {children}
  </span>
);

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff2;
  margin: 24px 0;
`;

export const Container = styled.div`
  width: 1608px;
  margin: auto;

  @media only screen and (max-width: 1640px) {
    width: calc(100% - 32px);
  }
`;

export const Caution = styled.div`
  padding: 16px 48px 16px 16px;
  border-radius: 6px;
  border: solid 1px #e4e9ee;
  background-color: #ffffff;
  font-size: 13px;
  line-height: 1.85;
  font-weight: 500;
  color: #f1750a;
  position: relative;

  ::before {
    content: "";
    background-image: url("./images/icon/alert.png");
    width: 24px;
    height: 24px;
    display: block;
    background-size: cover;
    position: absolute;
    right: 12px;
    top: 16px;
  }
`;

export const GridCon = styled.div<any>`
  display: grid;
  z-index: 10;
  /* grid-template-columns: repeat(
    ${({col}) => col},
    ${({colWidth}) => colWidth || "1fr"}
  ); */
  /* grid-template-rows: repeat(${({row}) => row}, 1fr); */
  /* column-gap: ${({colGap}) => colGap};
  row-gap: ${({rowGap}) => rowGap}; */
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;

  /* ${({theme}) => theme.lgDown} {
    grid-template-columns: repeat(
      ${({lgDown_col}) => lgDown_col},
      ${({lgDown_colWidth}) => lgDown_colWidth || "1fr"}
    );
    grid-row-gap: ${({lg_rowGap}) => lg_rowGap};
  }

  ${({theme}) => theme.mdDown} {
    grid-template-columns: repeat(
      ${({mdDown_col}) => mdDown_col},
      ${({mdDown_colWidth}) => mdDown_colWidth || "1fr"}
    );
  }

  ${({theme}) => theme.smDown} {
    grid-template-columns: repeat(
      ${({smDown_col}) => smDown_col},
      ${({smDown_colWidth}) => smDown_colWidth || "1fr"}
    );
    grid-row-gap: ${({sm_rowGap}) => sm_rowGap};
  } */
`;
export const FlexEnd = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
// export const Paper = styled(Grid)`
//   background-color: ${({ theme }) => theme.components.cardBgColor};
//   position: relative;
//   overflow: hidden;
//   border-radius: 8px;
// `;
export const Underline = styled.span`
  color: ${({color}) => color};
  border-bottom: 1px solid;
`;

export const Caption = styled.span`
  color: #94a3b4;
  font-size: 0.8rem;
`;

export type FlexProps = {
  w?: number | string;
  h?: number | string;
  minH?: number | string;
  m?: number | string;
  p?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  mx?: number | string;
  my?: number | string;
  pt?: number | string;
  pr?: number | string;
  pl?: number | string;
  pb?: number | string;
  px?: number | string;
  py?: number | string;
  bg?: string;
  color?: string;
  textAlign?: number | string;
  lineHeight?: number | string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  order?: number | string;
};

export const Flex = styled.div<
  React.BaseHTMLAttributes<HTMLDivElement> & FlexProps
>`
  display: flex;

  ${({
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    m,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    p,
    w,
    h,
    minH,
    bg,
    color,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    textAlign,
    lineHeight,
    gap,
    order,
  }) => css`
    width: ${w};
    height: ${h};
    min-height: ${minH};

    margin: ${m};
    margin-right: ${mx};
    margin-left: ${mx};
    margin-top: ${my};
    margin-bottom: ${my};
    margin-top: ${mt};
    margin-right: ${mr};
    margin-bottom: ${mb};
    margin-left: ${ml};

    padding: ${p};
    padding-right: ${px};
    padding-left: ${px};
    padding-top: ${py};
    padding-bottom: ${py};
    padding-top: ${pt};
    padding-right: ${pr};
    padding-bottom: ${pb};
    padding-left: ${pl};

    background: ${bg};
    color: ${color};

    text-align: ${textAlign};

    line-height: ${lineHeight};

    display: ${display};
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};

    gap: ${gap};
    order: ${order};
  `}
`;

export const HR = styled.hr<FlexProps>`
  border: 0;
  height: 1px;
  background: ${({theme}) => theme.color.lightGray};

  ${({
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    m,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    p,
    w,
    h,
    bg,
    color,
  }) => css`
    width: ${w};
    height: ${h};

    margin: ${m};
    margin-right: ${mx};
    margin-left: ${mx};
    margin-top: ${my};
    margin-bottom: ${my};
    margin-top: ${mt};
    margin-right: ${mr};
    margin-bottom: ${mb};
    margin-left: ${ml};

    padding: ${p};
    padding-right: ${px};
    padding-left: ${px};
    padding-top: ${py};
    padding-bottom: ${py};
    padding-top: ${pt};
    padding-right: ${pr};
    padding-bottom: ${pb};
    padding-left: ${pl};

    background: ${bg};
    color: ${color};
  `}
`;

export const SpaceBetween = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;
export const SpaceBetweenHowToBuy = styled(Flex)`
  justify-content: space-between;
  align-items: start;
  height: 850px;
  ${({theme}) => theme.lgDown} {
    height: 1200px;
  }
  ${({theme}) => theme.mdDown} {
    justify-content: center;
    align-items: center;
    height: unset;
    flex-direction: column-reverse;
  }
  ${({theme}) => theme.smDown} {
    justify-content: center;
    align-items: center;
  }
`;
export const SpaceAround = styled(Flex)`
  justify-content: space-around;
  align-items: center;
`;

export const SpaceEvenly = styled(Flex)`
  justify-content: space-evenly;
  align-items: center;
`;

export const Center = styled(Flex)<{type?: string}>`
  display: ${({type}) => (type == "grid" ? "grid" : "flex")};
  justify-content: center;
  align-items: center;
`;

export const VCenter = styled(Flex)`
  align-items: center;
`;

export const HCenter = styled(Flex)`
  justify-content: center;
`;

export const FullCenter = styled(Flex)`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;
export const FullSpaceBetween = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const VStack = styled(Flex)`
  flex-direction: column;
`;

export const JustifyStartCenter = styled(Flex)`
  justify-content: start;
  align-items: center;
`;

export const CenterColumn = styled(VStack)`
  justify-content: flex-start;
  align-items: center;
`;
export const CenterColumnHeight = styled(VStack)`
  justify-content: center;
`;
export const Relative = styled.div`
  position: relative;
`;

export const Text = styled(To)`
  color: ${({theme}) => theme.typography.primary};
  font-size: 0.8rem;
`;

export const Red = styled.span`
    color: ${({theme}) => theme.color.red};
  `,
  Green = styled.span`
    color: ${({theme}) => theme.color.green};
  `,
  Blue = styled.span`
    color: ${({theme}) => theme.color.blue};
  `,
  Orange = styled.span`
    color: #f1750a;
  `;

export const BoldRed = styled.span`
    color: ${({theme}) => theme.semanticColors.danger};
    font-weight: bold;
  `,
  BoldGreen = styled.span`
    color: ${({theme}) => theme.semanticColors.success};
    font-weight: bold;
  `,
  BoldBlue = styled.span`
    color: ${({theme}) => theme.semanticColors.info};
    font-weight: bold;
  `;
export const BoldText = styled(Text)`
  font-weight: bold;
`;

export const RedText = styled(Text)`
    color: ${({theme}) => theme.semanticColors.danger};
  `,
  GreenText = styled(Text)`
    color: ${({theme}) => theme.semanticColors.success};
  `,
  BlueText = styled(Text)`
    color: ${({theme}) => theme.semanticColors.info};
  `,
  GrayText = styled(Text)`
    color: #b1b3b8;
  `;
export const Ltr_div = styled.div`
  direction: ltr !important;
`;
export const Ltr_span = styled.span`
  direction: ltr !important;
`;
export const Bold = styled.span`
  font-weight: bold;
  color: ${({theme}) => theme.typography.primary};
`;
export const TextFontWeightAndSize = styled.span<{
  fontweight?: number;
  fontSize?: number;
}>`
  font-weight: ${({fontweight}) => (fontweight ? 600 : fontweight)};
`;
export const HeaderText = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
export const NormalText = styled.span`
  font-weight: 600;

  font-size: 14px;
`;

interface AddTodoActionCreator {
  message?: string | undefined;
  children?: any;
  props?: any[];
}
// export const Warning = (message: any = "", children: any, ...props: any[]) =>
//   message || children ? (
//     <Inform type="error" message={message || children} {...props} />
//   ) : (
//     <Inform
//       type="error"
//       message={message || children}
//       style={{visibility: "hidden"}}
//       {...props}
//     />
//   );
// export const TextCenter = styled(Text)`
//   text-align: center;
//   display: block;
// `;
// export const Alarm: React.FC<any> = ({children, ...props}) => (
//   <Inform message={children} {...props} />
// );

// export const PhoneNumber = ({children}) => (
//   <span>{toMobileNoForm(children)}</span>
// );

// export const Collapse = ({
//   icon,
//   children,
//   hiddenData,
//   hideIconThen,
//   dataPosition,
// }) => {
//   const [checked, setChecked] = useState(false);
//   const handleChange = () => setChecked((prev) => !prev);
//   const hidden = hideIconThen == true && checked == true ? false : true;

//   return (
//     <div>
//       {dataPosition == "before" ? (
//         <div>
//           <MuiCollapse in={checked}>{hiddenData}</MuiCollapse>
//         </div>
//       ) : (
//         <></>
//       )}
//       <MuiCollapse in={hidden}>
//         <div onClick={handleChange}>{icon || children}</div>
//       </MuiCollapse>
//       {dataPosition != "before" ? (
//         <div>
//           <MuiCollapse in={checked}>{hiddenData}</MuiCollapse>
//         </div>
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// };

// const Inform = ({message, type, ...props}) => {
//   const WarningCon = styled.p`
//     ${({theme}) => theme.setByDir.TextAlign("right")}
//     font-size: 0.8rem;
//     color: ${({theme}) =>
//       type === "error" ? theme.typography.error : theme.components.alarm};
//     margin-top: 6px;
//     ${({theme}) => theme.centerY}

//     svg {
//       ${({theme}) => theme.setByDir.marginLeft("8px")}
//     }
//   `;

//   return (
//     <WarningCon {...props}>
//       {/* <icons.Info color={type == "error" ? "#db1d3e" : "#f1750a"} /> */}
//       {message}
//     </WarningCon>
//   );
// };

export const Cancel = styled(Center)`
  padding: 2px 6px;
  border-radius: 4px;
  border: solid 1px #ebedf0;
  background-color: #ffffff;
  color: #f1750a;
  cursor: pointer;
`;

export const Alert = styled.div<{type?: "success" | "danger"}>`
  padding: 24px;
  border-radius: 8px;
  color: #fff;
  ${({type}) => {
    switch (type) {
      case "success":
        return css`
          background-color: #009b87;
        `;
      case "danger":
        return css`
          background-color: #db1d3e;
        `;
    }
  }}
`;

export const CenterAbsolute = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
