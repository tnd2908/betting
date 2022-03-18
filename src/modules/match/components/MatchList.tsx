import { Row } from "antd";
import React from "react";
import MatchItem from "./MatchItem";

type Props = {};

const MatchList = (props: Props) => {
  return (
    <div className="match-list">
      <Row gutter={[24, 24]}>
        <MatchItem />
        <MatchItem />
        <MatchItem />
        <MatchItem />
        <MatchItem />
        <MatchItem />
        <MatchItem />
      </Row>
    </div>
  );
};

export default MatchList;
