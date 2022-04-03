import {useState} from "react";
import closeIcon from "./../../icons/close.svg";
import plusIcon from "./../../icons/plus.svg";
import "./AddList.css";

export default function AddList() {
  const [isAdding, setIsAdding] = useState(false);

  function handleIsAdding() {
    setIsAdding(!isAdding);
  }

  return (
    isAdding ? (
      <div className="addList_input_wrapper">
        <input type="text" placeholder="Enter List Title..."/>
        <div className="addList_input_wrapper_actions">
          <button>Add List</button>
          <img
            src={closeIcon}
            alt="Close Icon"
            className="close_icon"
            onClick={handleIsAdding}
          />
        </div>
      </div>
    ) : (
      <div className="addList_wrapper" onClick={handleIsAdding}>
        <img src={plusIcon} alt="Plus Icon" className="plus_icon"/>
        <p>Add List</p>
      </div>
    ));
}