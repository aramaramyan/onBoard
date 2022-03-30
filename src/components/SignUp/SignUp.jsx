import "./../../pages/Registration/Registration.css";
import {useRef} from "react";
import signUpEmail from "../../services/signUpEmail";
import setUserData from "../../services/setUserData";

export default function SignUp() {
  const userName = useRef({ current: { value: "" }});
  const email = useRef({ current: { value: "" } });
  const password = useRef({ current: { value: "" } });

  function handleUserName(val) {
    userName.current.value = val;
  }

  function handleEmail(val) {
    email.current.value = val;
  }

  function handelPassword(val) {
    password.current.value = val
  }

  function formSubmit(e) {
    e.preventDefault()
    signUpEmail(email.current.value, password.current.value).then((response) => {

      setUserData(response.user.uid, userName.current.value).then((snapshot) => {
        console.log(snapshot)
      })
    })
  }

  return (
    <div className="container_form container_signup">
      <form className="form" id="form1" onSubmit={formSubmit} >
        <h2 className="form_title">Sign Up</h2>
        <input
          ref={userName}
          type="text"
          placeholder="User"
          className="input"
          onChange={evt => handleUserName(evt.target.value)}
        />
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="input"
          onChange={evt => handleEmail(evt.target.value)}
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="input"
          onChange={evt => handelPassword(evt.target.value)}
        />
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
}