import styled from "styled-components";

interface IProps {
  justifyContent?: string;
}

export const DivFlex = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "space-between"};
  margin: 0 auto;
  padding: 10px 0;
`;
