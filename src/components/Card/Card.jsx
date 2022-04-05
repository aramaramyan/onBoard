import calendarIcon from "./../../icons/calendar.svg"
import commentIcon from "./../../icons/comment.svg";
import "./Card.css";
import {useState} from "react";
import SingleCardModal from "../SingleCardModal/SingleCardModal";

export default function Card({boardID, listID,listTitle, card}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const date = new Date(card.date);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      {
        isModalOpen ? (
          <SingleCardModal
            boardID={boardID}
            listID={listID}
            listTitle={listTitle}
            card={card}
            toggleModal={toggleModal}
          />
        ) : (
          <div className="card_wrapper" onClick={toggleModal}>
            <p>{card.title}</p>
            <div className="card_wrapper_footer">
              <div className="card_comment_wrapper">
                <img src={commentIcon} alt="Comments Icon"/>
                <div className="card_comment_count">
                  <p>5</p>
                </div>
              </div>
              <div className="card_date_wrapper">
                <img src={calendarIcon} alt="Calendar Icon"/>
                <p>{date.toDateString()}</p>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}