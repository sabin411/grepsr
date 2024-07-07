// packages
import { ColumnsType } from "antd/es/table";

// components
import { TitleWithAlphaIcon } from "@/components/atoms";

// icons
import FilterIcon from "@/Icons/FilterIcon";

// types
import { ProductPriceDataType } from "../types";

// constants
import {
  brandFilter,
  priceFilter,
  ratingFilter,
  productNameFilter,
  availabilityFilter,
} from "@/constants";

export const datasetColumn: ColumnsType<ProductPriceDataType> = [
  {
    title: <TitleWithAlphaIcon>Product name</TitleWithAlphaIcon>,
    dataIndex: "product_name",
    key: "product_name",
    filters: productNameFilter,
    filterMode: "tree",
    onFilter: (value, record) => record.product_name.includes(value as string),
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
