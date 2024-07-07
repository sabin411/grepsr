"use client"

import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import { Avatar, Button, Flex, Layout, Menu, Typography } from "antd"

import { LayoutWrapper } from "./styles"
import { CreditStats } from "../../atoms"

import { getNavItems } from "@/utils/getNavItems"

import { navMenuItem } from "@/constants/navMenuItem"

const { Header, Content, Sider } = Layout

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false)

  const { Title } = Typography
  const pathname = usePathname()

  const selectedKey =
    pathname === "/"
      ? "/"
      : navMenuItem.find(
          (item) => item.key !== "/" && pathname.includes(item.key)
        )?.key || "/"

  return (
    <LayoutWrapper>
      <Layout className="main-layout">
        <Sider
          collapsedWidth="0"
          width={212}
          collapsible={false}
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Flex className="grepsr-logo" align="center">
            <Link href={"/"} className="logo-link">
              Grepsr
            </Link>
          </Flex>

          <Menu
            mode="inline"
            defaultSelectedKeys={["/"]}
            items={getNavItems(navMenuItem)}
            selectedKeys={[selectedKey]}
          />

          <div className="find-help-box">
            <Title level={5}>Need any help?</Title>
            <Button>Contact Support</Button>
          </div>
        </Sider>

        <Layout className="content-layout">
          <Header>
            <Flex align="center" gap={8} className="page-title">
              <Button className="back-btn" type="text">
                <Image
                  src="/assets/icons/backArrow.svg"
                  height={24}
                  width={24}
                  alt="arrow"
                />
              </Button>
              <Title level={4}>Amazon product price</Title>
              <Image
                src="/assets/icons/info.svg"
                height={24}
                width={24}
                alt="arrow"
              />
            </Flex>

            <Flex align="center" gap={16}>
              <CreditStats />
              <Image
                src={"/assets/icons/bell.svg"}
                width={24}
                height={24}
                alt="bell"
              />
              <Avatar src={"/assets/img/dp.png"} />
            </Flex>
          </Header>

          <Content>
            <div className="content-section">{children}</div>
          </Content>
        </Layout>
      </Layout>
    </LayoutWrapper>
  )
}
