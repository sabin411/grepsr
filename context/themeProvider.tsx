"use client"
import { antThemeConfig } from "@/theme/theme-config"
import { ConfigProvider, theme } from "antd"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { token } = theme.useToken()

  return (
    <ConfigProvider theme={antThemeConfig}>
      <StyledThemeProvider theme={{ antd: token }}>
        {children}
      </StyledThemeProvider>
    </ConfigProvider>
  )
}

export default ThemeProvider
