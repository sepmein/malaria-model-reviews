import React from "react";
import { Layout, Menu } from "antd";
import "./App.css";
import fetchGraphQL from './fetchGraphQL';

const { Header, Footer, Sider, Content } = Layout;
const { useState, useEffect } = React

function App() {
  const [name, setName] = useState(null);
  // When the component mounts we'll fetch a repository name
  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query RepositoryNameQuery {
        # feel free to change owner/name here
        repository(owner: "facebook" name: "relay") {
          name
        }
      }
    `).then(response => {
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const data = response.data;
      setName(data.repository.name);
    }).catch(error => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, [fetchGraphQL]);


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
        <p>{name != null?`Repository: ${name}`: "Loading"}</p>
      </Content>
      <Footer>Design and created by zhangc@who.int</Footer>
    </Layout>
  );
}

export default App;
