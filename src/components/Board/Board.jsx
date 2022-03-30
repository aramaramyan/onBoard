import editIcon from "./../../icons/edit.svg";
import saveIcon from "./../../icons/save.svg";
import starFillIcon from "./../../icons/starFill.svg";
import starIcon from "./../../icons/star.svg";
import "./Board.css";
import {useRef, useState} from "react";

export default function Board({board, handleStar, changeTitle, changeDesc}) {
  const [titleState, setTitleState] = useState(board.title || "");
  const [isTitleReadOnly, setIsTitleReadOnly] = useState(true);
  const [descState, setDescState] = useState(board.description || "");
  const [isDescReadOnly, setIsDescReadOnly] = useState(true);
  const titleInput = useRef();
  const descInput = useRef();

  function titleInputHandler(val) {
    setTitleState(val);
  }

  function descInputHandler(val) {
    setDescState(val)
  }

  function titleReadOnlyHandler() {
    setIsTitleReadOnly(prev => !prev);
    titleInput.current.focus();
  }

  function descReadOnlyHandler() {
    setIsDescReadOnly(prev => !prev);
    descInput.current.focus();
  }

  function saveTitle(id) {
    titleReadOnlyHandler();
    changeTitle(titleState, id);
  }

  function saveDesc(id) {
    descReadOnlyHandler();
    changeDesc(descState, id)
  }


  return (
    <div className="board_wrapper" style={{backgroundColor: board.bgColor}}>
      <div className="board_title_wrapper">
        <input
          ref={titleInput}
          type="text"
          value={titleState}
          readOnly={isTitleReadOnly}
          onChange={evt => titleInputHandler(evt.target.value)}
        />
        {
          isTitleReadOnly ?
            <img
              src={editIcon}
              alt="Edit Icon"
              className="board_icon"
              onClick={titleReadOnlyHandler}/>
            : <img
              src={saveIcon}
              alt="Save Icon"
              className="board_icon"
              onClick={() => {
                saveTitle(board.id)
              }}/>
        }
      </div>
      <p className="description_title">Description: </p>
      <div className="board_description_wrapper">
        <textarea
          cols="23"
          rows="4"
          ref={descInput}
          readOnly={isDescReadOnly}
          onChange={evt => descInputHandler(evt.target.value)}>
          {descState}
        </textarea>
        <div className="board_buttons">
          {
            isDescReadOnly ?
              <img
                src={editIcon}
                alt="Edit Icon"
                className="board_icon"
                onClick={descReadOnlyHandler}/>
              : <img
                src={saveIcon}
                alt="Save Icon"
                className="board_icon"
                onClick={() => {
                  saveDesc(board.id)
                }}/>
          }
          {
            board.isStarred ?
              <img src={starFillIcon} alt="Star Fill" className="board_icon" onClick={() => handleStar(board.id)}/>
              : <img src={starIcon} alt="Star" className="board_icon" onClick={() => handleStar(board.id)}/>
          }
        </div>
      </div>
    </div>
  );
}