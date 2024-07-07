import { ThemeConfig } from "antd"
import { colorScheme } from "./color-scheme"

export const themeConfig: ThemeConfig["token"] = {
  borderRadius: 4,
  fontFamily: "'Noto Sans JP', sans-serif",
}

export const antThemeConfig: ThemeConfig = {
  token: {
    ...colorScheme,
    ...themeConfig,
    borderRadius: 6,
  },
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 32,
      contentFontSize: 14,
      fontWeight: 500,
    },

    Typography: {
      fontFamilyCode: "Roboto",
      fontSizeHeading5: 12,
      fontSize: 14,
      fontWeightStrong: 500,
      titleMarginBottom: 0,
      margin: 0,
      marginXS: 0,
      marginXXS: 0,
    },

    Layout: {
      siderBg: "#FFFFFF",
    },
  },
}

export const customTheme = {
  "gray-1": "#f4f5fc",
  "bg-main": "#F4F5FC",
  fs: {
    xsm: "12px",
    sm: "14px",
    md: "16px",
    "2md": "20px",
  },
}
