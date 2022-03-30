import circlePlusIcon from "./../../icons/circlePlus.svg";
import "./AddBoard.css";

export default function AddBoard() {
  return (
    <div className="addBoard_wrapper">
      <img src={circlePlusIcon} alt="Add Board"/>
      <p>CREATE NEW BOARD</p>
    </div>
  );
}