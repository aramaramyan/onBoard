import "Ovarlay.css";

export default function Overlay() {
  return (
    <div className="container_overlay">
      <div className="overlay">
        <div className="overlay_panel overlay_left">
          <button className="btn" id="signIn">Sign In</button>
        </div>
        <div className="overlay_panel overlay_right">
          <button className="btn" id="signUp">Sign Up</button>
        </div>
      </div>
    </div>
  );
}