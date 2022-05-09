import calendarIcon from "./../../icons/calendar.svg"
import commentIcon from "./../../icons/comment.svg";
import {useState} from "react";
import SingleCardModal from "../SingleCardModal/SingleCardModal";
import timeConverter from "../../helpers/timeConverter";
import "./Card.css";
import {useDispatch, useSelector} from "react-redux";
import {dragStart_Card, drop_Card} from "../../features/userSlice";

export default function Card({listTitle, card}) {
  const [board] = useSelector(state => state.user.boards).filter(board => board.id === card.boardID);
  const [list] = board.lists.filter(list => list.id === card.listID);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const date = new Date(card.date);
  const calendar = `${date.toDateString().slice(4, 11)} ${timeConverter(date.toLocaleString())}`;
  const dispatch = useDispatch();

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function dragOverHandler(e) {
    e.preventDefault();
    if(e.target.className === "card_wrapper") {
      e.target.style.boxShadow = "0 6px 10px 0 rgba(0,0,0,0.6)";
    }
  }

  function dragLeaveHandler(e) {
    if(e.target.className === "card_wrapper") {
      e.target.style.boxShadow = "none";
    }
  }

  function dragStartHandler(e) {
    const action = {
      list,
      card
    };

    dispatch(dragStart_Card(action));
  }

  function dragEndHandler(e) {
    if(e.target.className === "card_wrapper") {
      e.target.style.boxShadow = "none";
    }
  }

  function dropHandler(e) {
    e.preventDefault();

    const action = {
      boardID: card.boardID,
      list,
      card
    };

    dispatch(drop_Card(action));
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
          <div className="card_wrapper"
               onClick={toggleModal}
               draggable={true}
               onDragOver={e => dragOverHandler(e)}
               onDragLeave={e => dragLeaveHandler(e)}
               onDragStart={e => dragStartHandler(e)}
               onDragEnd={e => dragEndHandler(e)}
               onDrop={e => dropHandler(e)}
          >
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