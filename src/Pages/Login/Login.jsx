import React, { useContext } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
  }

  return (
    <div className="login-bg text-white">
      <div className="hero min-h-screen px-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <TypeAnimation
              className="font-bold lg:block font-serif text-5xl"
              sequence={["Welcome Back!", 800]}
              repeat={1}
            />
            <p className="py-6">
              Ready to pick up where you left off? Log in now and let's continue
              the journey together!
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-white text-black">
            <h1 className="text-2xl text-center mt-5 font-bold">
              Login <span className="font-bold text-[#B20404]">Here</span>
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="font-mono">Email*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="your email"
                  className="input bg-white input-bordered border-t-2 border-black"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required*</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-mono">Password*</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                  })}
                  name="password"
                  placeholder="password"
                  className="input bg-white input-bordered border-t-2 border-black"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-black hover:bg-[#B20404] text-white w-1/2 mx-auto"
                  value="Login"
                />
              </div>
              <p className="text-center">
                New here?{" "}
                <Link to="/signUp" className="text-[#B20404] underline">
                  Create a New Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
