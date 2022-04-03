import editIcon from "./../../icons/edit.svg";
import saveIcon from "./../../icons/save.svg";
import starFillIcon from "./../../icons/starFill.svg";
import starIcon from "./../../icons/star.svg";
import "./Board.css";
import {useRef, useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {handleFavorite, changeBoardTitle, changeBoardDesc} from "../../features/userSlice";

export default function Board({board}) {
  const [titleState, setTitleState] = useState(board.title);
  const [isTitleReadOnly, setIsTitleReadOnly] = useState(true);
  const [descState, setDescState] = useState(board.description);
  const [isDescReadOnly, setIsDescReadOnly] = useState(true);
  const titleInput = useRef();
  const descInput = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();


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
    const action = {
      id,
      title: titleState
    }
    dispatch(changeBoardTitle(action))
  }

  function saveDesc(id) {
    descReadOnlyHandler();
    const action = {
      id,
      description: descState
    }
    dispatch(changeBoardDesc(action));
  }

  function goToSingleBoard(id) {
    navigate(`/boards/${id}`);
  }


  return (
    <div
      className="board_wrapper"
      style={{background: `url(${board.bg.card})`}}
      onClick={() => {
        goToSingleBoard(board.id);
      }}
    >
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
              onClick={(evt) => {
                evt.stopPropagation();
                titleReadOnlyHandler();
              }
              }/>
            : <img
              src={saveIcon}
              alt="Save Icon"
              className="board_icon"
              onClick={(evt) => {
                evt.stopPropagation();
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
          value={descState}
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
                onClick={(evt) => {
                  evt.stopPropagation();
                  descReadOnlyHandler()
                }
                }/>
              : <img
                src={saveIcon}
                alt="Save Icon"
                className="board_icon"
                onClick={(evt) => {
                  evt.stopPropagation();
                  saveDesc(board.id)
                }}/>
          }
          {
            board.isFavorite ?
              <img
                src={starFillIcon}
                alt="Star Fill"
                className="board_icon"
                onClick={(evt) => {
                  evt.stopPropagation();
                  dispatch(handleFavorite(board.id));
              }}/>
              : <img
                src={starIcon}
                alt="Star"
                className="board_icon"
                onClick={(evt) => {
                  evt.stopPropagation();
                  dispatch(handleFavorite(board.id));
                }}/>
          }
        </div>
      </div>
    </div>
  );
}