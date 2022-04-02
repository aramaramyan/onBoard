import {useNavigate} from "react-router";
import starIcon from "./../../icons/starFill_white.svg";
import "./AsideBoard.css";

export default function AsideBoard({ id, title, isFavorite}) {
  const navigate = useNavigate();


  function goToSingleBoard(id) {
    navigate(`/boards/${id}`);
  }

  return (
    <div className="asideBoard_wrapper" onClick={() => goToSingleBoard(id)}>
      <h3>{title}</h3>
      {isFavorite && <img src={starIcon} alt="Filled Star" className="asideBoard_star"/>}
    </div>
  );
}