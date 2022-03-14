import { Col, Row, Drawer, Button } from "antd";
import React, { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import SidebarFilter from "./components/Filter";

const MatchesPage = () => {
  const [visible, setVisible] = useState(false);
  const showSidebar = () => {
    setVisible(true);
  };
  const closeSidebar = () => {
    setVisible(false);
  };
  return (
    <Row>
      <Col md={6} xs={0}>
        <div className="filter">
          <SidebarFilter />
        </div>
      </Col>
      <div>
        {!visible && (
          <Button
            type="primary"
            onClick={showSidebar}
            className="button-open-sidebar-filter"
          >
            <SettingOutlined />
          </Button>
        )}
        <Drawer
          title="Filter Matches"
          placement="right"
          onClose={closeSidebar}
          visible={visible}
          className="sidebar-filter"
        >
          <SidebarFilter />
        </Drawer>
      </div>
      <Col span={18}>List</Col>
    </Row>
  );
};

export default MatchesPage;
