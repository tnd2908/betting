import React from "react";
import "./style.scss";

type Props = {};

const UserBetItem = (props: Props) => {
  return (
    <div className="user-bet">
      <div className="user-bet__info">
        <div className="user-bet__info--avatar">
          <img src="https://joeschmoe.io/api/v1/random" alt="user" />
        </div>
        <div className="user-bet__info--name">Tran Trinh Hieu</div>
      </div>
      <div className="user-bet__time">10:00 19/12/2022</div>
    </div>
  );
};

export default UserBetItem;
