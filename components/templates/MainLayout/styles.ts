import styled from "styled-components";

export const LayoutWrapper = styled.div`
  .ant-layout.main-layout {
    min-height: 100vh;
    overflow-x: auto;
    .ant-layout-sider {
      border-right: 1px solid ${(p) => p.theme.colorBorder};
      .ant-layout-sider-children {
        .grepsr-logo {
          border-bottom: 1px solid ${({ theme }) => theme.colorBorder};
          height: 60px;
          width: 100%;
          padding: 22px 24px;
          .logo-link {
            font-size: ${({ theme }) => theme.fs["2md"]};
            font-weight: 700;
            letter-spacing: 0.2px;
            color: ${({ theme }) => theme["blue-10"]};
          }
        }

        .ant-menu-root {
          border: none;
          padding-block: 24px;
          height: calc(100% - 208px);

          .ant-menu-item {
            margin-block: 8px;
            margin-inline: 16px;
            width: calc(100% - 32px);
            gap: 4px;
            color: ${({ theme }) => theme["blue-10"]};

            &.ant-menu-item-active,
            &.ant-menu-item-selected {
              color: ${({ theme }) => theme.colorPrimary};
            }
            &.ant-menu-item-selected {
              background: ${({ theme }) => theme["blue-2"]};
            }
            .ant-menu-title-content {
              font-size: ${({ theme }) => theme.fs.sm};
            }
          }
        }

        .find-help-box {
          height: 100px;
          background: ${({ theme }) => theme["bg-main"]};
          margin: 24px 16px;
          border-radius: ${({ theme }) => theme.borderRadius}px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          .ant-typography {
            letter-spacing: 0.2%;
            color: ${({ theme }) => theme["blue-10"]};
          }
        }
      }
    }
    .content-layout {
      position: relative;
      background: ${({ theme }) => theme["gray-1"]};
      min-width: 600px;
      .ant-layout-header {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-between;
        height: auto;
        padding: 13.5px 32px;
        border-bottom: 1px solid ${({ theme }) => theme.colorBorder};
        background-color: ${({ theme }) => theme.colorBgContainer};
        .page-title .back-btn {
          padding: 0;
        }

        .ant-typography.title {
          color: ${({ theme }) => theme["blue-10"]};
          text-transform: capitalize;
        }

        .info-button,
        .bell-button,
        .profile-button {
          padding: 0;
        }
      }

      .ant-layout-content {
        margin: 24px 24px 0;
        .content-section {
          min-height: 360;
        }
      }
    }
  }
`;
