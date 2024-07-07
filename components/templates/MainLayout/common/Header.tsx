import React from "react";
import Image from "next/image";

// packages
import { Avatar, Button, Flex, Layout, Typography } from "antd";

// components
import { CreditStats } from "@/components/atoms";

const { Header: AntHeader } = Layout;

export const Header = () => {
  const { Title } = Typography;
  return (
    <AntHeader>
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
    </AntHeader>
  );
};
