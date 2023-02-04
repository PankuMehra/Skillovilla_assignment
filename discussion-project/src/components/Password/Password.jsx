import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [newPassword, setNewPassword] = useState("");

  const enterUser = async (e) => {
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
      <form action="" onSubmit={enterUser}>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Password;
