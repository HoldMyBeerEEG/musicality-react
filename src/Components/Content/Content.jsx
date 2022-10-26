import "./Content.scss";
import Registration from "./Components/Registration/Registration";
import Notification from "./Components/Notification/Notification";
import Genres from "./Components/Genres/Genres";

function Content() {
  return (
    <div className="block-content">
      <Registration />
      <Notification />
      <Genres />
    </div>
  );
}
export default Content;
