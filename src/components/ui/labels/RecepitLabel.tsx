import { Loading } from "@components/shared/Loading";
import styled, { css } from "styled-components";
import { SimpleLabel } from "./SimpleLabel";



export type LabelProps = JSX.IntrinsicElements["label"] & {
    variant?: "primary" | "red" | "blue" | "netural" | "tertiary" | "secondary";
    variantSecondLabel?: "primary" | "red" | "blue" | "netural" | "tertiary" | "secondary";
    size?: "sm" | "md" | "lg";
    title?: string | number;
    value?: string | number;

}
export const RecepitLabel: React.FC<LabelProps> = ({
    children,
    title,
    variant = "primary",
    variantSecondLabel = "tertiary",
    size = "md",
    value = "0 تومان",
    ...restProps
}) => {
    return (
        <InfoBox>
            <div className="head">
                <div className="row">
                    <div className="text">
                        <SimpleLabel className="text-info" variant={variant} size={size}>{title}</SimpleLabel>
                        <div className="line"></div>

                        <SimpleLabel className="text-info" variant={variantSecondLabel} size={size}>{value}</SimpleLabel>
                    </div>
                </div>
            </div>
        </InfoBox>
    );
};
// As i didn't get what's the main object of the not
// completed condition so I bring it back to the previous one .
// font-size: ${(props) => props.size} ?? 16px;
const InfoBox = styled.div<LabelProps>`
            display: flex;
            flex-direction: column;
            justify-content: start;
            color: #3d6b99;

            .head {
                // height: 32px;
                display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: end;
            border-radius: 6px;
            // padding: 12px 17px;
            // background-color: #f2f5f5;
            font-size:11px;


            ${({ theme, variant }) =>
        variant === "red"
            ? css`
              color: ${theme.semanticColors.danger};
              
            `
            : variant === "blue"
                ? css`
              color: ${theme.semanticColors.info};
            `
                : variant === "netural"
                    ? css`
              color: ${theme.neutralColors.primary};
            `
                    : css`
              color: ${theme.primaryColors.primary};
           
            `}

       .row {
            width: 100%;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            .line {
               display: flex;
               justify-content: center;
               align-items: center;
               height: 10%;
               width: 100%;
               border-bottom: 1px dashed #C8CCCC;
               z-index: 1;
              flex:1;
              margin: 0px 8px;

           }

            .text {
                width: 100%;
            align-items: center;
            display: flex;
            justify-content: space-between;
            z-index: 2;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 18px;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 7px;

            padding: 14px 14px;

            /* identical to box height, or 114% */

            text-align: right;

            /* Neutral Colors/Tertiary Color - Light */

            color: #4B4D4D;
            p:nth-child(1) {
                background - color: #f2f5f5;
            padding-left: 8px;
        }
            p:nth-child(2) {
                background - color: #f2f5f5;
            padding-right: 10px;
        }
      }
    }
  }
            `;
const StyledLabel = styled.div<LabelProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  border: none;
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
  `}
  ${({ size }) =>
        size === "lg"
            ? css`
            font-size: 16px;
        `
            : size === "md"
                ? css`
          
          font-size: 14px;
        `: size === "sm"
                    ? css`
          
          font-size: 12px;
        `


                    : css`
                    font-size: 11px;

        `}
  ${({ theme, variant }) =>
        variant === "red"
            ? css`
          color: ${theme.semanticColors.danger};
          
        `
            : variant === "blue"
                ? css`
          color: ${theme.semanticColors.info};
        `
                : variant === "netural"
                    ? css`
          color: ${theme.neutralColors.primary};
        `
                    : css`
          color: ${theme.primaryColors.primary};
       
        `}
`;
