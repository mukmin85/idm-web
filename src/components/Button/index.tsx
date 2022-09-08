// antd
import { Form } from "antd";
import React, { ReactElement } from "react";
import { CustomButton } from "./styled";

type btnType =
  | "primary"
  | "link"
  | "text"
  | "ghost"
  | "default"
  | "dashed"
  | "danger";

interface CustomBtnProps {
  type: btnType;
  icon?: any;
  children: ReactElement | string;
  onClick?: () => any;
  htmlType?: "button" | "submit";
}

const CustomBtn = ({
  type,
  icon,
  children,
  onClick = () => {
    console.log("----add function here");
  },
  htmlType = "submit",
}: CustomBtnProps) => {
  return (
    <Form.Item>
      <CustomButton
        onClick={onClick}
        icon={icon}
        type={type}
        htmlType={htmlType}
      >
        {children}
      </CustomButton>
    </Form.Item>
  );
};

export default CustomBtn;
