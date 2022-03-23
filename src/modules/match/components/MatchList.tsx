import { Row } from "antd";
import React from "react";
import { IMatchItem } from "../interfaces/match";
import MatchItem from "./MatchItem";

type Props = {
  matchList: Array<IMatchItem>;
};

const MatchList = (props: Props) => {
  return (
    <div className="match-list">
      <Row gutter={[24, 24]}>
        {props.matchList.map((match) => <MatchItem key={match.id} data={match}/>)}
      </Row>
    </div>
  );
};

export default MatchList;
