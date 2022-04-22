import signUpEmail from "../../services/signUpEmail";
import {useDispatch} from "react-redux";
import "./../../pages/Registration/Registration.css";
import {useNavigate} from "react-router";
import {setState} from "../../features/userSlice";
import useFirestore from "../../hooks/useFirestore";
import {useState} from "react";
import setStorage from "../../helpers/setStorage";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [userID, serUserID] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {addUserData} = useFirestore();

  function fullNameHandler(value) {
    setFullName(value);
  }

  function emailHandler(value) {
    setEmail(value);
  }

  function passwordHandler(value) {
    setPassword(value);
  }

  function userIDHandler(value) {
    serUserID(value);
    setStorage(value);
  }

  function formSubmit(e) {
    e.preventDefault();

    signUpEmail(email, password).then(res => {
      addUserData(res.user.uid, fullName, email).catch(err => alert(err.message));
      userIDHandler(res.user.uid);
      dispatch(setState({userID: userID, fullName: fullName}));
      navigate("/");
    }).catch(err => alert(err.message));
  }

  return (
    <div className="container_form container_signup">
      <form className="form" id="form1" onSubmit={formSubmit}>
        <h2 className="form_title">Sign Up</h2>
        <input
          type="text"
          value={fullName}
          placeholder="Full Name"
          className="input"
          onChange={evt => fullNameHandler(evt.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          className="input"
          onChange={evt => emailHandler(evt.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          className="input"
          onChange={evt => passwordHandler(evt.target.value)}
        />
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
}