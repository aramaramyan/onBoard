import {createPortal} from "react-dom";
import {useSelector} from "react-redux";
import cardIcon from "./../../icons/card.svg";
import commentsIcon from "./../../icons/comments.svg";
import descriptionIcon from "./../../icons/description.svg";
import trashIcon from "./../../icons/trash.svg"
import "./SingleCardModal.css";
import {useState} from "react";

export default function SingleCardModal({ listTitle, card, toggleModal }) {
  const userName = useSelector(state => state.user.fullName);
  const [description, setDescription] = useState("");

  function toggleDescription(val) {
    setDescription(val);
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
            <div className="delete_singleCard">
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
              />
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
              <textarea cols="28" rows="2" placeholder="Write a comment..."/>
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