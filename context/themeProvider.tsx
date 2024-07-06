"use client"
import { antThemeConfig, customTheme } from "@/theme/theme-config"
import { ConfigProvider, theme } from "antd"
import { ThemeContext } from "styled-components"
import StyledComponentsRegistry from "./registryProvider"
import { ThemeProvider } from "antd-style"

const UIThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { token } = theme.useToken()

  return (
    <ConfigProvider>
      <ThemeProvider
        theme={antThemeConfig}
        customToken={customTheme}
        styled={{ ThemeContext }}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </ThemeProvider>
    </ConfigProvider>
  )
}

export default UIThemeProvider
