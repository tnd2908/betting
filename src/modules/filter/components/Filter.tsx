import { GlobalOutlined, TeamOutlined } from '@ant-design/icons';
import { Checkbox, Col, Layout, Radio, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../state-management/reducers';
import { ILeagueFilter, ITeamFilter } from '../interface/filter';
import { chooseLeague, getLeagueListRequest } from '../state/actions';

type Props = {};

const SidebarFilter = (props: Props) => {
  const dispatch = useDispatch();

  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }
  const onChangeLeague = (e: any) => {
    const leagueId: string = e.target.value;
    dispatch(chooseLeague(leagueId));
  };

  const leagueList = useSelector((state: State) => state.filter.leagueList);
  const teamList = useSelector((state: State) => state.filter.teamList);

  useEffect(() => {
    dispatch(getLeagueListRequest());
  }, [dispatch]);

  const leagueListComponent = leagueList.map((item: ILeagueFilter) => (
    <Col span={24} key={item.id}>
      <Radio value={item.id} className="filter__radio">
        {item.name}
      </Radio>
    </Col>
  ));

  const teamListComponent = teamList.map((item: ITeamFilter) => (
    <Col span={24} key={item.id}>
      <Checkbox value={item.id} className="filter__checkbox">
        {item.name}
      </Checkbox>
    </Col>
  ));

  return (
    <>
      <div className="filter__title">
        <h3>
          <GlobalOutlined />
          League
        </h3>
      </div>
      <Radio.Group
        onChange={onChangeLeague}
        defaultValue="all"
        className="filter__group"
      >
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Radio value="all" className="filter__radio">
              All
            </Radio>
          </Col>
          {leagueListComponent}
        </Row>
      </Radio.Group>
      <div className="filter__title">
        <h3>
          <TeamOutlined />
          Team
        </h3>
      </div>
      <Checkbox.Group className="filter__group" onChange={onChange}>
        <Row gutter={[0, 24]}>{teamListComponent}</Row>
      </Checkbox.Group>
    </>
  );
};
export default SidebarFilter;
