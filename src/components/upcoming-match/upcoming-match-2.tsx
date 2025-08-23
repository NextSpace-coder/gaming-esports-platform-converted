import { NavLink } from "react-router-dom";



const upcomingMatchData = [
  {
    id: 1,
    leftTeamLogo: '/assets/img/others/match-logo3-1.png',
    streamOn: ["facebook-f", "discord", "vimeo", "youtube"],
    leftTeamName: "MARVEL STADIUM",
    gameName: "CALL OF DUTY Live Stream",
    rightTeamLogo: '/assets/img/others/match-logo3-2.png',
    rightTeamName: "MARVEL STADIUM",
    time: "7:00 Pm - 4:00 Am Cet",
    day: "Monday",
  },
  {
    id: 2,
    leftTeamLogo: '/assets/img/others/match-logo3-3.png',
    streamOn: ["facebook-f", "discord", "vimeo", "youtube"],
    leftTeamName: "MARVEL STADIUM",
    gameName: "CALL OF DUTY Live Stream",
    rightTeamLogo: '/assets/img/others/match-logo3-4.png',
    rightTeamName: "MARVEL STADIUM",
    time: "7:00 Pm - 4:00 Am Cet",
    day: "Tuesday",
  },
  {
    id: 3,
    leftTeamLogo: '/assets/img/others/match-logo3-5.png',
    streamOn: ["facebook-f", "discord", "vimeo", "youtube"],
    leftTeamName: "MARVEL STADIUM",
    gameName: "CALL OF DUTY Live Stream",
    rightTeamLogo: '/assets/img/others/match-logo3-6.png',
    rightTeamName: "MARVEL STADIUM",
    time: "7:00 Pm - 4:00 Am Cet",
    day: "Friday",
  },
];

const UpcomingMatchesTwo = () => {
  return (
    <section
      className="upcoming-match__area3 section-pt-170 section-pb-120 bg-img-cover bg-img-center"
      style={{ backgroundImage: "url(/assets/img/bg/match_bg3.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__title text-center mb-60 title-shape-none">
              <span className="sub-title2">Upcoming Schedule</span>
              <h3 className="title2">
                My STREAM{" "}
                <span className="text-theme d-inline-block position-relative">
                  <img
                    className="section-line"
                    src="/assets/img/others/section-line.png"
                    alt="img"
                  />
                  TIMETABLE
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          {upcomingMatchData.map((match) => (
            <div className="col-12" key={match.id}>
              <div className="upcoming-match__item2">
                <div className="upcoming-match__wrap">
                  <div className="upcoming-match__team team-left">
                    <NavLink to="/team-details">
                      <img src={match.leftTeamLogo} alt="Team Logo" />
                    </NavLink>
                  </div>
                  <div className="upcoming-match__content">
                    <div className="team--info info-left">
                      <span className="social-wrap">
                        <span>Stream On: </span>
                        {match.streamOn.map((icon, index) => (
                          <a href="#" key={index}>
                            <i className={`fab fa-${icon}`}></i>
                          </a>
                        ))}
                      </span>
                      <h3 className="name">
                        <NavLink to="/team-details">{match.leftTeamName}</NavLink>
                      </h3>
                    </div>
                    <div className="upcoming-match__versus">
                      <h2 className="versus">V/S</h2>
                    </div>
                    <div className="team--info info-right">
                      <span className="game-name">{match.gameName}</span>
                      <h3 className="name">
                        <NavLink to="/team-details">{match.rightTeamName}</NavLink>
                      </h3>
                    </div>
                  </div>
                  <div className="upcoming-match__team team-right">
                    <NavLink to="/team-details">
                      <img src={match.rightTeamLogo} alt="Team Logo" />
                    </NavLink>
                  </div>
                </div>
                <div className="upcoming-match__date">
                  <span>{match.time}</span>
                </div>
                <div className="upcoming-match__day">
                  <span>{match.day}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatchesTwo;
