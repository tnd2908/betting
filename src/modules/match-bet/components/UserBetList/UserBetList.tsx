import React from "react";
import UserBetItem from "../UserBetItem/UserBetItem";

import './style.scss'

type Props = {};

const UserBetList = (props: Props) => {
  return (
    <div className="user-bet-list">
      <UserBetItem />
      <UserBetItem />
      <UserBetItem />
      <UserBetItem />
      <UserBetItem />
      <UserBetItem />
      <UserBetItem />
      <UserBetItem />
      <UserBetItem />
      <UserBetItem />
      <UserBetItem />
      <UserBetItem />
      <UserBetItem />
    </div>
  );
};

export default UserBetList;
