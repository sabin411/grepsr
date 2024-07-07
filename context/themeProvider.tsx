"use client"

// packages
import { ThemeProvider } from "antd-style"
import { ConfigProvider, theme } from "antd"
import { ThemeContext } from "styled-components"

// context
import StyledComponentsRegistry from "./registryProvider"

// constants
import { antThemeConfig, customTheme } from "@/theme"

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
