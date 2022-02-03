import React, { ChangeEvent, ReactElement } from "react";
import styled from "styled-components";

type TProps = {
  value: string;
  maxLength?: number;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputComponent = styled.input`
  margin: 10px;
  border-width: 0;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 18px;
  gap: 8px;
  background-color: #e0e0e0;
`;

export default function Input({
  value,
  maxLength = 20,
  disabled = false,
  onChange,
}: TProps): ReactElement {
  return (
    <InputComponent
      value={value}
      maxLength={maxLength}
      disabled={disabled}
      onChange={onChange}
    />
  );
}
