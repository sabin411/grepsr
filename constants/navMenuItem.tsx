import React from "react"

// types
import { NavMenuItem } from "@/types"

// assets
import { DashboardIcon, LayoutIcon, UsageIcon } from "@/Icons"

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
