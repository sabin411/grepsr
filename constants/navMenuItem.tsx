import React from "react"

// assets
import { DashboardIcon, LayoutIcon, UsageIcon } from "@/Icons"

// types
export type NavMenuItem = {
  key: string
  icon: React.FunctionComponentElement<{}>
  label: string
  link: string
}

export const navMenuItem: NavMenuItem[] = [
  {
    key: "/",
    icon: React.createElement(DashboardIcon),
    label: "Datasets",
    link: "/",
  },
  {
    key: "/workflows",
    icon: React.createElement(LayoutIcon),
    label: "Workflows",
    link: "/workflows",
  },
  {
    key: "/credit-usage",
    icon: React.createElement(UsageIcon),
    label: "Credit usage",
    link: "/credit-usage",
  },
]
