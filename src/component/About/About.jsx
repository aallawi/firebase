import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export const About = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signup");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="flex flex-col items-center w-screen h-[calc(100vh-120px)] justify-center align-center  bg-lime-400 py-6">
      <h1 className="text-2xl font-bold m-5">About</h1>
      <p>User Email: {user && user.email}</p>
      <button
        onClick={handleLogout}
        className="border px-6 py-1 my-5 bg-red-500 text-white"
      >
        Logout
      </button>
    </div>
  );
};
