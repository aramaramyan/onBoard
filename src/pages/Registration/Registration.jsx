import {useState} from "react";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";
import Overlay from "../../components/Overlay/Overlay";

export default function Registration() {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active);
  }

  return (
    <div className="registration_wrapper">
      <div className={active? "container right_panel_active" : "container"}>
        <SignUp />
        <SignIn />
        <Overlay handleActive={handleActive}/>
      </div>
    </div>
  );
}