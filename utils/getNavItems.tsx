import Link from "next/link"

// packages
import { MenuProps } from "antd"

// types
import { NavMenuItem } from "@/constants"

export const getNavItems = (items: NavMenuItem[]): MenuProps["items"] => {
  return items.map((item) => ({
    ...item,
    label: <Link href={item.link}>{item.label}</Link>,
  }))
}
