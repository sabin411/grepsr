import { AnyObject } from "antd/es/_util/type"

export const setKeyToList = <T extends { id: string | number }>(
  data: Array<T> | null
) => {
  if (!data) {
    return []
  }
  return data.map((item) => ({ ...item, key: item.id }))
}
