import { ButtonProps } from "antd";

export type CustomButtonProps = Omit<ButtonProps, "type"> & {
  type: ButtonProps["type"] | "secondary";
};
