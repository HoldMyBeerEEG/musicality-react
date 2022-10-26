import Buttons from "./Buttons/Buttons";
import StatusBar from "./StatusBar/StatusBar";
import "./Player.scss";

function Player() {
  return (
    <div className="player">
      <StatusBar />
      <Buttons />
    </div>
  );
}
export default Player;
