import {
  CalendarOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import PremierLeague from '../../assets/Images/Premier-League.png';
import UserBetList from '../../modules/match-bet/components/UserBetList/UserBetList';

type Props = {};

const MatchBetPage = (props: Props) => {
  const [isMobile, setMatches] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [userChooseList, setUserChooseList] = useState('');

  const openModalPeople = (id: string) => {
    setModalVisible(true);
    setUserChooseList(id);
  };

  const [teamChoose, setTeamChoose] = useState('');

  useEffect(() => {
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  const chooseTeamHandler = (id: string) => {
    setTeamChoose(id);
    console.log(id);
  };

  const classTeamHomeChoose = `${
    teamChoose === 'teamHome' ? 'bet-active' : ''
  } `;
  const classDrawChoose = `${teamChoose === 'draw' ? 'bet-active' : ''} `;

  const classTeamAwayChoose = `${
    teamChoose === 'teamAway' ? 'bet-active' : ''
  } `;

  const modalTitle = `People bet ${userChooseList}`;

  return (
    <>
      <Modal
        title={modalTitle}
        centered
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <UserBetList />
      </Modal>

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
              {/* handicap */}
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
                  <div
                    className="bet-team__people bet-team__people--home"
                    onClick={openModalPeople.bind(this, 'teamHome')}
                  >
                    <div className="bet-team__people--button bet-team__people--button--home">
                      <UserOutlined />
                      <span className="bet-team__people--button__number">
                        0
                      </span>
                    </div>
                  </div>
                  <div
                    className="bet-team__container bet-team__container--home"
                    onClick={chooseTeamHandler.bind(this, 'teamHome')}
                  >
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
                      <div className={classTeamHomeChoose}>
                        <div className="team-choose__container team-choose--home">
                          <div className="team-choose__flex-container team-choose__flex-container--home">
                            <span>Vitesse</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* Draw */}
                <div className="draw">
                  <div className="draw__bet">
                    <div
                      className="bet-team__people bet-team__people--draw"
                      onClick={openModalPeople.bind(this, 'draw')}
                    >
                      <div className="bet-team__people--button bet-team__people--button--draw">
                        <UserOutlined />
                        <span className="bet-team__people--button__number">
                          0
                        </span>
                      </div>
                    </div>
                    {!isMobile && (
                      <div
                        className="draw__bet--container"
                        onClick={chooseTeamHandler.bind(this, 'draw')}
                      >
                        <div className={classDrawChoose}>
                          <div className="team-choose__container">
                            <div className="team-choose__flex-container team-choose__flex-container--draw">
                              <span>Draw</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {isMobile && <span className="draw__bet--label">Draw</span>}
                  </div>
                </div>
                {/* Team away */}
                <div className="bet-team bet-team--away">
                  <div
                    className="bet-team__people bet-team__people--away"
                    onClick={openModalPeople.bind(this, 'teamAway')}
                  >
                    <div className="bet-team__people--button bet-team__people--button--away">
                      <UserOutlined />
                      <span className="bet-team__people--button__number">
                        0
                      </span>
                    </div>
                  </div>
                  <div
                    className="bet-team__container bet-team__container--away"
                    onClick={chooseTeamHandler.bind(this, 'teamAway')}
                  >
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
                      <div className={classTeamAwayChoose}>
                        <div className="team-choose__container">
                          <div className="team-choose__flex-container team-choose__flex-container--away">
                            <span>Roma</span>
                          </div>
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
                    <div className={classTeamHomeChoose}>
                      <div
                        className="team-choose__container"
                        onClick={chooseTeamHandler.bind(this, 'teamHome')}
                      >
                        <div className="team-choose__flex-container team-choose__flex-container--home">
                          <span>Vitesse</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="match-bet-content__bet-line-break__item">
                    <div className={classDrawChoose}>
                      <div
                        className="team-choose__container"
                        onClick={chooseTeamHandler.bind(this, 'draw')}
                      >
                        <div className="team-choose__flex-container team-choose__flex-container--draw">
                          <span>Draw</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="match-bet-content__bet-line-break__item">
                    <div className={classTeamAwayChoose}>
                      <div
                        className="team-choose__container"
                        onClick={chooseTeamHandler.bind(this, 'teamAway')}
                      >
                        <div className="team-choose__flex-container team-choose__flex-container--away">
                          <span>Roma</span>
                        </div>
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
                      style={{ width: '36%' }}
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
    </>
  );
};

export default MatchBetPage;
