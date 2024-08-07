import styled from "styled-components";

export const StyledDataSetPage = styled.div`
  .edit-mode-label {
    color: ${({ theme }) => theme["blue-10"]};
  }

  .dataset-top-controller {
    margin-bottom: 16px;
  }

  .product-table .ant-table {
    max-height: 625px;
    overflow: auto;
  }
`;
