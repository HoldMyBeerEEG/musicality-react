import ButtonBack from "./ButtonBack/ButtonBack";
import ButtonForward from "./ButtonForward/ButtonForward";
import ButtonPlay from "./ButtonPlay/ButtonPlay";
import "./Buttons.scss";
import ButtonPause from "./ButtonPlay/ButtonPlay";

function Buttons() {
  return (
    <div className="buttons-panel">
      <ButtonBack />
      <ButtonPlay />
      <ButtonForward />
    </div>
  );
}
export default Buttons;
