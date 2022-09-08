import styled from "styled-components";
import { Badge, Layout, Menu } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
const { Header } = Layout;

const LayoutHeaderContainer = styled(Header)`
  display: flex;
  padding: 0 30px 0 20px;
  flex-direction: row;
  background-color: ${({ theme }) =>
    theme.darkmode ? "var(--clr-blue-primary)" : "var(--clr-white-primary)"};
  border-bottom: 1px;
  position: relative;
  z-index: 10;
  box-shadow: 0px 7px 7px 0px rgba(181, 181, 195, 1);
`;
const LogoContainer = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: var(--clr-yellow);
  margin: 20px 0px;
`;

const AvatarContainer = styled.span`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) =>
    theme.darkmode ? "var(--clr-light-blue)" : "var(--clr-grey-primary)"};
`;

const LayoutTimeStamp = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImgContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: "center";
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const SubHeader = styled.div`
  display: flex;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  border: ${({ theme }) =>
    `${theme.darkmode ? "0px" : "1px"}solid var(--clr-grey-secondary)`};
  color: ${({ theme }) =>
    theme.darkmode ? "var(--clr-white-primary)" : "var(--clr-black)"};
  background-color: ${({ theme }) =>
    theme.darkmode ? "var(--clr-blue-tertiary)" : "var(--clr-white-primary)"};
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const ToggleButton = styled(DoubleRightOutlined)`
  cursor: pointer;
  transition: transform 0.5s;
  font-size: 16px;
  color: var(--clr-green);
`;

const ToggleBtnWrap = styled.div`
  width: 100%;
  background-color: var(--clr-blue-secondary);
  margin: 30px 0 0 0;
  padding: 10px;
`;

const BadgeContainer = styled(Badge)`
  &.ant-badge-not-a-wrapper .ant-badge-count {
    margin-left: 10px;
  }
`;

const CustomMenu = styled(Menu)`
  .ant-menu-submenu-title,
  .ant-menu-sub > li {
    height: ${({ collapse }) => (collapse ? "auto" : "auto !important")};
    white-space: normal;
  }
`;

export {
  LayoutHeaderContainer,
  LogoContainer,
  AvatarContainer,
  LayoutTimeStamp,
  ImgContainer,
  SubHeader,
  ToggleButton,
  ToggleBtnWrap,
  BadgeContainer,
  CustomMenu,
};
