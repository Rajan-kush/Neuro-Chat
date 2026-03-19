import React from "react";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="h-screen w-screen bg-[url('../public/background.jpg')] bg-cover flex justify-center items-center ">
      <RegisterForm />
    </div>
  );
};

export default Register;
