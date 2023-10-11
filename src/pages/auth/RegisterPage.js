import React, { useState } from "react";
import { useCreateUser } from "../../services/auth/register_user";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const { mutate: regisUser, isSuccess, error } = useCreateUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "username") {
        setUsername(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  console.log(Username, "username");
  console.log(Email, "email");
  console.log(Password, "password");
  console.log(isSuccess, "isSucces");
  console.log(error, "error");

  const registerUser = () => {
    regisUser({
      email: Email,
      name: Username,
      password: Password,
    });
  };

  return (
    <div>
      <input onChange={handleInput} placeholder="username" type="text" id="username" className="border" />
      <input onChange={handleInput} placeholder="email" type="text" id="email" className="border" />
      <input onChange={handleInput} placeholder="password" type="password" id="password" className="border" />
      <button
        onClick={() => {
          registerUser();
        }}
      >
        Register
      </button>
      <div onClick={() => navigate(`/login`)}>Login</div>
    </div>
  );
};
