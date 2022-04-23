import {useState} from "react";
import {useDispatch} from "react-redux";
import {addList} from "../../features/userSlice";
import closeIcon from "./../../icons/close_white.svg";
import plusWhiteIcon from "./../../icons/plus_white.svg";
import "./AddList.css";
import {v4} from "uuid";

export default function AddList({ boardID }) {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function handleIsAdding() {
    setIsAdding(!isAdding);
  }

  function handleTitle(val) {
    setTitle(val);
  }

  function addListToBoard(boardID, title) {
    const action = {
      boardID,
      id: v4().slice(0, 8),
      title,
      cards: []
    };
    dispatch(addList(action));
    setTitle("");
    handleIsAdding();
  }

  return (
    isAdding ? (
      <div className="addList_input_wrapper">
        <input
          type="text"
          value={title}
          placeholder="Enter List Title..."
          onChange={(evt) => handleTitle(evt.target.value)}
        />
        <div className="addList_input_wrapper_actions">
          <button onClick={() => addListToBoard(boardID, title)}>Add List</button>
          <img
            src={closeIcon}
            alt="Close Icon"
            className="close_icon"
            onClick={handleIsAdding}
          />
        </div>
      </div>
    ) : (
      <div className="addList_wrapper" onClick={handleIsAdding} >
        <img src={plusWhiteIcon} alt="Plus Icon" className="plus_icon"/>
        <p>Add List</p>
      </div>
    ));
}