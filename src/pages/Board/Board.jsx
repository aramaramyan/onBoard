import {useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {deleteBoard, handleFavorite} from "../../features/userSlice";
import randomColor from "../../helpers/randomColor";
import boardIcon from "./../../icons/boards.svg";
import starIcon from "./../../icons/star_white.svg";
import starFillIcon from "./../../icons/starFill_white.svg";
import trashIcon from "./../../icons/trash.svg";
import Navbar from "../../components/Navbar/Navbar";
import "./Board.css";
import AsideBoard from "../../components/AsideBoard/AsideBoard";
import AddList from "../../components/AddList/AddList";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import List from "../../components/List/List";

export default function Board() {
  const {fullName, boards} = useSelector(state => state.user);
  const [avatarBG, setAvatarBG] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {boardID} = useParams();
  const [board] = boards.filter(board => board.id === boardID);
  const dispatch = useDispatch();

  useEffect(() => {
    setAvatarBG(randomColor());

  }, []);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <div className="board_page_wrapper"
           style={{background: `url(${board.bg.main}) center center/cover no-repeat fixed`}}>
        <Navbar/>
        <aside>
          <div className="user_info">
            <div className="first_letter" style={{background: avatarBG, color: "#ffffff"}}>
              {fullName.slice(0, 1).toUpperCase()}
            </div>
            <div className="user_name">
              <p>{fullName}'s </p>
              <p>Workspace</p>
            </div>
          </div>
          <div>
            <div className="user_boards_title">
              <img src={boardIcon} alt="Boards Icon" className="user_boards_title_icon"/>
              <h3>Boards:</h3>
            </div>
            {boards.map(board => {
              return <AsideBoard
                key={board.id}
                id={board.id}
                title={board.title}
                isFavorite={board.isFavorite}
              />
            })}
          </div>
        </aside>
        <div className="main_content">
          <div className="main_content_header">
            <h3>{board.title}</h3>
            {board.isFavorite ?
              <img
                src={starFillIcon}
                alt="Star Icon"
                className="main_content_header_starIcon"
                onClick={() => dispatch(handleFavorite(board.id))}
              />
              : <img
                src={starIcon}
                alt="Star Icon"
                className="main_content_header_starIcon"
                onClick={() => dispatch(handleFavorite(board.id))}
              />}
            <div className="delete_board" onClick={toggleModal}>
              <h5>DELETE BOARD</h5>
              <img src={trashIcon} alt="Trash Icon" className="delete_board_icon"/>
            </div>
          </div>
          <div className="lists">
            {board.lists.map(list => <List
              key={list.id}
              list={list}
              boardID={boardID}
              isModalOpen={isModalOpen}
            />)}
            <AddList boardID={board.id}/>
          </div>
        </div>
      </div>
      {isModalOpen && <DeleteModal
        id={board.id}
        title={board.title}
        toggleModal={toggleModal}/>}
    </>
  );
}