import styled, { css } from "styled-components";



export type LabelProps = JSX.IntrinsicElements["label"] & {
  variant?: "primary" | "red" | "blue" | "netural" | "tertiary" | "secondary" | "warning";
  size?: "sm" | "md" | "lg" | "tiny" | string;
  cursor?: "pointer" | "auto";
  weight?: "500" | "600" | "700";
  justifyContent?: "center" | "end" | "start";

}
export const SimpleLabel: React.FC<LabelProps> = ({
  children,
  variant = "netural",
  size = "md",
  cursor = "auto",
  weight = "500",
  justifyContent = "center",
  ...restProps
}) => {
  return (
    <StyledLabel
      {...restProps}
      variant={variant}
      size={size}
      cursor={cursor}
      weight={weight}
      justifyContent={justifyContent}
    >
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
  justify-content: center;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  border: none;
  
  ${({ justifyContent }) => css`
  justify-content: ${justifyContent};
  `}
  
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
  `}
  ${({ cursor }) => css`
       cursor: ${cursor};
  `}
  ${({ weight }) => css`
       font-weight: ${weight};
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

          : size === "tiny"
            ? css`
          
          font-size: 11px;
        `


            : css`
                    font-size: ${size};

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
        : variant === "tertiary"
          ? css`
          color: ${theme.neutralColors.tertiary};
        `
          : variant === "netural"
            ? css`
          color: ${theme.neutralColors.primary};
        `: variant === "secondary"
              ? css`
          color: ${theme.neutralColors.secondary};
        `: variant === "warning"
                ? css`
          color: ${theme.semanticColors.warning};
        `
                : css`
          color: ${theme.primaryColors.primary};
       
        `}
`;
