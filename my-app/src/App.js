import React from "react";
import { Layout, Menu } from "antd";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const { Header, Footer, Sider, Content } = Layout;
const PAPERS = gql`
  query GetPapers {
    papers(order_by: { created_at: desc }) {
      id
      publish_at
      title
      updated_at
      url
      created_at
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(PAPERS);
  return (
    <Layout>
      <Header>
        <div className="logo">Malaria Model Review</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Papers</Menu.Item>
          <Menu.Item key="2">Notions</Menu.Item>
          <Menu.Item key="3">Models</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer>Design and created by zhangc@who.int</Footer>
    </Layout>
  );
}

export default App;
