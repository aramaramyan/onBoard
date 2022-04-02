import {createPortal} from "react-dom";
import {useState} from "react";
import BG_1_demo from "./../../img/boards_BG/boardBG_1_demo.jpg";
import BG_2_demo from "./../../img/boards_BG/boardBG_2_demo.jpg";
import BG_3_demo from "./../../img/boards_BG/boardBG_3_demo.jpg";
import BG_4_demo from "./../../img/boards_BG/boardBG_4_demo.jpg";
import "./AddBoardModal.css";

export function AddBoardModal({toggleModal}) {
  const [boardBG, setBoardBG] = useState(BG_1_demo);

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

  return createPortal(
    <div className="modal">
      < div className="modal_main_wrapper" onClick={toggleModal} />
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
        <input type="text" className="addBoard_input" required={true}/>
        <h4>Description:</h4>
        <textarea name="addBoard_desc" id="addBoard_desc" cols="32" rows="5">

      </textarea>
        <button className="create_board">CREATE</button>
      </div>
    </div>
    , document.body);
}