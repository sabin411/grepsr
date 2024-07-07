"use client";

import React from "react";
import Image from "next/image";

// packages
import { ColumnsType } from "antd/es/table";
import { useQuery } from "@tanstack/react-query";
import { Button, Flex, Switch, Typography } from "antd";

// components
import { StyledDataSetPage } from "./styles";
import { Table } from "@/components/molecules";
import { TitleWithAlphaIcon } from "@/components/atoms";

// assets
import FilterIcon from "@/Icons/FilterIcon";
import EyeballIcon from "@/Icons/EyeballIcon";

// services
import { getDataset } from "@/services/dataset.services";

// utils
import { setKeyToList } from "@/utils/setKeyToList";

// types
import { ProductPriceDataType } from "./types";

// constants
import {
  brandFilter,
  priceFilter,
  ratingFilter,
  productNameFilter,
  availabilityFilter,
} from "@/constants";
import { useParams } from "next/navigation";

export const DataSetInternal = ({ productKey }: { productKey: string }) => {
  const { Title } = Typography;

  const column: ColumnsType<ProductPriceDataType> = [
    {
      title: <TitleWithAlphaIcon>Product name</TitleWithAlphaIcon>,
      dataIndex: "product_name",
      key: "product_name",
      filters: productNameFilter,
      filterMode: "tree",
      onFilter: (value, record) =>
        record.product_name.includes(value as string),
      width: 246,
      filterIcon: <FilterIcon />,
      ellipsis: true,
      showSorterTooltip: true,
    },
    {
      title: <TitleWithAlphaIcon>Price</TitleWithAlphaIcon>,
      dataIndex: "price",
      key: "price",
      filterMode: "tree",
      filters: priceFilter,
      onFilter: (value, record) => record.price === value,
      filterIcon: <FilterIcon />,
      width: 200,
      render: (val) => `$${val}`,
    },
    {
      title: <TitleWithAlphaIcon>Rating</TitleWithAlphaIcon>,
      dataIndex: "rating",
      key: "rating",
      filterMode: "tree",
      filters: ratingFilter,
      onFilter: (value, record) => record.rating === value,
      filterIcon: <FilterIcon />,
      width: 200,
    },
    {
      title: <TitleWithAlphaIcon>Brand</TitleWithAlphaIcon>,
      dataIndex: "brand",
      key: "brand",
      filterMode: "tree",
      filters: brandFilter,
      onFilter: (value, record) => record.brand.includes(value as string),
      filterIcon: <FilterIcon />,
      width: 200,
    },
    {
      title: <TitleWithAlphaIcon>Availability</TitleWithAlphaIcon>,
      dataIndex: "availability",
      key: "availability",
      filterMode: "tree",
      filters: availabilityFilter,
      onFilter: (value, record) => record.availability === value,
      filterIcon: <FilterIcon />,
      render: (val) => (val ? "Yes" : "No"),
      width: 250,
    },
  ];

  const { data: datasetResponse, isLoading } = useQuery({
    queryKey: ["dataset", productKey],
    queryFn: () => getDataset(productKey),
    select: (resp) => setKeyToList(resp.data),
  });

  return (
    <StyledDataSetPage>
      <Flex
        gap={16}
        justify="space-between"
        align="center"
        className="dataset-top-controller"
        wrap={"wrap"}
      >
        {/* Dataset top header (left section) */}
        <Flex align="center" gap={12}>
          <Button type="primary">Operations</Button>
          <Button type="default" icon={<FilterIcon />}>
            Add filters
          </Button>
        </Flex>

        {/* Dataset top header (right section) */}
        <Flex align="center" gap={12} wrap={"wrap"}>
          <Flex align="center" gap={8}>
            <Title className="edit-mode-label" level={4}>
              Edit mode
            </Title>
            <Switch
              checkedChildren="ON"
              size="default"
              unCheckedChildren="OFF"
            />
          </Flex>

          <Button type="default" icon={<EyeballIcon />}>
            Show metadata
          </Button>
          <Button
            type="default"
            icon={
              <Image
                height={24}
                width={24}
                src={"/assets/icons/download.svg"}
                alt={"download"}
              />
            }
          />
        </Flex>
      </Flex>

      <Table
        columns={column}
        loading={isLoading}
        pagination={false}
        dataSource={datasetResponse}
        scroll={{
          x: 800,
        }}
      />
    </StyledDataSetPage>
  );
};
