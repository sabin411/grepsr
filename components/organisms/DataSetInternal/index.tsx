"use client";

import React from "react";
import Image from "next/image";

// packages
import { useQuery } from "@tanstack/react-query";
import { Button, Flex, Switch, Typography } from "antd";

// components
import { StyledDataSetPage } from "./styles";
import { Table } from "@/components/molecules";

// assets
import FilterIcon from "@/Icons/FilterIcon";
import EyeballIcon from "@/Icons/EyeballIcon";

// services
import { getDataset } from "@/services/dataset.services";

// utils
import { setKeyToList } from "@/utils/setKeyToList";

// constants
import { datasetColumn } from "./common/datasetColumn";

export const DataSetInternal = ({ productKey }: { productKey: string }) => {
  const { Title } = Typography;

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
        className="product-table"
        columns={datasetColumn}
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
