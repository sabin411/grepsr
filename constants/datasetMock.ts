import { ProductPriceDataType } from "@/types"
import { ColumnFilterItem } from "antd/es/table/interface"

export const datasetMock: ProductPriceDataType[] = [
  {
    id: 1,
    key: 1,
    product_name: "Gerber Organic 2nd Foods",
    brand: "Happy kids",
    price: 1234,
    rating: 3,
    availability: true,
  },
  {
    id: 2,
    key: 2,
    product_name: "Gerber Organic 2nd Foods",
    brand: "Happy kids",
    price: 1234,
    rating: 3,
    availability: true,
  },
  {
    id: 3,
    key: 3,
    product_name: "Serenity Kids 6+ Months Baby Food Pouches Puree",
    brand: "Serinity",
    price: 100,
    rating: 4.9,
    availability: false,
  },
]

export const productNameFilter: ColumnFilterItem[] = [
  {
    text: "Gerber Organic 2nd Foods",
    value: "Gerber Organic",
  },
]

export const priceFilter: ColumnFilterItem[] = [
  {
    text: "100",
    value: 100,
  },
  {
    text: "1234",
    value: 1234,
  },
]

export const ratingFilter: ColumnFilterItem[] = [
  {
    text: "4.9",
    value: 4.9,
  },
  {
    text: "4.6",
    value: 4.6,
  },
]

export const brandFilter: ColumnFilterItem[] = [
  {
    text: "Happy kids",
    value: "Happy kids",
  },
  {
    text: "Serinity",
    value: "Serinity",
  },
]

export const availabilityFilter: ColumnFilterItem[] = [
  {
    text: "yes",
    value: true,
  },
  {
    text: "No",
    value: false,
  },
]
