import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Context/AuthContext";

const Login = () => {
  const [newUser, setNewUser] = useState("");
  let navigate = useNavigate();
  const { getCurrentUser } = useContext(userContext);

  const checkUser = async (e) => {
    e.preventDefault();
    let res = await fetch("https://quill-chip-chickadee.glitch.me/users");
    let allUsersData = await res.json();
    let userdata = allUsersData.filter((elem) => {
      return elem.username == newUser;
    });
    getCurrentUser(userdata[0]);
    if (userdata[0]) {
      navigate("/password");
    } else {
      document.getElementById("popup").style.display = "unset";
    }
  };

  const switchPopup = () => {
    document.getElementById("popup").style.display = "none";
    document.getElementById("createUserPopup").style.display = "unset";
  };

  const createNewUser = async () => {
    let usernameInput = document.getElementById("usernameInput").value;
    let passwordInput = document.getElementById("passwordInput").value;
    let setData = { username: usernameInput, password: passwordInput };
    let res = await fetch("https://quill-chip-chickadee.glitch.me/users", {
      method: "POST",
      body: JSON.stringify(setData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      alert("User Created, Now you can login");
    }
    document.getElementById("createUserPopup").style.display = "none";
    let allUsersData = await res.json();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "relative",
        backgroundColor: "#234543",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "200px",
          borderRadius: "10px",
          display: "none",
          backgroundColor: "white",
        }}
        id="popup"
      >
        <h1>This user does not exist</h1>
        <button
          style={{
            padding: "10px 10px",
            color: "white",
            backgroundColor: "black",
          }}
          onClick={switchPopup}
        >
          Click here to create user
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "200px",
          borderRadius: "10px",
          display: "none",
          backgroundColor: "white",
        }}
        id="createUserPopup"
      >
        <h2>Create new User</h2>
        <input id="usernameInput" type="text" placeholder="Enter Username" />
        <input id="passwordInput" type="text" placeholder="Enter Password" />
        <button
          style={{
            padding: "10px 10px",
            color: "white",
            backgroundColor: "black",
          }}
          onClick={createNewUser}
        >
          Create User
        </button>
      </div>
      <form
        action=""
        onSubmit={checkUser}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          border: "1px solid gray",
          padding: "80px 45px",
          backgroundColor: "#234987",
          color: "white",
        }}
      >
        <label htmlFor="">Enter Username</label>
        <input
          style={{
            padding: "9px 10px",
            borderRadius: "5px",
            border: "2px solid",
            outline: "none",
            marginBottom: "20px",
          }}
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button
          style={{
            padding: "9px 10px",
            borderRadius: "5px",
            border: "2px solid",
            outline: "none",
            marginBottom: "20px",
          }}
          type="submit"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default Login;
