import {createPortal} from "react-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {deleteCard, setCardDescription} from "../../features/userSlice";
import cardIcon from "./../../icons/card.svg";
import commentsIcon from "./../../icons/comments.svg";
import descriptionIcon from "./../../icons/description.svg";
import trashIcon from "./../../icons/trash.svg"
import "./SingleCardModal.css";

export default function SingleCardModal({ boardID, listTitle, listID, card, toggleModal }) {
  const userName = useSelector(state => state.user.fullName);
  const currentDesc = useSelector(state => state.user.boards[boardID].lists[listID].cards[card.id].description);
  const [description, setDescription] = useState(currentDesc)
  const [comment, setComment] = useState("")
  const [isSaveDescOpen, setIsSaveDescOpen] = useState(false);
  const [isSaveCommentOpen, setIsSaveCommentOpen] = useState(false);
  const dispatch = useDispatch();

  function toggleDescription(val) {
    setDescription(val)
  }

  function toggleComments(val) {
    setComment(val);
  }

  function toggleSaveDescOpen() {
    setIsSaveDescOpen(!isSaveDescOpen)
  }

  function toggleSaveCommentOpen() {
    setIsSaveCommentOpen(!isSaveCommentOpen);
  }

  function delCard(boardID, listID, cardID) {
    const action = {
      boardID,
      listID,
      cardID
    };

    dispatch(deleteCard(action));
    toggleModal();
  }

  function saveDesc(boardID, listID, cardID, description) {
    const action = {
      boardID,
      listID,
      cardID,
      description
    }

    dispatch(setCardDescription(action));
    toggleSaveDescOpen();
  }

  return createPortal(
    <div className="modal">
      <div className="modal_main_wrapper" onClick={toggleModal}>
        <div className="singleCard_wrapper" onClick={evt => evt.stopPropagation()}>
          <div className="singleCard_header">
            <img src={cardIcon} alt="Card Icon"/>
            <div className="singleCard_title_wrapper">
              <h2>{card.title}</h2>
              <p>{`in list "${listTitle}"`}</p>
            </div>
            <div className="delete_singleCard" onClick={() => delCard(boardID, listID, card.id)}>
              <p>DELETE<br/>CARD</p>
              <img src={trashIcon} alt="Trash Icon"/>
            </div>
          </div>
          <div className="singleCard_description">
            <img src={descriptionIcon} alt="Description Icon"/>
            <div className="singleCard_description_wrapper">
              <p>Description</p>
              <textarea
                cols="69"
                rows="4"
                value={description}
                placeholder="Add a more detailed description..."
                onChange={evt => toggleDescription(evt.target.value)}
                onClick={toggleSaveDescOpen}
              />
              {isSaveDescOpen && (
                <div className="singleCard_description_save_btn">
                  <button onClick={() => saveDesc(boardID, listID, card.id, description)}>SAVE</button>
                </div>
              )}
            </div>
          </div>
          <div className="singleCard_comments_wrapper">
            <div className="singleCard_comments_title">
              <img src={commentsIcon} alt="Comments Icon"/>
              <p>Activity</p>
            </div>
            <div className="singleCard_comment_textarea_wrapper">
              <div className="singleCard_user_name_wrapper">
                <p>{userName.slice(0, 1).toUpperCase()}</p>
              </div>
              <textarea
                cols="28"
                rows="2"
                value={comment}
                placeholder="Write a comment..."
                onChange={evt => toggleComments(evt.target.value)}
                onClick={toggleSaveCommentOpen}
              />
              {isSaveCommentOpen && (
                <div className="singleCard_comment_save_btn">
                  <button onClick={toggleSaveCommentOpen}>SAVE</button>
                </div>
              )}
            </div>
            <div className="comments">
              {/*{cards.map(comment => )}*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  , document.body);
}