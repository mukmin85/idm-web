import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

import Api from "services/api";

// router
import { useNavigate, useLocation, Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, themeData } from "../../redux/slices/theme";
import {
  setUserData,
  commonData,
  setUserMenu,
  logOut,
} from "redux/slices/common";

// styles, assets
import {
  LayoutHeaderContainer,
  LogoContainer,
  AvatarContainer,
  LayoutTimeStamp,
  ImgContainer,
  SubHeader,
  ToggleButton,
  ToggleBtnWrap,
  CustomMenu,
} from "./styled";

// component
import { Text, TimeDisplay, Divider, NotificationCol } from "../../components";

// antd
import { Layout, Avatar, Breadcrumb, Switch, Popover } from "antd";
import {
  LogoutOutlined,
  NotificationFilled,
  SolutionOutlined,
} from "@ant-design/icons";

const { Content, Footer, Sider } = Layout;

interface LayoutProp {
  children: JSX.Element | null;
}

function BaseLayout({ children }: LayoutProp) {
  const isDarkMode: any = useSelector(themeData).darkmode;
  const sharedData: any = useSelector(commonData);

  const navigate = useNavigate();
  const [collapse, setCollapse] = useState(true);
  const location = useLocation();
  const [menuList, setMenuList]: any[] = useState([]);
  const [notificationList, setNotificationList] = useState([]);

  const getnotification = async () => {
    const { data } = await Api({ url: "/server/notifications", type: "GET" });
    setNotificationList(data);
  };

  const handleCollapse = () => {
    setCollapse(!collapse);
    const btn: any = document.getElementById("toggleBtn");
    if (!collapse) {
      btn.style.transform = "rotate(" + 0 + "deg)";
    } else if (collapse) {
      btn.style.transform = "rotate(" + 180 + "deg)";
    }
  };

  const getUserData = async () => {
    // if (sharedData?.userData?.UserUuid && sharedData?.menu?.length > 0) {
    //   // filter and map the menu
    //   const singleItems = sharedData?.menu.filter((menuFilter) => {
    //     return (
    //       menuFilter.ParentMenuId === "" &&
    //       menuFilter.MenuPath !== "" &&
    //       menuFilter.MenuElement !== ""
    //     );
    //   });
    //   const nestedItems = sharedData?.menu
    //     .filter((menuFilter) => {
    //       return (
    //         menuFilter.ParentMenuId === "" &&
    //         menuFilter.MenuPath === "" &&
    //         menuFilter.MenuElement === ""
    //       );
    //     })
    //     .map((menuMap) => {
    //       const MenuChilds = sharedData?.menu.filter((menuFilter) => {
    //         return menuFilter.ParentMenuId === menuMap.MenuId;
    //       });
    //       return { ...menuMap, MenuChilds };
    //     });

    //   // push each data into item of menu
    //   const items: any[] = [];
    //   for (const singleItem of singleItems) {
    //     const item = {
    //       label: <Link to={singleItem.MenuPath}>{singleItem.MenuText}</Link>,
    //       key: singleItem.MenuId,
    //       icon: <SolutionOutlined />, // may need to add MenuIcon
    //     };
    //     items.push(item);
    //   }
    //   for (const nestedItem of nestedItems) {
    //     const childItems: any[] = [];
    //     if (nestedItem.MenuChilds.length > 0) {
    //       for (const nestedItemMenuChild of nestedItem.MenuChilds) {
    //         if (nestedItemMenuChild.disabled) continue;
    //         const childItem = {
    //           label: (
    //             <Link to={nestedItemMenuChild.MenuPath}>
    //               {nestedItemMenuChild.MenuText}
    //             </Link>
    //           ),
    //           key: nestedItemMenuChild.MenuId,
    //         };
    //         childItems.push(childItem);
    //       }
    //     }
    //     const item = {
    //       label: nestedItem.MenuText,
    //       key: nestedItem.MenuId,
    //       icon: <SolutionOutlined />, // may need to add MenuIcon
    //       children: childItems,
    //     };
    //     items.push(item);
    //   }
    //   setMenuList(items);
    // } else {
    const { data } = await axios.get("http://localhost:8080/server/paths");
    const { Menus, UserProfile } = data;
    dispatch(setUserData({ userData: UserProfile }));
    dispatch(setUserMenu({ menu: Menus }));

    // filter and map the menu
    const singleItems = Menus.filter((menuFilter) => {
      return (
        menuFilter.ParentMenuId === "" &&
        menuFilter.MenuPath !== "" &&
        menuFilter.MenuElement !== ""
      );
    });
    const nestedItems = Menus.filter((menuFilter) => {
      return (
        menuFilter.ParentMenuId === "" &&
        menuFilter.MenuPath === "" &&
        menuFilter.MenuElement === ""
      );
    }).map((menuMap) => {
      const MenuChilds = Menus.filter((menuFilter) => {
        return menuFilter.ParentMenuId === menuMap.MenuId;
      });
      return { ...menuMap, MenuChilds };
    });

    // push each data into item of menu
    const items: any[] = [];
    for (const singleItem of singleItems) {
      const item = {
        label: <Link to={singleItem.MenuPath}>{singleItem.MenuText}</Link>,
        key: singleItem.MenuId,
        icon: <SolutionOutlined />, // may need to add MenuIcon
      };
      items.push(item);
    }
    for (const nestedItem of nestedItems) {
      const childItems: any[] = [];
      if (nestedItem.MenuChilds.length > 0) {
        for (const nestedItemMenuChild of nestedItem.MenuChilds) {
          if (nestedItemMenuChild.disabled) continue;
          const childItem = {
            label: (
              <Link to={nestedItemMenuChild.MenuPath}>
                {nestedItemMenuChild.MenuText}
              </Link>
            ),
            key: nestedItemMenuChild.MenuId,
          };
          childItems.push(childItem);
        }
      }
      const item = {
        label: nestedItem.MenuText,
        key: nestedItem.MenuId,
        icon: <SolutionOutlined />, // may need to add MenuIcon
        children: childItems,
      };
      items.push(item);
    }
    setMenuList(items);
    // }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    getnotification();
  }, []);

  // Switch Mode
  const dispatch = useDispatch();
  const getDarkMode: any = useSelector(themeData)?.darkmode;
  const handleMode = () => {
    dispatch(setDarkMode());
  };

  if (location.pathname === "/login" || location.pathname === "/") {
    return <>{children}</>;
  }

  const content = () => {
    return <NotificationCol notifications={notificationList} />;
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider breakpoint="sm" collapsedWidth="50" collapsed={collapse}>
        <ToggleBtnWrap>
          <ToggleButton
            id="toggleBtn"
            collapse={collapse.toString()}
            onClick={() => handleCollapse()}
          />
        </ToggleBtnWrap>
        <LogoContainer>
          {!collapse && (
            <img
              src={require("assets/imigresen_logo.png")}
              style={{ width: "65px", height: "71px", margin: "5px 0" }}
              alt="img"
            />
          )}
          {!collapse && (
            <div style={{ height: 30, marginTop: 10 }}>
              Jabatan Imigresen Malaysia
            </div>
          )}
          {collapse && <div style={{ height: 30, marginTop: 10 }} />}
          <div style={{ fontSize: 6, margin: "3px auto" }}>
            {process.env.REACT_APP_VERSION}
          </div>
        </LogoContainer>

        <CustomMenu
          collapse={collapse.toString()}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          items={menuList}
        />
      </Sider>
      <Layout>
        <LayoutHeaderContainer>
          <ImgContainer>
            <img
              src={
                isDarkMode
                  ? require("assets/niise_logo_white.png")
                  : require("assets/niise_logo.png")
              }
              alt="img"
            />
          </ImgContainer>
          <AvatarContainer>
            {/* disable for now only show notifications */}
            {/* <FlagFilled
              onClick={() => navigate("/")}
              style={{ fontSize: "20px", marginRight: "20px" }}
            /> */}
            <Popover
              placement="bottomRight"
              title="Notifikasi"
              content={content}
              trigger="click"
            >
              <NotificationFilled
                style={{ fontSize: "20px", marginRight: "40px" }}
              />
            </Popover>

            <Switch
              checkedChildren={
                <div style={{ flex: 1, flexDirection: "row" }}>
                  <Text variant="button" color="white">
                    Dark
                  </Text>
                </div>
              }
              unCheckedChildren={
                <Text variant="button" color="black">
                  Light
                </Text>
              }
              checked={getDarkMode}
              onChange={handleMode}
              style={{
                marginRight: "20px",
                backgroundColor: getDarkMode && "black",
                backgroundImage: "none",
              }}
            />
            <div style={{ marginRight: "10px" }}>
              <Text
                variant="link"
                color={
                  isDarkMode ? "var(--clr-white-primary)" : "var(--clr-black)"
                }
              >
                {sharedData?.userData?.Nama}
              </Text>
            </div>
            {/* disable for now no avatar  */}
            {/* <Avatar
              src={
                <img
                  alt="avatarimg"
                  src={require("assets/example_profile.png")}
                  style={{ width: 32 }}
                />
              }
            /> */}
            <LogoutOutlined
              onClick={async () => {
                console.log("-----logged out");
                await dispatch(logOut());
                navigate("/");
              }}
              style={{ fontSize: "20px", marginLeft: "20px" }}
            />
          </AvatarContainer>
        </LayoutHeaderContainer>
        <SubHeader>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              {location?.pathname?.slice(1)?.replace(/([A-Z])/g, " $1")}
            </Breadcrumb.Item>
          </Breadcrumb>
          <LayoutTimeStamp>
            <TimeDisplay />
            <div style={{ paddingInline: "10px" }}>|</div>
            <Text variant="link">
              {moment(new Date()).format("DD MMM YYYY")}
            </Text>
          </LayoutTimeStamp>
        </SubHeader>
        <Content style={{ margin: "25px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Hak Cipta Terpelihara © 2023
          <span>
            <img
              src={require("assets/imigresen_logo.png")}
              style={{ width: "28px", height: "32px", margin: "0px 30px" }}
              alt="img"
            />
          </span>
          <span>Jabatan Imigresen Malaysia</span>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default BaseLayout;
