import Link from "next/link"
import { MenuProps } from "antd"

import { NavMenuItem } from "@/types"

export const getNavItems = (items: NavMenuItem[]): MenuProps["items"] => {
  return items.map((item) => ({
    ...item,
    label: <Link href={item.link}>{item.label}</Link>,
  }))
}
