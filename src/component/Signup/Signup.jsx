import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export const Signup = () => {
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handelEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      await createUser(email, password);
      navigate("/");
      setError(false);
    } catch (e) {
      console.log(e.message);
      setError(e.message);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex w-screen h-[calc(100vh-120px)] flex-col justify-center items-center text-center bg-orange-600">
      <div className=" basis-3 flex w-screen  justify-center items-center bg-orange-600">
        <form
          onSubmit={handelSubmit}
          className="flex justify-center items-center flex-col gap-6 border-solid p-5 bg-orange-300 border-amber-400 border-2 h-fit"
        >
          <h3 className="text-xl">Signup</h3>
          <label>
            Email :
            <input
              className="ml-2 p-2"
              value={email}
              onChange={handelEmail}
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
              minlength="6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password ..."
              type="password"
              name="password"
              required
            />
          </label>
          {error ? (
            <span className="text-red-500">
              Email address is already registered. <br /> Try registering
              another email.
            </span>
          ) : (
            ""
          )}

          <button type="submit" className="bg-red-400 w-full text-xl">
            Submit
          </button>
        </form>
      </div>
      <div className="py-4 basis-1">
        <h4 className="mb-4"> already have an account</h4>
        <NavLink
          className="text-green-900 text-xl border-2 bg-sky-200 rounded px-4 py-1"
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};
