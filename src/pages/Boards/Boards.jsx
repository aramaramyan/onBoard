import Navbar from "../../components/Navbar/Navbar";
import "./Boards.css";
import { useState } from "react";
import Board from "../../components/Board/Board";
import AddBoard from "../../components/AddBoard/AddBoard";
import { AddBoardModal } from "../../components/AddBoardModal/AddBoardModal";
import { useSelector} from "react-redux";


export default function Boards() {
  const boards = useSelector(state => state.user.boards);
  const boardsArray = [];
  const favoriteBoards = [];
  const [isModalOpen, setIsModalOpen] = useState(false);

  for (let key in boards) {
    boardsArray.push(boards[key])

    if(boards[key].isFavorite) {
      favoriteBoards.push(boards[key]);
    }
  }

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <div className="boards_page_wrapper">
        <Navbar/>
        {favoriteBoards.length ? (
          <div className="favoriteBoards_content">
            <h1>Favorite Boards</h1>
            <div className="favoriteBoards">
              {favoriteBoards.map(board => {
                return (
                  <Board
                    key={board.id}
                    board={board}
                  />
                );
              })}
            </div>
          </div>
        ) : null}
        <div className="boards_content">
          <h1>Your Boards</h1>
          <div className="boards">
            {boardsArray.map(board => (
              <Board
                key={board.id}
                board={board}
              />
            ))}
            <AddBoard toggleModal={toggleModal}/>
          </div>
        </div>
      </div>
      {isModalOpen && <AddBoardModal toggleModal={toggleModal}/>}
    </>
  );
}