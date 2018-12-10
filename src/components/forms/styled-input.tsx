import * as React from "react";
import styled from "styled-components";

interface InputProps {
  marginBottom?: string;
  backgroundColor?: string;
  color?: string;
}

const InputStyled = styled.input<InputProps>`
  padding-left: 10px;
  border-radius: 25px;
  margin-bottom: ${props => props.marginBottom};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#EBEBEB"};
  border: 0px;
  margin: 8px 0;
  :focus {
    outline: none;
  }
  font-family: ${props => props.theme.fontFamily};
  color: ${props => (props.color ? props.color : "000000")};
`;

const LabelStyled = styled.label`
  font-weight: 700;
  margin-bottom: 20px;
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = props => {
  return (
    <DivStyled className="form-group">
      {props.label ? (
        <LabelStyled htmlFor={props.name} className="form-label">
          {props.title}
        </LabelStyled>
      ) : null}
      <InputStyled
        className="form-control"
        placeholder={props.placeholder}
        marginBottom={props.marginBottom}
        backgroundColor={props.backgroundColor}
        color={props.color}
        type={props.inputType}
        value={props.value}
      />
    </DivStyled>
  );
};
