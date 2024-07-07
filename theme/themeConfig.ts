import { ThemeConfig } from "antd"
import { colorScheme } from "./colorScheme"

export const themeConfig: ThemeConfig["token"] = {
  borderRadius: 4,
  fontFamily: "'Noto Sans JP', sans-serif",
}

export const customTheme = {
  "gray-1": "#f4f5fc",
  "gray-2": "#dce1ef",
  "gray-3": "#F6F5FB",
  "bg-main": "#F4F5FC",
  fs: {
    xsm: "12px",
    sm: "14px",
    md: "16px",
    "2md": "20px",
  },
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
      colorText: colorScheme?.["blue-10"],
    },

    Typography: {
      fontFamilyCode: "Roboto",
      fontSizeHeading5: 12,
      fontSizeHeading4: 14,
      fontSize: 14,
      fontWeightStrong: 500,
      titleMarginBottom: 0,
      margin: 0,
      marginXS: 0,
      marginXXS: 0,
    },

    Table: {
      headerSplitColor: customTheme["gray-2"],
      headerBg: customTheme["gray-2"],
      headerColor: colorScheme?.["blue-10"],
      colorText: colorScheme?.["blue-10"],
      fontSize: 14,
      fontWeightStrong: 700,
      cellFontSize: 14,
      stickyScrollBarBorderRadius: 80,
      headerBorderRadius: 6,
    },

    Layout: {
      siderBg: "#FFFFFF",
    },
    Switch: {
      handleSize: 18,
      trackHeight: 22,
    },
  },
}
