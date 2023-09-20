import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export const Login = () => {
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    setError(true);
    console.log(email, password);
    try {
      await signIn(email, password);
      navigate("/");
      setError(false);
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  };

  return (
    <div className="flex w-screen h-[calc(100vh-120px)] justify-center items-center bg-green-300">
      <form
        onSubmit={handelSubmit}
        className="flex justify-center items-center flex-col gap-6  p-5 bg-teal-400 "
      >
        <h3 className="text-xl">Login</h3>
        <label>
          Email :
          <input
            className="ml-2 p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email ..."
            type="email"
            name="email"
            required
          />
        </label>
        <label>
          Pass :
          <input
            className="ml-2 p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password ..."
            type="password"
            name="password"
            required
          />
        </label>
        {error ? error : ""}
        <button type="submit" className="bg-red-400 w-full text-xl">
          Submit
        </button>
      </form>
    </div>
  );
};
