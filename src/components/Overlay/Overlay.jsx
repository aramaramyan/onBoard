import "./../../pages/Registration/Registration.css";

export default function Overlay({ handleActive }) {
  return (
    <div className="container_overlay">
      <div className="overlay">
        <div className="overlay_panel overlay_left">
          <button className="btn" id="signIn" onClick={handleActive}>Sign In</button>
        </div>
        <div className="overlay_panel overlay_right">
          <button className="btn" id="signUp" onClick={handleActive}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}