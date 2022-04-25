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
  const [placeholder, setPlaceholder] = useState("Enter List Title...")
  const dispatch = useDispatch();

  function handleIsAdding() {
    setIsAdding(!isAdding);
  }

  function handleTitle(val) {
    setTitle(val);
  }

  function addListToBoard() {
    if(title) {
      const action = {
        boardID,
        id: v4().slice(0, 8),
        title,
        cards: []
      };
      dispatch(addList(action));
      setTitle("");
      setPlaceholder("Enter List Title...");
      handleIsAdding();
    } else {
      setPlaceholder("Title Is Required!");
    }
  }

  return (
    isAdding ? (
      <div className="addList_input_wrapper">
        <input
          type="text"
          value={title}
          placeholder={placeholder}
          onChange={(evt) => handleTitle(evt.target.value)}
        />
        <div className="addList_input_wrapper_actions">
          <button onClick={() => addListToBoard()}>Add List</button>
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