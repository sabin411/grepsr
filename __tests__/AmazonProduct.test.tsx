import "../mocks/matchMedia.mock";
import "@testing-library/jest-dom";

// pacakges
import { render, screen } from "@testing-library/react";
import { amazonProducts } from "@/mocks/amazonProducts";

// components
import { Table } from "../components/molecules/Table/index";
import { datasetColumn } from "@/components/organisms/DataSetInternal/common/datasetColumn";

// utils
import { setKeyToList } from "@/utils";

describe("Home page", () => {
  it("render table list of product", () => {
    render(
      <Table
        columns={datasetColumn}
        dataSource={setKeyToList(amazonProducts)}
      />,
    );

    const productItem = screen.getAllByRole("row");

    // Here we are checking for extra 'row' by adding 1 because, antd table always has one extra tr i.e table row
    expect(productItem.length).toBe(amazonProducts.length + 1);
  });
});
