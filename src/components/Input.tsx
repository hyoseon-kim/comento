import React, { ReactElement } from "react";

type TProps = {
  value: string;
  maxLength: number;
};

export default function Input({ value, maxLength }: TProps): ReactElement {
  return <input value={value} maxLength={maxLength} />;
}
