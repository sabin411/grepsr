"use client";

import React from "react";

// packages
import { TableProps } from "antd";

// components
import { StyledTable } from "./styles";

// types
import { GenericTableDataType } from "./types";

export function Table<TData extends GenericTableDataType>({
  ...props
}: TableProps<TData>) {
  return (
    <StyledTable
      rowClassName={(_, index) =>
        index % 2 === 0 ? "table-row-gray" : "table-row-white"
      }
      {...props}
    />
  );
}
