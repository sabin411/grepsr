import { Flex, Space, Typography } from "antd"
import Image from "next/image"
import React from "react"
import { StyledCreditStats } from "./styles"

export const CreditStats = () => {
  const { Title } = Typography
  return (
    <StyledCreditStats align="center" gap={5}>
      <Image
        src="/assets/icons/stackDisk.svg"
        height={24}
        width={24}
        alt="stackDisk"
      />

      <Flex align="center" gap={5}>
        <Title level={5}>Credit usage: 1018 /</Title>
        <Image
          src="/assets/icons/infinity.svg"
          height={16}
          width={16}
          alt="infinity"
        />
      </Flex>
    </StyledCreditStats>
  )
}
