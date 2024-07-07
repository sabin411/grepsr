import styled from "styled-components";
import { Table as AntTable } from "antd";

export const StyledTable = styled(AntTable)`
  table {
    thead {
      .ant-table-cell .ant-table-filter-column .ant-dropdown-trigger {
        &.active {
          color: ${({ theme }) => theme.colorPrimary};
        }
        color: ${({ theme }) => theme["blue-10"]};
      }

      tr th:first-child {
        border-end-start-radius: 6px;
      }

      tr th:last-child {
        border-end-end-radius: 6px;
      }
    }

    thead tr th,
    tbody tr:not(.ant-table-measure-row) td {
      padding: 16px 32px !important;
    }

    tbody.ant-table-tbody {
      tr.ant-table-row {
        &.table-row-white {
          background: ${({ theme }) => theme.colorBgContainer};
        }
        &.table-row-gray {
          background: ${({ theme }) => theme["gray-3"]};
        }
      }
    }
  }
`;
