import "./Comment.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {changeComment, deleteComment} from "../../features/userSlice";
import dateConverter from "./../../helpers/timeConverter"


export default function Comment({comment}) {
  const [text, setText] = useState(comment.text);
  const [isReadOnly, setISReadOnly] = useState(true);
  const date = new Date(comment.date);
  const dispatch = useDispatch();
  const calendar = `${date.toDateString().slice(4, 11)} ${dateConverter(date.toLocaleString())}`;

  function toggleText(value) {
    setText(value);
  }

  function toggleReadOnly() {
    setISReadOnly(prev => !prev);
  }

  function change_comment() {
    const action = {
      boardID: comment.boardID,
      listID: comment.listID,
      cardID: comment.cardID,
      commentID: comment.id,
      text
    }

    dispatch(changeComment(action));
  }

  function delete_comment() {
    const action = {
      boardID: comment.boardID,
      listID: comment.listID,
      cardID: comment.cardID,
      commentID: comment.id,
    }

    dispatch(deleteComment(action));
  }

  return (
    <div className="comment_wrapper">
      <div className="comment_avatar_wrapper">
        <div className="comment_avatar">
          <p>{comment.userName.slice(0, 1).toUpperCase()}</p>
        </div>
      </div>
      <div className="comment_content_wrapper">
        <div className="comment_content_header">
          <h4>{comment.userName}</h4>
          <p>{calendar}</p>
        </div>
        <div className="comment_content_input">
          <textarea
            readOnly={isReadOnly}
            cols="28"
            rows="2"
            value={text}
            placeholder="Write a comment..."
            onChange={evt => toggleText(evt.target.value)}
          />
        </div>
        <div className="comment_content_footer">
          {isReadOnly ? (
            <button onClick={toggleReadOnly}>Edit</button>
          ) : (
            <button onClick={() => {
              toggleReadOnly()
              change_comment();
            }}>Save</button>
          )}
          <button onClick={delete_comment}>Delete</button>
        </div>
      </div>
    </div>
  );
}