import React, { ReactElement } from "react";

// redux
import { useSelector } from "react-redux";
import { themeData } from "../../redux/slices/theme";

// styles, assets
import {
  Container,
  Header,
  StackContainer,
  StackHeader,
  RightHeader,
  Content,
  Footer,
  Actions,
} from "./styled";

import { Collapse } from "antd";

// components
import { Text } from "../../components";

interface CardProps {
  label?: any;
  rightHeader?: ReactElement;
  children?: ReactElement;
  actionButtons?: ReactElement;
  fullPage?: boolean;
}

const Card = ({
  label,
  rightHeader,
  children,
  actionButtons,
  fullPage = true,
}: CardProps) => {
  const isDarkMode: any = useSelector(themeData).darkmode;

  return (
    <Container fullPage={fullPage}>
      {label || rightHeader ? (
        <Header>
          <Text
            variant="title"
            color={isDarkMode ? "var(--clr-white-primary)" : "var(--clr-black)"}
          >
            {label}
          </Text>
          <RightHeader>{rightHeader}</RightHeader>
        </Header>
      ) : null}
      <Content>{children}</Content>
      {actionButtons ? (
        <Footer>
          <Actions>{actionButtons}</Actions>
        </Footer>
      ) : null}
    </Container>
  );
};

interface CardStackProps {
  fluid?: boolean;
  panel?: boolean;
  defaultOpen?: boolean;
}

const CardStack = (props: CardStackProps & CardProps) => {
  const {
    label,
    rightHeader,
    children,
    fluid = false,
    panel = false,
    defaultOpen = false,
  } = props;
  const isDarkMode: any = useSelector(themeData).darkmode;
  const { Panel } = Collapse;

  const Maincontent = () => {
    return (
      <StackContainer fluid={fluid}>
        {(label || rightHeader) && !panel ? (
          <StackHeader fluid={fluid}>
            <Text
              variant="title"
              color={
                isDarkMode ? "var(--clr-white-primary)" : "var(--clr-black)"
              }
            >
              {label}
            </Text>
            <RightHeader>{rightHeader}</RightHeader>
          </StackHeader>
        ) : null}
        <Content>{children}</Content>
      </StackContainer>
    );
  };

  if (panel) {
    return (
      <Collapse defaultActiveKey={[defaultOpen && label]}>
        <Panel style={{ fontSize: 15 }} header={label} key={label}>
          <Maincontent />
        </Panel>
      </Collapse>
    );
  }

  return <Maincontent />;
};

Card.Stack = CardStack;

export default Card;
