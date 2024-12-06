import { Button, Input } from "antd";
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
        disableContentMargin={true}
        menuDataRender={() => [
          {
            path: "/",
            name: "Transactions",
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
          <div style={{ color: "white", backgroundColor: "red" }}>{defaultDom}</div> // White color for menu item text
        )}
      >
        <PageContainer
          content="Track and tag all paid expenses in your organization"
          tabList={[
            {
              tab: "Invoices",
              key: "invoice",
            },
            {
              tab: "Reimbursements",
              key: "reimbursements",
            },
          ]}
          extra={[<Button key="goToSettings">Manage settings</Button>]}
        >
          <div>
            <Button key="changeView">View: Default</Button>
            <Button key="changeView">View: Default</Button>
          </div>
          <div>
            <p>testing table</p>
          </div>
        </PageContainer>
      </ProLayout>
    </>
  );
}

export default App;