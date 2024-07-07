"use client"

import React from "react"
import { Table as AntTable, TableProps } from "antd"
import styled from "styled-components"

const StyledTable = styled(AntTable)``

export const Table = (props: TableProps) => {
  return <StyledTable {...props} />
}
