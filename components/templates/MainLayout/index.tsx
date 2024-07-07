"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// packages
import { Flex, Layout, Menu, Typography } from "antd";

// components
import { Header } from "./common/Header";
import { LayoutWrapper } from "./styles";

// utils
import { getNavItems } from "@/utils/getNavItems";

// constants
import { navMenuItem } from "@/constants/navMenuItem";
import { CustomButton } from "@/components/atoms/CustomButton";

const { Content, Sider } = Layout;

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { Title } = Typography;
  const pathname = usePathname();

  const selectedKey =
    pathname === "/"
      ? "/"
      : navMenuItem.find(
          (item) => item.key !== "/" && pathname.includes(item.key),
        )?.key || "/";

  return (
    <LayoutWrapper>
      <Layout className="main-layout">
        <Sider collapsedWidth="0" width={212} collapsible={false}>
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
            <CustomButton type="secondary">Contact Support</CustomButton>
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
