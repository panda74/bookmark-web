import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, ConfigProvider ,Avatar, Space } from "antd";
import type { MenuProps } from "antd";
import Github from '@/assets/github.svg?react';

const { Header, Sider, Content, Footer } = Layout;
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const items: MenuProps["items"] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `测试超长导航相kkkk ${index + 1}`,
  }));
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#fabb5c",
        },
      }}
    >
      <Layout className="h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="h-full flex flex-col">
            <div className="h-16  px-6 overflow-hidden py-4 whitespace-nowrap text-xl flex">
              <img src="/logo.png" className="inline-block w-8 h-8 " />
              <span
                className={`ml-2  text-gray-50 leading-8 font-serif font-semibold ${collapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
              >
                书签导航
              </span>
            </div>
            <Menu
              className="overflow-auto flex-1 py-2"
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={items}
            />
            <Space size={16} className="h-9 px-4 py-2">
              <a href="https://github.com/panda74/bookmark-web" target="_blank">
              <Avatar shape="square" icon={<Github />} />
              </a>
            </Space>
          </div>
        </Sider>
        <Layout>
          <Header className="bg-slate-50">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="text-base w-16 h-16"
            />
          </Header>
          <Content className="bg-slate-50 mt-4 rounded-lg py-4 pl-12 pr-4 mx-2">
            Content
          </Content>
          <Footer className="text-center p-2">
            书签导航 ©{new Date().getFullYear()} Created by <a href="https://github.com/panda74" target="_blank">Panda74</a>
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
