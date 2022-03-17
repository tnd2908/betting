import React, { useEffect, useState } from "react";

import { Row, Col } from "antd";

import {
  UserOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import PremierLeague from "../../Assets/Images/Premier-League.png";

type Props = {};

const MatchBetPage = (props: Props) => {
  const [isMobile, setMatches] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  console.log(isMobile);
  return (
    <div className="match-bet-page-content">
      <div className="match-bet-page-content__match">
        <h1 className="match-bet-page-content__match--name">
          BRIGHTON & HOVE ALBION VS LIVERPOOL
        </h1>
        <h2 className="match-bet-page-content__match--time">
          <ClockCircleOutlined /> 19:30
        </h2>
        <h2 className="match-bet-page-content__match--time">
          <CalendarOutlined /> 12/03/2022
        </h2>
      </div>
      <div className="match-bet">
        <div className="match-bet__container">
          <div className="match-bet__league">
            <i className="match-bet__league--icon">
              <img src={PremierLeague} alt="logo" />
            </i>
            UEFA Europa Conference League
          </div>
          <div className="match-bet-content">
            {/* Header */}
            <div className="match-bet-content__header match-bet-content__header--main">
              <div className="match-bet-content__header--main__score">
                <span>0</span>
              </div>
              <div className="match-bet-content__header--main__countdown">
                <span className="match-bet-content__header--main__countdown--title">
                  Upcoming Match
                </span>
                <strong className="match-bet-content__header--main__countdown--time">
                  03 : 52 : 11
                </strong>
              </div>
              <div className="match-bet-content__header--main__score">
                <span>0</span>
              </div>
            </div>
            {/* Header sub */}
            <div className="match-bet-content__header match-bet-content__header--sub">
              <div className="match-bet-content__header--sub__score">
                <span>0</span>
              </div>
              <div className="match-bet-content__header--sub__title">
                <span>Handicap</span>
              </div>
              <div className="match-bet-content__header--sub__score">
                <span>0</span>
              </div>
            </div>
            {/* Bet line */}
            <div className="match-bet-content__bet-line">
              {/* Team home */}
              <div className="bet-team bet-team--home">
                <div className="bet-team__people bet-team__people--home">
                  <div className="bet-team__people--button bet-team__people--button--home">
                    <UserOutlined />
                    <span className="bet-team__people--button__number">0</span>
                  </div>
                </div>
                <div className="bet-team__container bet-team__container--home">
                  <div className="team-container">
                    <div className="team-container__logo team-container__logo--home">
                      <img
                        loading="lazy"
                        alt="team"
                        src="https://api.sofascore.com/api/v1/team/2958/image"
                      />
                    </div>
                  </div>
                  {!isMobile && (
                    <div className="team-choose__container team-choose--home">
                      <div className="team-choose__flex-container team-choose__flex-container--home">
                        <span>Vitesse</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Draw */}
              <div className="draw">
                {!isMobile && (
                  <div className="draw__bet">
                    <span className="draw__bet--label">Draw</span>
                    <div className="draw__bet--container">
                      <div className="team-choose__container">
                        <div className="team-choose__flex-container team-choose__flex-container--draw">
                          <span>Draw</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Team away */}
              <div className="bet-team bet-team--away bet-active">
                <div className="bet-team__people bet-team__people--away">
                  <div className="bet-team__people--button bet-team__people--button--away">
                    <UserOutlined />
                    <span className="bet-team__people--button__number">0</span>
                  </div>
                </div>
                <div className="bet-team__container bet-team__container--away">
                  <div className="team-container">
                    <div className="team-container__logo team-container__logo--away">
                      <img
                        loading="lazy"
                        alt="team"
                        src="https://api.sofascore.com/api/v1/team/2702/image"
                      />
                    </div>
                  </div>
                  {!isMobile && (
                    <div className="team-choose__container">
                      <div className="team-choose__flex-container team-choose__flex-container--away">
                        <span>Roma</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Bet line break */}
            {isMobile && (
              <div className="match-bet-content__bet-line-break">
                <div className="match-bet-content__bet-line-break__item">
                  <div className="team-choose__container">
                    <div className="team-choose__flex-container team-choose__flex-container--home">
                      <span>Vitesse</span>
                    </div>
                  </div>
                </div>
                <div className="match-bet-content__bet-line-break__item">
                  <div className="team-choose__container">
                    <div className="team-choose__flex-container team-choose__flex-container--draw">
                      <span>Draw</span>
                    </div>
                  </div>
                </div>
                <div className="match-bet-content__bet-line-break__item bet-active">
                  <div className="team-choose__container">
                    <div className="team-choose__flex-container team-choose__flex-container--away">
                      <span>Roma</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Footer */}
            <div className="match-bet-content__footer">
              <div className="match-bet-content__winning-rate">
                <span className="text-red-faint font-black italic">36%</span>
                <div className="match-bet-content__winning-rate__progress-bar">
                  <span
                    className="match-bet-content__winning-rate__progress-bar--value"
                    style={{ width: "36%" }}
                  ></span>
                </div>
                <span className="text-blue-faint font-black italic">64%</span>
              </div>
              <div className="match-bet-content__bet-action">
                <div className="match-bet-content__bet-action__amount">
                  <span>500.000 vnd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchBetPage;
