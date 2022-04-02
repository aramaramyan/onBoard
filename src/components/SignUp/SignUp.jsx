import signUpEmail from "../../services/signUpEmail";
import {useSelector, useDispatch} from "react-redux";
import {setFullName, setEmail, setPassword, setUserID} from "../../features/signUpSlice";
import "./../../pages/Registration/Registration.css";
import setUserData from "../../services/setUserData";
import {useNavigate} from "react-router";
import {setState} from "../../features/userSlice";

export default function SignUp() {
  const {fullName, email, password, userID} = useSelector(state => state.signUp)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function formSubmit(e) {
    e.preventDefault();

    signUpEmail(email, password).then(res => {
      setUserData(res.user.uid, fullName, email).catch(err => alert(err.message));
      dispatch(setUserID(res.user.uid));
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
          onChange={evt => dispatch(setFullName(evt.target.value))}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          className="input"
          onChange={evt => dispatch(setEmail(evt.target.value))}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          className="input"
          onChange={evt => dispatch(setPassword(evt.target.value))}
        />
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
}