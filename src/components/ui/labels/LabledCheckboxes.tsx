import { mediaQueries, newTheme } from "@styles/theme/theme";
import styled, { css } from "styled-components";

export type LabeledCheckboxesProps = JSX.IntrinsicElements["div"] & {
  items: {
    id: number | string;
    value: number | string;
    label: string;
    percent?: number
  }[];
  selectedItemValue: string | number;
  onChange: (value: string | number) => void;
};

export const LabeledCheckboxes: React.FC<LabeledCheckboxesProps> = ({
  items = [],
  selectedItemValue,
  onChange,
  ...restProps
}) => {


  let labelboxes = [];
  labelboxes = items;

  return (
    // @ts-ignore
    <WrapperContainer {...restProps}>
      {labelboxes?.map((item) => (
        <Checkbox
          key={`${item.id}`}
          isActive={item.value === selectedItemValue}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </Checkbox>
      ))}
    </WrapperContainer>
  );
};

const WrapperContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  cursor: pointer;

  ${mediaQueries.mdDown} {
    gap: 0px;


}

`;

const Checkbox = styled.span<{ isActive: boolean }>`
  flex: 1 1 3em;

  padding-block: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  z-index: 1;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  // line-height: 22px;
  /* identical to box height */

  text-align: right;

  /* Neutral Colors/Tertiary Color - Light */

  :hover {
    background-color: "#fafcff";
  }
  color: #7a8080;

  ${({ theme, isActive }) => css`
    /* Background Colors/Background Color 01 - Light */

    background: #fdfeff;
    /* Neutral Colors/Quaternary Color - Light */

    border: 1px solid;
    border-color: ${isActive ? "#009B87" : "#C8CCCC"};
    border-radius: 6px;
    background-color: ${isActive ? "#E7F5F5" : "white"};
    color: ${isActive ? theme.color.green : newTheme.neutralColors.secondary};

    font-weight: ${isActive ? 600 : 400};
  `};

  ${mediaQueries.mdDown} {
    font-size: 10px;
    padding-block: 2px;
    flex: 1 1 ;
    margin:0px 2px;
    


}

  
`;
