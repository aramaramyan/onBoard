import Navbar from "../../components/Navbar/Navbar";
import "./Boards.css";
import {useState, useEffect} from "react";
import Board from "../../components/Board/Board";
import AddBoard from "../../components/AddBoard/AddBoard";
import {AddBoardModal} from "../../components/AddBoardModal/AddBoardModal";
import {useSelector} from "react-redux";


export default function Boards() {
  const boards = useSelector(state => state.user.boards);
  const [favoriteBoards, setFavoriteBoards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   setFavoriteBoards(state.filter(({isStarred}) => isStarred))
  // }, [state])

  // function handleStar(id) {
  //   setState(prevState => prevState.map(item => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         isStarred: !item.isStarred
  //       }
  //     }
  //     return item;
  //   }))
  // }
  //
  // function changeTitle(newTitle, id) {
  //   setState(prev => prev.map(item => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         title: newTitle
  //       }
  //     }
  //     return item;
  //   }))
  // }
  //
  // function changeDesc(newDesc, id) {
  //   setState(prev => prev.map(item => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         description: newDesc
  //       }
  //     }
  //     return item;
  //   }))
  // }

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
                    // handleStar={handleStar}
                    // changeTitle={changeTitle}
                    // changeDesc={changeDesc}
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
                // handleStar={handleStar}
                // changeTitle={changeTitle}
                // changeDesc={changeDesc}
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