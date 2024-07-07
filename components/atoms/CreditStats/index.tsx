"use client";

import React from "react";
import Image from "next/image";

// packages
import { Flex, Typography } from "antd";

// components
import { StyledCreditStats } from "./styles";

// types
import { CreditStatsProps } from "./types";

export const CreditStats = ({ count }: CreditStatsProps) => {
  const { Title } = Typography;

  return (
    <StyledCreditStats align="center" gap={5}>
      <Image
        src="/assets/icons/stackDisk.svg"
        height={24}
        width={24}
        alt="stackDisk"
      />

      <Flex align="center" gap={5}>
        <Title level={5}>Credit usage: {count} /</Title>
        <Image
          src="/assets/icons/infinity.svg"
          height={16}
          width={16}
          alt="infinity"
        />
      </Flex>
    </StyledCreditStats>
  );
};
