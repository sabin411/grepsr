"use client";

import React from "react";

// components
import { StyledButton } from "./styles";

// types
import { CustomButtonProps } from "./types";

const CustomButton = ({ type, ...props }: CustomButtonProps) => {
  return <StyledButton type={type} {...props} />;
};

export { CustomButton };
