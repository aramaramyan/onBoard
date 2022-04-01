import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword, setUserID } from "../../features/signInSlice";
import signInEmail from "../../services/signInEmail";
import "./../../pages/Registration/Registration.css";
import {useNavigate} from "react-router";

export default function SignIn() {
  const email = useSelector(state => state.signIn.email);
  const password = useSelector(state => state.signIn.password);
  const userID = useSelector(state => state.signIn.userID);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  function formSubmit(evt) {
    evt.preventDefault();

    signInEmail({ email: email, password: password }).then((res) => {
      dispatch(setUserID(res.user.uid));
    });

    navigate("/");
  }

  console.log(userID);

  return (
    <div className="container_form container_signin">
      <form  className="form" id="form2" onSubmit={formSubmit}>
        <h2 className="form_title">Sign In</h2>
        <input
          value={email}
          type="email"
          placeholder="Email"
          className="input"
          onChange={evt => dispatch(setEmail(evt.target.value))}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          className="input"
          onChange={evt => dispatch(setPassword(evt.target.value))}
        />
        <a href="#" className="link">Forgot your password?</a>
        <button className="btn" >Sign In</button>
      </form>
    </div>
  );
}