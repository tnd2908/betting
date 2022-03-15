import { Col, Row, Drawer, Button } from "antd";
import React, { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import SidebarFilter from "./components/Filter";
import MatchItem from "./components/MatchItem";
import MatchList from "./components/MatchList";

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
      <Col xxl={4} xl={6} lg={7} md={0} sm={0} xs={0}>
        <div className="filter">
          <SidebarFilter />
        </div>
      </Col>
      <Col xxl={20} xl={18} lg={17} md={24} sm={24} xs={24}>
        <div className="matches-page-content">
          <div className="match-list-content">
            <h2 className="match-list-content__title match-list-content__title--up">
              Upcoming Match
            </h2>
            <MatchList />
          </div>

          <div className="match-list-content">
            <h2 className="match-list-content__title match-list-content__title--past">
              Past Match
            </h2>
            <MatchList />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MatchesPage;
