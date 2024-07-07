import React from "react"

import { DashboardIcon, LayoutIcon, UsageIcon } from "@/Icons"

import { NavMenuItem } from "@/types"

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
