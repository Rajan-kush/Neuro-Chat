import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../api/authApi";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (formData) => {
    try {
      const data = await registerUser(formData);
      console.log("login succesful : ", data.data.accessToken);
    } catch (error) {
      console.error("Login failed:", error.response?.data);
    }
  };

  return (
    <div className="flex w-210 h-140 flex bg-transparent border-1 border-indigo-200/30 rounded-xl drop-shadow-[0_0_25px_rgba(97,95,255,0.2)] shadow-lg shadow-slate-400/30">
      <div>
        <div className="flex flex-col item-center">
          <h2 className="text-slate-100 text-center text-4xl font-bold font-sans drop-shadow-[0_0_25px_rgba(79,57,246,0.5)] mt-4">
            Register
          </h2>
          <p className="text-slate-300/40 text-center mt-6">
            Where conversations actually mean something
          </p>
          <div className="mt-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-100 flex justify-center">
                <label htmlFor="fullName"></label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="FullName"
                  onChange={handleChange}
                  {...register("fullName", { required: "Fullname required" })}
                  className={`focus:outline-none border ${errors.fullName ? "focus:border-red-500 focus:ring-2 focus:ring-red-500/30 border-red-500" : "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 border-slate-100/30"} placeholder-text-slate-50/40 text-slate-200 shadow-xs shadow-slate-100/40 p-2 rounded-lg w-80 transition-all duration-200`}
                />
              </div>
              <div className="w-100 flex justify-center mt-6">
                <label htmlFor="username"></label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  onChange={handleChange}
                  {...register("username", {
                    required: "Username is required",
                  })}
                  className={`focus:outline-none border ${errors.username ? "focus:border-red-500 focus:ring-2 focus:ring-red-500/30 border-red-500" : "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 border-slate-100/30"} placeholder-text-slate-50/40 text-slate-200 shadow-xs shadow-slate-100/40 p-2 rounded-lg w-80 transition-all duration-200`}
                />
              </div>
              <div className="w-100 flex justify-center mt-6">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  id="email"
                  placeholder="email"
                  onChange={handleChange}
                  {...register("email", { required: "email is required" })}
                  className={`focus:outline-none border ${errors.email ? "focus:border-red-500 focus:ring-2 focus:ring-red-500/30 border-red-500" : "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 border-slate-100/30"} placeholder-text-slate-50/40 text-slate-200 shadow-xs shadow-slate-100/40 p-2 rounded-lg w-80 transition-all duration-200`}
                />
              </div>
              <div className="w-100 flex justify-center mt-6">
                <label htmlFor="password"></label>
                <input
                  type="text"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`focus:outline-none border ${errors.password ? "focus:border-red-500 focus:ring-2 focus:ring-red-500/30 border-red-500" : "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 border-slate-100/30"} placeholder-text-slate-50/40 text-slate-200 shadow-xs shadow-slate-100/40 p-2 rounded-lg w-80 transition-all duration-200`}
                />
              </div>
              <div className="w-100 flex justify-center mt-6">
                <label
                  htmlFor="avatar"
                  className={`focus:outline-none border ${errors.avatar ? "focus:border-red-500 focus:ring-2 focus:ring-red-500/30 border-red-500" : "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 border-slate-100/30"} text-slate-50/40 shadow-xs shadow-slate-100/40 p-2 rounded-lg w-80 transition-all duration-200`}
                >
                  Upload Avatar
                </label>
                <input
                  type="file"
                  id="avatar"
                  onChange={handleChange}
                  placeholder="Avatar"
                  {...register("avatar", { required: "Avatar is required" })}
                  hidden
                />
              </div>
              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  className="w-80 bg-gradient-to-b from-indigo-500 to-indigo-700 text-slate-300 shadow-lg shadow-slate-950 p-2 border-transparent rounded-xl hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-700 hover:drop-shadow-[0_0_25px_rgba(79,57,246,0.3)] hover:w-82 transition-all duration-200 cursor-pointer"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-110 h-140 ">
        <img
          src="./blackabstract.jpg"
          className="w-full h-full border rounded-r-xl"
        />
      </div>
    </div>
  );
};

export default RegisterForm;
