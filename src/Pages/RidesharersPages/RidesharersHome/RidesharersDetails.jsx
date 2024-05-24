import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import RideRequests from "../RideRequests/RideRequests";
import 'react-toastify/dist/ReactToastify.css';
 
const RidesharersDetails = ({ ridesharer }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const { activity } = data;
    const ridesharers = { activity };

    fetch(`http://localhost:5000/ridesharers/activity/${ridesharer._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ridesharers)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                        toast.success('Status Updated Successfully!', {
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
    <div className="drawer drawer-end lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}

          <RideRequests ridesharer={ridesharer}></RideRequests>
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-primary lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4  w-60 min-h-screen bg-black text-white">
          {/* Sidebar content here */}
          <div className="grid justify-center">
            {ridesharer?.activity === "Active" ? 
            <div className="avatar online">
            <div className="w-24 rounded-full">
              <img className="avatar online" src={ridesharer.image} />
            </div>
          </div>:
          <div className="avatar offline  ">
            <div className="w-24 rounded-full ">
              <img className="avatar offline " src={ridesharer.image} />
            </div>
          </div>

            }
          </div>
          <div className="grid justify-center">
            <h1 className="mt-5 font-bold text-2xl">{ridesharer.name}</h1>
            <p className="mt-3">
              <span className="font-bold">Driving Licence:</span>{" "}
              {ridesharer.license}
            </p>
            <p>
              <span className="font-bold">Car Registration Number:</span>{" "}
              {ridesharer.car_reg}
            </p>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="join flex items-center mt-5">
              <select
                className="join-item input input-xs  text-black bg-white input-bordered border-t-2 border-black"
                {...register("activity", { required: true })}
              >
                <option disabled selected>
                  Select your activity...
                </option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <input
                type="submit"
                className="join-item btn btn-xs bg-[#B20404] text-white w-1/3 mx-auto"
                value="Save"
              />
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
        </ul>
      </div>
    </div>
  );
};

export default RidesharersDetails;
