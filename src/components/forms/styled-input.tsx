import * as React from "react";
import styled from "styled-components";

interface InputProps {
  marginBottom?: string;
  backgroundColor?: string;
  color?: string;
  class?: string;
}

const InputStyled = styled.input<InputProps>`
  padding: 6px 20px;
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
  color: ${props => (props.color ? props.color : "#000000")};
`;

const ButtonStyled = styled.button<InputProps>`
  padding: 6px 20px;
  border-radius: 25px;
  margin-bottom: ${props => props.marginBottom};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#EBEBEB"};
  border: 0px;
  margin: 8px 0;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => (props.color ? props.color : "#000000")};
`;

const LabelStyled = styled.label`
  font-weight: 700;
  margin-bottom: 20px;
`;

interface IDiv {
  marginTop?: string;
}

const DivStyled = styled.div<IDiv>`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.marginTop};
`;

export const StyledInput = props => {
  return (
    <DivStyled>
      {props.label ? (
        <LabelStyled htmlFor={props.name} className="form-label">
          {props.title}
        </LabelStyled>
      ) : null}
      {props.inputType !== "submit" ? (
        <InputStyled
          placeholder={props.placeholder}
          marginBottom={props.marginBottom}
          backgroundColor={props.backgroundColor}
          color={props.color}
          type={props.inputType}
          value={props.value}
        />
      ) : (
        <DivStyled marginTop={"10%"}>
          <ButtonStyled
            type={props.inputType}
            value={props.value}
            backgroundColor={props.backgroundColor}
            color={props.color}
          >
            {props.value}{" "}
          </ButtonStyled>
        </DivStyled>
      )}
    </DivStyled>
  );
};
