"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

// packages
import { Avatar, Button, Flex, Layout, Menu, Typography } from "antd";

// components
import { Header } from "./common/Header";
import { LayoutWrapper } from "./styles";

// utils
import { getNavItems } from "@/utils/getNavItems";

// constants
import { navMenuItem } from "@/constants/navMenuItem";

const { Content, Sider } = Layout;

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const { Title } = Typography;
  const pathname = usePathname();

  const selectedKey =
    pathname === "/"
      ? "/"
      : navMenuItem.find(
          (item) => item.key !== "/" && pathname.includes(item.key)
        )?.key || "/";

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
          <Header />

          <Content>
            <div className="content-section">{children}</div>
          </Content>
        </Layout>
      </Layout>
    </LayoutWrapper>
  );
};
