import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// packages
import { Avatar, Button, Flex, Layout, Tooltip, Typography } from "antd";

// components
import { CreditStats } from "@/components/atoms";

const { Header: AntHeader } = Layout;

export const Header = () => {
  const { Title } = Typography;

  const router = useRouter();
  return (
    <AntHeader>
      <Flex align="center" gap={8} className="page-title">
        <Button
          className="back-btn"
          type="text"
          onClick={() => router.push("/")}
        >
          <Image
            src="/assets/icons/backArrow.svg"
            height={24}
            width={24}
            alt="arrow"
          />
        </Button>
        <Title level={4}>Amazon product price</Title>
        <Tooltip placement="topLeft" title={"No info found."}>
          <Button type="text" className="info-button">
            <Image
              src="/assets/icons/info.svg"
              height={24}
              width={24}
              alt="arrow"
            />
          </Button>
        </Tooltip>
      </Flex>

      <Flex align="center" gap={16}>
        <CreditStats />
        <Button className="bell-button" type="text">
          <Image
            src={"/assets/icons/bell.svg"}
            width={24}
            height={24}
            alt="bell"
          />
        </Button>
        <Button className="profile-button" type="text">
          <Avatar src={"/assets/img/dp.png"} />
        </Button>
      </Flex>
    </AntHeader>
  );
};
