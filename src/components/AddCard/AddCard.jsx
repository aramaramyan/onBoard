import { useRef, useState } from "react";
import { addCard } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import {v4} from "uuid";
import plusIcon from "../../icons/plus.svg";
import closeIcon from "../../icons/close.svg";
import "./AddCard.css";

export default function AddCard({list}) {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter Card Title...");
  const textarea = useRef();
  const dispatch = useDispatch();

  function handleIsAdding() {
    setIsAdding(!isAdding);
  }

  function textareaHandler(val) {
    setTitle(val);
  }

  function addCardToList() {
    if(title) {
      const action = {
        boardID: list.boardID,
        listID: list.id,
        id: v4().slice(0, 8),
        title,
      };
      dispatch(addCard(action));
      setTitle("");
      setPlaceholder("Enter Card Title...");
      handleIsAdding();
    } else {
      setPlaceholder("Title Is Required!");
    }
  }

  return isAdding ? (
        <div className="addCard_textarea_wrapper">
          <textarea
            cols="22"
            rows="4"
            ref={textarea}
            value={title}
            placeholder={placeholder}
            onChange={evt => textareaHandler(evt.target.value)}
          />
          <div className="addCard_textarea_wrapper_actions">
            <button onClick={addCardToList}>Add Card</button>
            <img
              src={closeIcon}
              alt="Close Icon"
              className="addCard_icon"
              onClick={handleIsAdding}
            />
          </div>
        </div>
      ) : (
        <div className="addCard_wrapper" onClick={handleIsAdding}>
          <img src={plusIcon} alt="Plus Icon" className="addCard_icon"/>
          <p>Add a card</p>
        </div>
      )
}