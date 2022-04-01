import Navbar from "../../components/Navbar/Navbar";
import "./Boards.css";
import {useState, useEffect} from "react";
import Board from "../../components/Board/Board";
import AddBoard from "../../components/AddBoard/AddBoard";
import {Link} from "react-router-dom";

const boards = [
  {
    id: 1,
    title: "JS",
    description: "PicsArt",
    bgColor: "rgba( 234, 0, 0, 0.35 )",
    isStarred: false
  },
  {
    id: 2,
    title: "HTML",
    description: "PicsArt",
    bgColor: "rgba( 0, 109, 9, 0.35 )",
    isStarred: false
  },
  {
    id: 3,
    title: "CSS",
    description: "PicsArt",
    bgColor: "rgba( 54, 55, 218, 0.35 )",
    isStarred: false
  },
];

export default function Boards() {
  const [state, setState] = useState(boards);
  const [favoriteBoards, setFavoriteBoards] = useState([])

  useEffect(() => {
    setFavoriteBoards(state.filter(({isStarred}) => isStarred))
  }, [state])

  function handleStar(id) {
    setState(prevState => prevState.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isStarred: !item.isStarred
        }
      }
      return item;
    }))
  }

  function changeTitle(newTitle, id) {
    setState(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: newTitle
        }
      }
      return item;
    }))
  }

  function changeDesc(newDesc, id) {
    setState(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          description: newDesc
        }
      }
      return item;
    }))
  }

  return (
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
                  handleStar={handleStar}
                  changeTitle={changeTitle}
                  changeDesc={changeDesc}
                />
              );
            })}
          </div>
        </div>
      ) : null}
      <div className="boards_content">
        <h1>Your Boards</h1>
        <div className="boards">
          {state.map(board => (
            <Board
              key={board.id}
              board={board}
              handleStar={handleStar}
              changeTitle={changeTitle}
              changeDesc={changeDesc}
            />
          ))}
          <AddBoard/>
        </div>
      </div>
    </div>
  );
}