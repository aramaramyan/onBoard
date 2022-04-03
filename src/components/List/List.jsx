import {changeListTitle} from "../../features/userSlice";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import trashIcon from "./../../icons/trash.svg";
import plusIcon from "./../../icons/plus.svg";
import editIcon from "./../../icons/edit.svg";
import saveIcon from "./../../icons/save.svg";
import "./List.css";

export default function List({ boardID, list }) {
  const [title, setTitle] = useState(list.title);
  const [isTitleReadOnly, setIsTitleReadOnly] = useState(true);
  const titleInput = useRef();
  const dispatch = useDispatch()


  function handleTitle(val) {
    setTitle(val);
  }

  function titleReadOnlyHandler() {
    setIsTitleReadOnly(prev => !prev);
    titleInput.current.focus();
  }

  function saveTitle(boardID, id) {
    titleReadOnlyHandler();
    const action = {
      boardID,
      id,
      title,
    }
    dispatch(changeListTitle(action));
  }

  return (
    <div className="list_wrapper">
      <div className="list_header">
        <input
          ref={titleInput}
          type="text"
          value={title}
          readOnly={isTitleReadOnly}
          onChange={evt => handleTitle(evt.target.value)}
        />
        {isTitleReadOnly? (
          <img
            src={editIcon}
            alt="Edit Icon"
            className="list_header_icon"
            onClick={titleReadOnlyHandler}
          />
        ) : (
          <img
            src={saveIcon}
            alt="Save Icon"
            className="list_header_icon"
            onClick={() => {saveTitle(boardID, list.id)}}
          />
        )}
        <img src={trashIcon} alt="Trash Icon" className="list_header_icon"/>
      </div>
      <div className="cards_wrapper">
        {/*{list.cards.map()}*/}
      </div>
      <div className="list_footer">
        <img src={plusIcon} alt="Plus Icon" className="plus_icon"/>
        <p>Add a card</p>
      </div>
    </div>
  );
}