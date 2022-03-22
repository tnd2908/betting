import React from "react";
import { Link } from "react-router-dom";

import { Col } from "antd";

import PremierLeague from "../../../assets/Images/Premier-League.png";

type Props = {};

const MatchItem = (props: Props) => {
  return (
    <Col xxl={8} xl={12} lg={24} md={12} sm={24} xs={24}>
      <div className="match-item">
        <Link to="/matches/abc" className="match-item__link" />
        <div className="match-item__league">
          <i className="match-item__league--icon">
            <img src={PremierLeague} alt="logo" />
          </i>
          UEFA Europa Conference League
        </div>
        <div className="match-item__team match-item__team--home">
          <div className="match-item__team--logo">
            <img
              loading="lazy"
              alt="team"
              src="https://api.sofascore.com/api/v1/team/2958/image"
            />
          </div>
          <h3 className="match-item__team--name">Vitesse</h3>
        </div>
        <div className="match-item__info">
          <div className="match-item__info--time">
            <span>13:00</span>
          </div>
          <div className="match-item__info--time">
            <div>
              <span>2</span>
              <span> : </span>
              <span>0</span>
            </div>
          </div>
          <div className="match-item__info--date">
            <span>11/03/2022</span>
          </div>

        </div>
        <div className="match-item__team match-item__team--away">
          <div className="match-item__team--logo">
            <img
              loading="lazy"
              alt="team"
              src="https://api.sofascore.com/api/v1/team/2702/image"
            />
          </div>
          <h3 className="match-item__team--name">Roma</h3>
        </div>
      </div>
    </Col>
  );
};

export default MatchItem;
