import Navbar from "../../components/Navbar/Navbar";
import "./Boards.css";
import { useState } from "react";
import Board from "../../components/Board/Board";
import AddBoard from "../../components/AddBoard/AddBoard";
import { AddBoardModal } from "../../components/AddBoardModal/AddBoardModal";
import { useSelector} from "react-redux";


export default function Boards() {
  const boards = useSelector(state => state.user.boards);
  const favoriteBoards = boards.filter(board => board.isFavorite);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  console.log(boards);

  return (
    <>
      <div className="boards_page_wrapper">
        <Navbar/>
        {favoriteBoards.length ? (
          <div className="starred_boards_content">
            <h1>Starred Boards</h1>
            <div className="starred_boards">
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
            {boards.map(board => (
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