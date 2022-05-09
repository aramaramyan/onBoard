import {createPortal} from "react-dom";
import {useState} from "react";
import { v4 } from 'uuid';
import BG_1 from "../../img/boards_BG/mainBG/boardBG_1.jpg";
import BG_2 from "../../img/boards_BG/mainBG/boardBG_2.jpg";
import BG_3 from "../../img/boards_BG/mainBG/boardBG_3.jpg";
import BG_4 from "../../img/boards_BG/mainBG/boardBG_4.jpg";
import BG_1_card from "./../../img/boards_BG/cardBG/boardBG_1_card.jpg";
import BG_2_card from "./../../img/boards_BG/cardBG/boardBG_2_card.jpg";
import BG_3_card from "./../../img/boards_BG/cardBG/boardBG_3_card.jpg";
import BG_4_card from "./../../img/boards_BG/cardBG/boardBG_4_card.jpg";
import BG_1_demo from "../../img/boards_BG/demoBG/boardBG_1_demo.jpg";
import BG_2_demo from "../../img/boards_BG/demoBG/boardBG_2_demo.jpg";
import BG_3_demo from "../../img/boards_BG/demoBG/boardBG_3_demo.jpg";
import BG_4_demo from "../../img/boards_BG/demoBG/boardBG_4_demo.jpg";
import "./AddBoardModal.css";
import {useDispatch, useSelector} from "react-redux";
import {addBoard} from "../../features/userSlice";
import useFirestore from "../../hooks/useFirestore";

export function AddBoardModal({toggleModal}) {
  const user = useSelector(state => state.user);
  const [boardBG, setBoardBG] = useState(BG_1_demo);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const dispatch = useDispatch();
  const {addBoardFirestore} = useFirestore();


  function handleInput(val) {
    setInputValue(val);
  }

  function handleTextarea(val) {
    setTextareaValue(val)
  }

  function changeBG_1() {
    setBoardBG(BG_1_demo);
  }

  function changeBG_2() {
    setBoardBG(BG_2_demo);
  }

  function changeBG_3() {
    setBoardBG(BG_3_demo);
  }

  function changeBG_4() {
    setBoardBG(BG_4_demo);
  }

  function bgSwitcher(bg) {
    switch (bg) {
      case BG_1_demo:
        return {
          main: BG_1,
          card: BG_1_card
        };
      case BG_2_demo:
        return {
          main: BG_2,
          card: BG_2_card
        };
      case BG_3_demo:
        return {
          main: BG_3,
          card: BG_3_card
        };
      default:
        return {
          main: BG_4,
          card: BG_4_card
        };
    }
  }

  function addingBoard() {
    const board = {
      id: v4().slice(0, 8),
      title: inputValue,
      description: textareaValue,
      bg: bgSwitcher(boardBG),
      isFavorite: false,
      lists: [],
    }

    dispatch(addBoard(board));
    // addBoardFirestore(board);
    setInputValue("");
    setTextareaValue("");
    setBoardBG(BG_1_demo);
    toggleModal();
  }

  return createPortal(
    <div className="modal">
      < div className="modal_main_wrapper" onClick={toggleModal}/>
      <div className="addBoardModal_wrapper">
        <h3>Create Board</h3>
        <div className="bg_demo" style={{background: `url(${boardBG})`}}/>
        <h4>Background</h4>
        <div className="image_bg_wrapper">
          <div className="bg_mini bg_1" onClick={changeBG_1}/>
          <div className="bg_mini bg_2" onClick={changeBG_2}/>
          <div className="bg_mini bg_3" onClick={changeBG_3}/>
          <div className="bg_mini bg_4" onClick={changeBG_4}/>
        </div>
        <h4>Board Title<span style={{color: "red"}}>*</span></h4>
        <input
          type="text"
          value={inputValue}
          className="addBoard_input"
          required={true}
          onChange={evt => handleInput(evt.target.value)}
        />
        <h4>Description:</h4>
        <textarea
          name="addBoard_desc"
          value={textareaValue}
          cols="32"
          rows="5"
          onChange={evt => handleTextarea(evt.target.value)}
        />
        <button className="create_board" onClick={() => addingBoard(user.docID)}>CREATE</button>
      </div>
    </div>
    , document.body);
}