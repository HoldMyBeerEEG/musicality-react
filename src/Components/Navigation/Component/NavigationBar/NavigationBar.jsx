import "./NavigationBar.scss";

import home from "../../../../images/Home.svg";
import search from "../../../../images/Search.svg";
import library from "../../../../images/Library.svg";

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <div className="navigation-bar-box">
        <img src={home} alt="home" />
        <p>Home</p>
      </div>
      <div className="navigation-bar-box">
        <img src={search} alt="search" />
        <p>Search</p>
      </div>
      <div className="navigation-bar-box">
        <img src={library} alt="library" />
        <p>Library</p>
      </div>
    </div>
  );
}
export default NavigationBar;
