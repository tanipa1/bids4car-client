import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RidesharersRegister = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
        const { name, number, license, car_reg, carType, max_person} = data;
        const ridesharers = { name, number, license, image: user.photoURL, email: user.email, car_reg, carType, max_person };

        fetch('http://localhost:5000/ridesharers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ridesharers)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                        toast.success('Information sent to Authority!', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        window.location.reload(); 
                        reset(); 
                }
            })
  };

  return (
    <form className="p-8 text-black" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full gap-5 justify-around">
        {/* Your Name */}
        <div className="form-control w-1/2">
          <label className="label">
            <span className="font-serif">Your Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder=""
            defaultValue={user.displayName}
            className="input bg-white input-bordered border-t-2 border-black"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>
        {/* Contact Number */}
        <div className="form-control w-1/2">
          <label className="label">
            <span className="font-serif">Contact Number</span>
          </label>
          <input
            type="text"
            {...register("number", { required: true })}
            placeholder=""
            className="input input-bordered bg-white border-t-2 border-black"
          />
          {errors.number && (
            <span className="text-red-600">Contact Number is required</span>
          )}
        </div>
      </div>
      <div className="flex w-full gap-5">
        {/* Driving License Number */}
        <div className="form-control w-1/2">
          <label className="label">
            <span className="font-serif">Driving License Number</span>
          </label>
          <input
            type="text"
            {...register("license", { required: true })}
            placeholder=""
            className="input input-bordered bg-white border-t-2 border-black"
          />
          {errors.license && (
            <span className="text-red-600">License Number is required</span>
          )}
        </div>
        {/* Car Registration Number */}
        <div className="form-control w-1/2">
          <label className="label">
            <span className="font-serif">Car Registration Number</span>
          </label>
          <input
            type="text"
            {...register("car_reg", { required: true })}
            placeholder=""
            className="input input-bordered bg-white border-t-2 border-black"
          />
          {errors.car_reg && (
            <span className="text-red-600">
              Car Registration Number is required
            </span>
          )}
        </div>
        
      </div>
      <div className="flex w-full gap-5">
        {/* Car-Type */}
        <div className="form-control w-1/2">
        <label className="label">
            <span className="font-serif">Choose Your Car Type</span>
          </label>
        <select
                className="input bg-white input-bordered border-t-2 border-black"
                {...register("carType", { required: true })}
              >
                <option disabled selected>
                  ...
                </option>
                <option value="Car Intercity">Car Intercity</option>
                <option value="Prime Intercity">Prime Intercity</option>
                <option value="Max Intercity">Max Intercity</option>
              </select>
        </div>
        {/* Maximum passenger */}
        <div className="form-control w-1/2">
          <label className="label">
            <span className="font-serif">Maximum passenger</span>
          </label>
          <input
            type="number"
            {...register("max_person", { required: true })}
            className="input input-bordered bg-white border-t-2 border-black"
          />
          {errors.max_person && (
            <span className="text-red-600">Max Person is required</span>
          )}
        </div>
      </div>
      <div className="form-control mt-6">
                    <input type="submit" className="btn bg-[#B20404] text-white w-1/2 mx-auto" value="Register" />
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </div>
    </form>
  );
};

export default RidesharersRegister;
