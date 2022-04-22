import {useState} from "react";
import {useNavigate} from "react-router";
import signInEmail from "../../services/signInEmail";
import setStorage from "../../helpers/setStorage";
import "./../../pages/Registration/Registration.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function emailHandler(value) {
    setEmail(value);
  }

  function passwordHandler(value) {
    setPassword(value);
  }


  function formSubmit(evt) {
    evt.preventDefault();

    signInEmail({ email: email, password: password }).then((res) => {
      setStorage(res.user.uid);
      navigate("/");
    });
  }

  return (
    <div className="container_form container_signin">
      <form  className="form" id="form2" onSubmit={formSubmit}>
        <h2 className="form_title">Sign In</h2>
        <input
          value={email}
          type="email"
          placeholder="Email"
          className="input"
          onChange={evt => emailHandler(evt.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          className="input"
          onChange={evt => passwordHandler(evt.target.value)}
        />
        <a href="#" className="link">Forgot your password?</a>
        <button className="btn" >Sign In</button>
      </form>
    </div>
  );
}