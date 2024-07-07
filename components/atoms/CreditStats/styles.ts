import { Flex } from "antd";
import styled from "styled-components";

export const StyledCreditStats = styled(Flex)`
  background: ${({ theme }) => theme["blue-1"]};
  padding-inline: 10px;
  border-radius: 22px;
`;
