import "../Login.css";
import LoginButton from "./LoginButton";
import { login } from "../scripts/login";
import { useState } from "react";

function Fields() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  console.log(email, password);

  return (
    <>
      <div className="LoginFields">
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="your email"
            value={email}
            className="email"
            onChange={handleEmail}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="your password"
            value={password}
            className="password"
            onChange={handlePassword}
          ></input>
        </form>
      </div>
      <LoginButton onClick={() => login( email, password )} />
    </>
  );
}

export default Fields;