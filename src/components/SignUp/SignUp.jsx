import signUpEmail from "../../services/signUpEmail";
import setUserData from "../../services/setUserData";
import { useSelector, useDispatch } from "react-redux";
import { setFullName, setEmail, setPassword, setUserID } from "../../features/signUpSlice";
import "./../../pages/Registration/Registration.css";

export default function SignUp() {
  const fullName = useSelector(state => state.signUp.fullName)
  const email = useSelector(state => state.signUp.email);
  const password = useSelector(state => state.signUp.password);
  const dispatch = useDispatch();


  function formSubmit(e) {
    e.preventDefault();

    signUpEmail(email, password).then((res) => {
      setUserData(res.user.uid,fullName).then((snapshot) => {
        console.log(snapshot);
      }).catch(err => {
        alert(err);
      })

      console.log(res);
    })
  }

  return (
    <div className="container_form container_signup">
      <form className="form" id="form1" onSubmit={formSubmit} >
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