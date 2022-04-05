import {changeListTitle, deleteList} from "../../features/userSlice";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import trashIcon from "./../../icons/trash.svg";
import editIcon from "./../../icons/edit.svg";
import saveIcon from "./../../icons/save.svg";
import "./List.css";
import AddCard from "../AddCard/AddCard";
import Card from "../Card/Card";

export default function List({boardID, list, isModalOpen}) {
  const [title, setTitle] = useState(list.title);
  const [isTitleReadOnly, setIsTitleReadOnly] = useState(true);
  const currentList = useSelector(state => state.user.boards[boardID].lists[list.id]);
  const cards = [];
  const titleInput = useRef();
  const dispatch = useDispatch()

  console.log("currentList", currentList);

  for (let key in currentList.cards) {
    cards.push(currentList.cards[key]);
  }

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
    };
    dispatch(changeListTitle(action));
  }

  function delList(boardID, id) {
    const action = {
      boardID,
      id,
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
              onClick={() => {
                saveTitle(boardID, list.id)
              }}
            />
          )}
          <img
            src={trashIcon}
            alt="Trash Icon"
            className="list_header_icon"
            onClick={() => delList(boardID, list.id)}
          />
        </div>
        <div className="cards_wrapper">
          {cards.map(card => <Card
            key={card.id}
            card={card}
            listID={list.id}
            boardID={boardID}
            listTitle={list.title}
          />)}
        </div>
        <AddCard boardID={boardID} listID={list.id}/>
      </div>
    </div>
  );
}