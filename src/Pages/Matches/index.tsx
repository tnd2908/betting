import React from "react";

import { Layout, Menu, Radio, Checkbox, Row, Col } from "antd";
import { GlobalOutlined, TeamOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const MatchesPage = () => {
  return (
    <Layout className="site-layout-background">
      <Sider
        className="site-layout-background"
        width={300}
        style={{
          overflow: "auto",
          position: "fixed",
          height: "100vh",
          top: "0",
          paddingTop: "64px",
          background: "black",
          zIndex: 2,
        }}
      >
        <Menu mode="inline" style={{ height: "100%", color: "black" }}>
          <SubMenu key="sub1" icon={<GlobalOutlined />} title="League">
            <Radio.Group style={{ padding: "30px" }}>
              <Row gutter={[0, 24]}>
                <Col span={24}>
                  <Radio value="a">All</Radio>
                </Col>
                <Col span={24}>
                  <Radio value="b">UEFA</Radio>
                </Col>
                <Col span={24}>
                  <Radio value="c">PREMIER</Radio>
                </Col>
                <Col span={24}>
                  <Radio value="d">Laliga</Radio>
                </Col>
              </Row>
            </Radio.Group>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Checkbox.Group
              style={{ width: "100%", color: "black", padding: "30px" }}
            >
              <Row gutter={[0, 24]}>
                <Col span={24}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="B">B</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="B">B</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="B">B</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </SubMenu>
        </Menu>
      </Sider>
      <Content style={{ paddingLeft: "300px" }}>
        {/* <ListMatches /> */}
      </Content>
    </Layout>
  );
};

export default MatchesPage;
