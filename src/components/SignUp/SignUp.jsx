import "./../../pages/Registration/Registration.css";

export default function SignUp() {
  return (
    <div className="container_form container_signup">
      <form action="#" className="form" id="form1">
        <h2 className="form_title">Sign Up</h2>
        <input type="text" placeholder="User" className="input"/>
        <input type="email" placeholder="Email" className="input"/>
        <input type="password" placeholder="Password" className="input"/>
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
}