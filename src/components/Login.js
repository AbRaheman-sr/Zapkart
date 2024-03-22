import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../Firebase";
import { useNavigate } from "react-router-dom";

function Login(props) {
  //props.info = setIsLogedIn
  // Display PoPup
  const navigate = useNavigate();

  const pleaseLogIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        props.info(true);
        const userName = auth.currentUser.displayName;
        const email = auth.currentUser.email;
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div style={{ margin: "30px" }}>
      <button className="btn btn-outline-primary" onClick={pleaseLogIn}>
        Login With Google
      </button>
    </div>
  );
}

export default Login;
