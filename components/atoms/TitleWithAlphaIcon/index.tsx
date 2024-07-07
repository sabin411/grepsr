import React from "react"

// packages
import { Flex } from "antd"

export const TitleWithAlphaIcon = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <Flex align="center" gap={2}>
      <img src={"/assets/icons/alphabet.svg"} alt="alphabet" />
      {children}
    </Flex>
  )
}
