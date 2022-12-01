import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: inline-block;
  background: #001aff;
  text-align: center;
  color: rgb(255, 255, 255);
  padding: 8px 30px;
  margin: 30px 0;
  border-radius: 30px;
  transition: background 0.5s;
  &:hover {
    cursor: pointer;
  }
`;

export const Button = ({
  children,
  onClick
}) => {
  return (
    <Btn onClick={onClick}>
      {children}
    </Btn>
  );
};
