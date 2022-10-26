import "./Notification.scss";

import clock from "../../../../images/Clock.svg";
import turnover from "../../../../images/Turnover.svg";
import setting from "../../../../images/Setting.svg";

function Notification() {
  return (
    <div className="block-notification">
      <div className="appeal">Good morning</div>
      <div className="buttons">
        <img src={clock} alt="clock" />
        <img src={turnover} alt="turnover" />
        <img src={setting} alt="setting" />
      </div>
    </div>
  );
}
export default Notification;
