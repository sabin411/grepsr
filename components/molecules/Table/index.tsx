"use client"

import React from "react"
import { TableProps } from "antd"
import { StyledTable } from "./styles"

type GenericTableDataType = {
  id: string | number
  key: string | number
}
export function Table<TData extends GenericTableDataType>({
  ...props
}: TableProps<TData>) {
  return (
    <StyledTable
      rowClassName={(_, index) =>
        index % 2 === 0 ? "table-row-white" : "table-row-gray"
      }
      {...props}
    />
  )
}
