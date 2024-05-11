import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { AuthContext } from "../../Providers/AuthProvider";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const SignUp = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.photo[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          createUser(data.email, data.password)
            .then((result) => {
              const loggedUser = result.user;
              console.log(loggedUser);
              updateUserProfile(data.name, imgURL).then(() => {
                const saveUser = {
                  telephone: data.telephone,
                  name: data.name,
                  email: data.email,
                  photo: imgURL,
                  accountType: data.accountType,
                };
                fetch("http://localhost:5000/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                      reset();
                      navigate("/");
                    }
                  });
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  };

  return (
    <div className="login-bg py-5 text-white">
      <div className="hero min-h-screen px-8">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <TypeAnimation
              className="font-bold lg:block font-serif text-5xl"
              sequence={["Welcome aboard! ", 800]}
              repeat={1}
            />
            <p className="py-6">
              Get ready to embark on a journey of endless possibilities. Sign up
              now and let's begin the adventure together!
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-white text-black">
            <h1 className="text-2xl mt-5 text-center font-semibold">
              Sign <span className="font-bold text-[#B20404]">Up</span>
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="flex w-full gap-3">
                {/* Name */}
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="font-mono">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    className="input bg-white input-bordered border-t-2 border-black"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required*</span>
                  )}
                </div>
                {/* Telephone */}
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="font-mono">Telephone</span>
                  </label>
                  <input
                    type="text"
                    {...register("telephone", { required: true })}
                    placeholder="Your Contact Number"
                    className="input bg-white input-bordered border-t-2 border-black"
                  />
                  {errors.telephone && (
                    <span className="text-red-600">telephone is required*</span>
                  )}
                </div>
              </div>

              {/* Photo */}
              <div className="form-control">
                <label className="label">
                  <span className="font-mono">Upload Your Photo</span>
                </label>
                <input
                  type="file"
                  {...register("photo", { required: true })}
                  className="file-input bg-white file-input-bordered w-full border-t-2 border-black"
                />
                {errors.photo && (
                  <span className="text-red-600">Photo is required*</span>
                )}
              </div>

              <div className="flex justify-between gap-3 w-full">
                {/* Email */}
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="font-mono">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="Email"
                    className="input bg-white input-bordered border-t-2 border-black "
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required*</span>
                  )}
                </div>

                {/* Password */}
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="font-mono">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, // Password pattern with at least one capital letter and one special character
                    })}
                    placeholder="password"
                    className="input bg-white input-bordered border-t-2 border-black"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password length is less than 6
                    </p>
                  )}
                  {errors.password && errors.password.type === "pattern" && (
                    <span className="text-red-600">
                      Password must have at least one capital letter and one
                      special character @$!%*?&.
                    </span>
                  )}
                </div>
              </div>

              {/* Account-Type */}
              <select
                className="input bg-white input-bordered border-t-2 border-black mt-4"
                {...register("accountType", { required: true })}
              >
                <option disabled selected>
                  Choose Your Account Type
                </option>
                <option value="Passengers">Sign Up as a Passengers</option>
                <option value="Ridesharers">Sign Up as a Ridesharers</option>
              </select>

              {/* Submit */}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-black hover:bg-[#B20404] text-white w-1/2 mx-auto"
                  value="Sign Up"
                />
              </div>
              <p className="text-center">
                Already have an account?
                <Link to="/login" className="text-[#B20404] underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
