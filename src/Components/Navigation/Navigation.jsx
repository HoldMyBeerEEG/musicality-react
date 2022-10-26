import Player from "../Player/Player";
import NavigationBar from "./Component/NavigationBar/NavigationBar";
import Tittle from "./Component/Tittle/Tittle";
import CurrentArtist from "./Component/СurrentArtist/CurrentArtist";
import "./Navigation.scss";

function Navigation() {
  return (
    <div className="block-navigation">
      <Tittle />
      <NavigationBar />
      <CurrentArtist />
      <Player />
    </div>
  );
}
export default Navigation;
