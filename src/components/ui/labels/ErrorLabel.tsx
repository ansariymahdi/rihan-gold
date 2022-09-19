import icons from "@components/icons";
import styled, { css } from "styled-components";



export type LabelProps = JSX.IntrinsicElements["label"] & {
    variant?: "primary" | "red" | "blue" | "netural" | "tertiary" | "secondary";
    size?: "sm" | "md" | "lg" | "tiny";

}
export const ErrorLabel: React.FC<LabelProps> = ({
    children,
    variant = "netural",
    size = "md",
    ...restProps
}) => {
    return (
        <StyledLabel
            {...restProps}
            variant={variant}
            size={size}
        >
            <icons.ErrorWarningFill />
            {children}
        </StyledLabel>
    );
};
// As i didn't get what's the main object of the not
// completed condition so I bring it back to the previous one .
// font-size: ${(props) => props.size} ?? 16px;
const StyledLabel = styled.div<LabelProps>`
  display: flex;
  align-items: center;
//   margin:0px 0px 0px 0px;

  padding: 2px;
  transition: all 0.3s ease-in-out;
  border: none;
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
  `}
  ${({ theme }) => css`
    color: ${theme.semanticColors.danger};
     background-color: ${theme.semanticColorsOpacity.danger};
  `}
  svg{
      width:16px;
      height:16px;
      margin:0px 2px;

  }

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

                    : size === "tiny"
                        ? css`
          
          font-size: 11px;
        `


                        : css`
                    font-size: 11px;

        `}

`;
