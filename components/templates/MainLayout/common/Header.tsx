import React from "react";
import Image from "next/image";
import {
  useParams,
  useRouter,
  useSelectedLayoutSegment,
} from "next/navigation";

// packages
import { Avatar, Button, Flex, Layout, Tooltip, Typography } from "antd";

// components
import { CreditStats } from "@/components/atoms";

const { Header: AntHeader } = Layout;

export const Header = () => {
  const { Title } = Typography;

  const segment = useSelectedLayoutSegment();
  const params = useParams<{ p_key: string }>();

  const router = useRouter();
  return (
    <AntHeader>
      <Flex align="center" gap={8} className="page-title">
        {params.p_key && (
          <Button
            className="back-btn"
            type="text"
            onClick={() => router.back()}
          >
            <Image
              src="/assets/icons/backArrow.svg"
              height={24}
              width={24}
              alt="arrow"
            />
          </Button>
        )}

        {/* The logic implemented here to make the title dynamic serves as an initial example. It can be further enhanced for improved functionality. */}
        <Title className="title" level={4}>
          {params.p_key ? `${params.p_key} product price` : segment}
        </Title>

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
        <CreditStats count={1018} />
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
