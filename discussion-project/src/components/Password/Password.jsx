import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Context/AuthContext";

const Password = () => {
  const [newPassword, setNewPassword] = useState("");
  let navigate = useNavigate();

  const { currentUser } = useContext(userContext);
  console.log("currentUser:", currentUser);

  const enterUser = (e) => {
    e.preventDefault();
    if (currentUser.data.password == newPassword) {
      navigate("/");
    } else {
      console.log("not logged in");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#234543",
      }}
    >
      <form
        action=""
        onSubmit={enterUser}
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
        <label htmlFor="">Enter Password</label>
        <input
          style={{
            padding: "9px 10px",
            borderRadius: "5px",
            border: "2px solid",
            outline: "none",
            marginBottom: "20px",
          }}
          type="text"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          type="submit"
          style={{
            padding: "9px 10px",
            borderRadius: "5px",
            border: "2px solid",
            outline: "none",
            marginBottom: "20px",
          }}
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default Password;
