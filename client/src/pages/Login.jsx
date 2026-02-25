import React from "react";
import LoginForm from "../components/auth/loginform";

const Login = () => {
  return (
    <div className="h-screen w-screen bg-[url('../public/background.jpg')] bg-cover flex justify-center items-center ">
      <LoginForm />
    </div>
  );
};

export default Login;
