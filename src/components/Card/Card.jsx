import calendarIcon from "./../../icons/calendar.svg"
import commentIcon from "./../../icons/comment.svg";
import {useState} from "react";
import SingleCardModal from "../SingleCardModal/SingleCardModal";
import timeConverter from "../../helpers/timeConverter";
import "./Card.css";

export default function Card({listTitle, card}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const date = new Date(card.date);
  const calendar = `${date.toDateString().slice(4, 11)} ${timeConverter(date.toLocaleString())}`;

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      {
        isModalOpen ? (
          <SingleCardModal
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
                {card.comments.length ? (
                  <div className="card_comment_count">
                    <p>{card.comments.length}</p>
                  </div>
                ) : null}
              </div>
              <div className="card_date_wrapper">
                <img src={calendarIcon} alt="Calendar Icon"/>
                <p>{calendar}</p>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}