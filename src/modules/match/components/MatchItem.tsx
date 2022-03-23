import React from "react";
import { Link } from "react-router-dom";

import {
  PauseCircleOutlined
} from '@ant-design/icons';

import { Col } from "antd";
import { IMatchItem } from "../interfaces/match";

type Props = {
  data: IMatchItem
};

const MatchItem = (props: Props) => {
  const { data } = props;
  const dateTime = data.startTime.split(" ");
  return (
    <Col xxl={8} xl={12} lg={24} md={12} sm={24} xs={24}>
      <div className="match-item">
        <Link to="/matches/abc" className="match-item__link" />
        <div className="match-item__league">
          <i className="match-item__league__icon">
            <img src={data.league.logo} alt="logo" />
          </i>
          {data.league.name}
        </div>
        <div className="match-item__team match-item__team--home">
          <div className="match-item__team__logo">
            <img
              loading="lazy"
              alt="team"
              src={data.teams[0].logo}
            />
          </div>
          <h3 className="match-item__team__name">{data.teams[0].name}</h3>
        </div>
        <div className="match-item__info">
          <div className="match-item__info__time">
            <span>{dateTime[0]}</span>
          </div>
          {data.status === 2 && 
            <div className="match-item__info__score">
              <span>2</span>
              <span className="match-item__info__score--pain"> : </span>
              <span>0</span>
            </div>}
          {data.status === 1 && 
            <div className="match-item__info__live">
              <PauseCircleOutlined />
              <span>Live</span>
            </div>}
          <div className="match-item__info__date">
            <span>{dateTime[1]}</span>
          </div>
        </div>
        <div className="match-item__team match-item__team--away">
          <div className="match-item__team__logo">
            <img
              loading="lazy"
              alt="team"
              src={data.teams[1].logo}
            />
          </div>
          <h3 className="match-item__team__name">{data.teams[1].name}</h3>
        </div>
      </div>
    </Col>
  );
};

export default MatchItem;
