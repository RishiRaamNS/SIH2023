import "./Container.css";
import Link from "next/link"

export default function Container({ heading, btn }) {
  return (
    <div className="Container login--right-container">
      <h1 className="container--heading">{heading}</h1>
      <p className="para">Enter your details to get started</p>
      <input type="email" className="input first-input"></input>
      <span class="floating-label floating-label-1">Email</span>
      <input type="password" className="input second-input"></input>
      <span class="floating-label floating-label-2">Password</span>

      <p className="left-align">Have trouble sigining in?</p>
      <Link href="/" className="btn btn-primary container--btn">{btn}</Link>
      <div className="btn-wrapper">
        <img src="/google.svg" className="google-icon" />
        <Link href="/" className="btn container--btn-2">Continue with google</Link>
          </div>
          <p className="container--footer-text">Don't have an account?<a className="container--footer-link">Signup</a></p>
    </div>
  );
}
