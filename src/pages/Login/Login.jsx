import { Form, useNavigation } from "react-router-dom";

import "./Login.css";

function Login() {
  const navigation = useNavigation();

  return (
    <div className="login-container">
      <Form action="/login" method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button className="btn" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Identification en cours..." : "S'identifier"}
        </button>
      </Form>
    </div>
  );
}

export default Login;
