import circlePlusIcon from "./../../icons/circlePlus.svg";
import "./AddBoard.css";

export default function AddBoard({ toggleModal }) {
  return (
    <div className="addBoard_wrapper" onClick={toggleModal}>
      <img src={circlePlusIcon} alt="Add Board"/>
      <p>CREATE NEW BOARD</p>
    </div>
  );
}