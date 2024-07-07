import { API } from "@/api";
import { DatasetResponse } from "@/components/organisms/DataSetInternal/types";

export const getDataset = async (key: string) =>
  API.get<DatasetResponse>(`/${key}`);
