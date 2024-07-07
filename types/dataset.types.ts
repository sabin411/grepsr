export type ProductPriceDataType = {
  id: string | number
  key: string | number
  product_name: string
  price: number
  rating: number
  brand: string
  availability: boolean
}

export type DatasetResponse = DatasetData[]

export interface DatasetData {
  createdAt: string
  price: number
  rating: number
  brand: string
  availability: boolean
  product_name: string
  id: string | number
}
