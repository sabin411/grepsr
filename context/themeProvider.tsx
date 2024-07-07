"use client";

// packages
import { ConfigProvider } from "antd";
import { ThemeProvider } from "antd-style";
import { ThemeContext } from "styled-components";

// context
import StyledComponentsRegistry from "./registryProvider";

// constants
import { antThemeConfig, customTheme } from "@/theme";

const UIThemeProvider = ({ children }: { children: React.ReactNode }) => {
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
  );
};

export default UIThemeProvider;
