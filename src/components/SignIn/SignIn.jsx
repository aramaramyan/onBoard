import "./../../pages/Registration/Registration.css";

export default function SignIn({handleLogIn}) {
  return (
    <div className="container_form container_signin">
      <form action="#" className="form" id="form2">
        <h2 className="form_title">Sign In</h2>
        <input type="email" placeholder="Email" className="input"/>
        <input type="password" placeholder="Password" className="input"/>
        <a href="#" className="link">Forgot your password?</a>
        <button className="btn" onClick={handleLogIn}>Sign In</button>
      </form>
    </div>
  );
}