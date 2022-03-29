import { Col, Row, Drawer, Button } from "antd";
import React, { useEffect, useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import SidebarFilter from "../../modules/filter/components/Filter";
import MatchList from "../../modules/match/components/MatchList";
import { useDispatch, useSelector } from 'react-redux';
import { State } from "../../state-management/reducers";
import { getMatchListRequest } from "../../modules/match/state/actions";

const MatchesPage = () => {
  const dispatch = useDispatch();

  const [isTablet, setIsTablet] = useState(
    window.matchMedia('(max-width: 991px)').matches
  );
  const [visible, setVisible] = useState(false);

  const showSidebar = () => {
    setVisible(true);
  };
  const closeSidebar = () => {
    setVisible(false);
  };

  useEffect(() => {
    window
      .matchMedia('(max-width: 991px)')
      .addEventListener('change', (e) => setIsTablet(e.matches));
  }, []);

  const upcomingMatchList = useSelector((state: State) => state.match.upcomingMatchList);
  const liveMatchList = useSelector((state: State) => state.match.liveMatchList);
  const pastMatchList = useSelector((state: State) => state.match.pastMatchList);

  useEffect(() => {
    dispatch(getMatchListRequest());
  }, [dispatch]);

  return (
    <Row>
      {!visible && isTablet && (
        <Button
          type="primary"
          onClick={showSidebar}
          className="button-open-sidebar-filter"
        >
          <SettingOutlined />
        </Button>
      )}
      {isTablet && <Drawer
        title="Filter Matches"
        placement="right"
        onClose={closeSidebar}
        visible={visible}
        className="sidebar-filter"
      >
        <SidebarFilter />
      </Drawer>}
      <Col xxl={4} xl={6} lg={7} md={0} sm={0} xs={0}>
        {!isTablet &&
          <div className="filter">
            <SidebarFilter />
          </div>}
      </Col>
      <Col xxl={20} xl={18} lg={17} md={24} sm={24} xs={24}>
        <div className="matches-page-content">
          <div className="match-list-content">
            <h2 className="match-list-content__title match-list-content__title--up">
              Upcoming Match
            </h2>
            <MatchList matchList={upcomingMatchList} />
          </div>
          <div className="match-list-content">
            <h2 className="match-list-content__title match-list-content__title--past">
              Live Match
            </h2>
            <MatchList matchList={liveMatchList} />
          </div>
          <div className="match-list-content">
            <h2 className="match-list-content__title match-list-content__title--past">
              Past Match
            </h2>
            <MatchList matchList={pastMatchList} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MatchesPage;
