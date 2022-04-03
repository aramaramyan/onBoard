import {createPortal} from "react-dom";
import {deleteBoard} from "../../features/userSlice";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import dangerIcon from "./../../icons/danger.svg";
import "./DeleteModal.css";



export default function DeleteModal({ id, title,toggleModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function delBoard(id) {
    dispatch(deleteBoard(id));
    navigate("/boards");
  }

  return createPortal(
    <div className="modal">
      <div className="modal_main_wrapper" onClick={toggleModal}>
        <div className="danger_modal_wrapper">
          <div className="danger_modal_title">
            <img src={dangerIcon} alt="Danger Icon"/>
            <div className="danger_modal_text">
              <p className="danger_modal_firstText">Are you sure you want to delete "{title}" board?</p>
              <p className="danger_modal_secondText">This board will be deleted immediately.<br/>You can't undo this action.</p>
            </div>
          </div>
          <div className="danger_modal_actions">
            <button onClick={toggleModal}>CANCEL</button>
            <button onClick={() => delBoard(id)}>DELETE</button>
          </div>
        </div>
      </div>
    </div>
  , document.body);
}