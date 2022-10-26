import "./App.css";
import Content from "./Components/Content/Content";
import Navigation from "./Components/Navigation/Navigation";

import Player from "./Components/Player/Player";

function App() {
  // return <Player />;
  return (
    <div className="wrapper">
      <Navigation />
      <Content />
    </div>
  );
}

export default App;
