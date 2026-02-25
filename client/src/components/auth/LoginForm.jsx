import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-100 h-120 bg-transparent border-1 border-indigo-200/30 rounded-xl drop-shadow-[0_0_25px_rgba(97,95,255,0.2)] shadow-lg shadow-slate-400/30">
      <div className="flex justify-center">
        <img
          src="../public/dark-mode-logo.png"
          className="w-20 h-20 drop-shadow-[0_0_25px_rgba(79,57,246,0.2)]"
        />
      </div>

      <h2 className="text-slate-100 text-center text-5xl font-bold font-sans drop-shadow-[0_0_25px_rgba(79,57,246,0.5)] mt-2">
        Welcome
      </h2>
      <p className="text-slate-300/40 text-center mt-6">
        Where conversations actually mean something
      </p>
      <div className="mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-100 flex justify-center">
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              {...register("username", { required: "User Name required" })}
              className={`focus:outline-none border ${errors.password ? "focus:border-red-500 focus:ring-2 focus:ring-red-500/30 border-red-500" : "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 border-slate-100/30"} placeholder-text-slate-50/40 text-slate-200 shadow-xs shadow-slate-100/40 p-2 rounded-lg w-80 transition-all duration-200`}
            />
          </div>
          <div className="w-100 flex justify-center mt-6">
            <label htmlFor="password"></label>
            <input
              type="text"
              id="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className={`focus:outline-none border ${errors.password ? "focus:border-red-500 focus:ring-2 focus:ring-red-500/30 border-red-500" : "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 border-slate-100/30"} placeholder-text-slate-50/40 text-slate-200 shadow-xs shadow-slate-100/40 p-2 rounded-lg w-80 transition-all duration-200`}
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="w-80 bg-gradient-to-b from-indigo-500 to-indigo-700 text-slate-300 shadow-lg shadow-slate-950 p-2 border-transparent rounded-xl hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-700 hover:drop-shadow-[0_0_25px_rgba(79,57,246,0.3)] hover:w-82 transition-all duration-200 cursor-pointer"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="h-px w-100 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent mt-6"></div>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-slate-100/40 hover:text-slate-100">
            forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
