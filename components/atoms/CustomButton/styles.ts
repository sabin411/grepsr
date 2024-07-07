import { Button } from "antd";
import styled, { css } from "styled-components";
import { CustomButtonProps } from "./types";

export const StyledButton = styled(Button)<CustomButtonProps>`
  &.ant-btn.ant-btn-secondary {
    ${(props) =>
      props?.type === "secondary" &&
      css`
        background: ${({ theme }) => theme["blue-2"]} !important;
        color: ${({ theme }) => theme.colorPrimary} !important;
        border: 1px solid ${({ theme }) => theme["blue-2"]} !important;

        &:hover {
          filter: brightness(102%);
        }
      `}
  }
`;
