import { Layout, Menu, Row } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteName } from "../routes";

const Navbar = () => {
  const router = useHistory();
  const { logout } = useActions();
  const { isAuth, user } = useTypedSelector((state) => state.authReducer);

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item onClick={logout} key={1}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal">
            <Menu.Item onClick={() => router.push(RouteName.LOGIN)} key={1}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
