export interface ProductPriceDataType extends DatasetData {
  key: number | string;
}

export type DatasetResponse = DatasetData[];

export interface DatasetData {
  createdAt: string;
  price: number;
  rating: number;
  brand: string;
  availability: boolean;
  product_name: string;
  id: string | number;
}
