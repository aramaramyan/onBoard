import "./../../pages/Registration/Registration.css";
import {useRef, useState} from "react";
import signInEmail from "../../services/signInEmail";

export default function SignIn() {
  const email = useRef({ current: { value: "" } });
  const password = useRef({ current: { value: "" } });
  const [uid, setUid] = useState(null)

  function handleEmail(val) {
    email.current.value = val;
  }

  function handelPassword(val) {
    password.current.value = val
  }

  function formSubmit() {
    signInEmail({ email: email.current.value, password: password.current.value }).then((res) => {
      setUid(res.user.uid)
    })
  }

  console.log(uid)
  return (
    <div className="container_form container_signin">
      <form  className="form" id="form2" onSubmit={evt => {
        evt.preventDefault();
        formSubmit();
      }}>
        <h2 className="form_title">Sign In</h2>
        <input
          ref={email}
          value={email.current.value}
          type="email"
          placeholder="Email"
          className="input"
          onChange={evt => handleEmail(evt.target.value)}
        />
        <input
          ref={password}
          value={password.current.value}
          type="password"
          placeholder="Password"
          className="input"
          onChange={evt => handelPassword(evt.target.value)}
        />
        <a href="#" className="link">Forgot your password?</a>
        <button className="btn" >Sign In</button>
      </form>
    </div>
  );
}