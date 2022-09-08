import { Button } from "antd";
import styled from "styled-components";

const CustomButton = styled(Button)`
  border-radius: 6px;
  min-width: 120px;
  margin: 0 10px;
  :last-child {
    margin-right: 0;
  }
`;

export { CustomButton };
