import { Button } from "antd";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import { Layout } from "antd";
import { ProLayout, PageContainer } from "@ant-design/pro-components";
import { HomeOutlined, UserOutlined, GithubOutlined } from "@ant-design/icons";
import "./App.css";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <>
      <ProLayout
        title="My Application"
        logo="https://avatars.githubusercontent.com/u/19315843?s=200&v=4" // Replace with your logo URL
        layout="side" // Sidebar layout
        location={{ pathname: window.location.pathname }} // Make sure to sync with the current path
        menuDataRender={() => [
          {
            path: "/",
            name: "Home",
            icon: <HomeOutlined />,
          },
          {
            path: "/about",
            name: "About",
            icon: <UserOutlined />,
          },
          {
            path: "/contact",
            name: "Contact",
            icon: <GithubOutlined />,
          },
        ]}
        // Menu item styling
        menuItemRender={(menuItemProps, defaultDom) => (
          <div style={{ color: "white" }}>{defaultDom}</div> // White color for menu item text
        )}
      >
        <PageContainer
          content="Welcome to the ProLayout component"
          tabList={[
            {
              tab: "base information",
              key: "base",
            },
            {
              tab: "details",
              key: "info",
            },
          ]}
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary Action
            </Button>,
          ]}
        ></PageContainer>
      </ProLayout>
    </>
  );
}

export default App;
