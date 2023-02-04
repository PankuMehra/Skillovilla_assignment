import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [newUser, setNewUser] = useState("");

  const checkUser = async (e) => {

    let navigate = useNavigate();

    e.preventDefault();
    let res = await fetch("https://quill-chip-chickadee.glitch.me/users");
    let data = await res.json();
    const userdata = data.filter((elem) => {
      return elem.username == newUser;
    });
    if(userdata){
        navigate("/password")
    }
    console.log(userdata[0]);
  };

  return (
    <div>
      <form action="" onSubmit={checkUser}>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Login;
