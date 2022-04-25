import {changeListTitle, deleteList} from "../../features/userSlice";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import trashIcon from "./../../icons/trash.svg";
import editIcon from "./../../icons/edit.svg";
import saveIcon from "./../../icons/save.svg";
import "./List.css";
import AddCard from "../AddCard/AddCard";
import Card from "../Card/Card";

export default function List({list, isModalOpen}) {
  const [title, setTitle] = useState(list.title);
  const [isTitleReadOnly, setIsTitleReadOnly] = useState(true);
  const titleInput = useRef();
  const dispatch = useDispatch();

  function handleTitle(val) {
    setTitle(val);
  }

  function titleReadOnlyHandler() {
    setIsTitleReadOnly(prev => !prev);
    titleInput.current.focus();
  }

  function saveTitle() {
    titleReadOnlyHandler();
    const action = {
      boardID: list.boardID,
      id: list.id,
      title,
    };
    dispatch(changeListTitle(action));
  }

  function delList() {
    const action = {
      boardID: list.boardID,
      id: list.id,
    };
    dispatch(deleteList(action));
  }

  return (
    <div className="list_column_wrapper">
      <div className={isModalOpen ? "list_wrapper_shake" : "list_wrapper swing"}>
        <div className="list_header">
          <input
            ref={titleInput}
            type="text"
            value={title}
            readOnly={isTitleReadOnly}
            onChange={evt => handleTitle(evt.target.value)}
          />
          {isTitleReadOnly ? (
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
              onClick={saveTitle}
            />
          )}
          <img
            src={trashIcon}
            alt="Trash Icon"
            className="list_header_icon"
            onClick={delList}
          />
        </div>
        <div className="cards_wrapper">
          {list.cards.map(card => <Card
            key={card.id}
            card={card}
            listTitle={list.title}
          />)}
        </div>
        <AddCard list={list}/>
      </div>
    </div>
  );
}