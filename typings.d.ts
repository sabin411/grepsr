import { customTheme } from "./theme"
import { Theme as AntdStyleTheme } from "antd-style"

type ThemeType = typeof customTheme

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AntdStyleTheme, ThemeType {}
}
