import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Rates = ({ rate, distance, destination, pickup }) => {
  const { carType, rent } = rate;
  const totalRate = Math.round(rent * distance);
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const { passenger_bid, phone_no } = data;
    const rideRequests = {
      passenger_bid: parseFloat(passenger_bid),
      passenger_name: user.displayName,
      passenger_email: user.email,
      phone_no,
      pickup,
      destination,
      actual_rate: totalRate,
      carType,
    };

    fetch("http://localhost:5000/rideRequests", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rideRequests),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Ride Request sent", {
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
      });
  };

  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <p className="mb-2 font-semibold text-lg">{carType} :</p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M18.09 10.5V9h-8.5V4.5A1.5 1.5 0 0 0 8.09 3a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 0 0 8.09 6v3h-3v1.5h3v6.2c0 2.36 1.91 4.27 4.25 4.3c2.34-.04 4.2-1.96 4.16-4.3c0-1.59-.75-3.09-2-4.08a4 4 0 0 0-.7-.47c-.22-.1-.46-.15-.7-.15c-.71 0-1.36.39-1.71 1c-.19.3-.29.65-.29 1c.01 1.1.9 2 2.01 2c.62 0 1.2-.31 1.58-.8c.21.47.31.98.31 1.5c.04 1.5-1.14 2.75-2.66 2.8c-1.53 0-2.76-1.27-2.75-2.8v-6.2z"
            />
          </svg>
          <span>{totalRate}</span>
        </p>
      </div>
      <div className="flex justify-between items-center">
        {distance ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-end items-center join">
              <input
                {...register("phone_no")}
                className=" join-item input input-bordered input-xs bg-white border-gray-300 rounded-md"
                type="number"
                placeholder="Contact No."
              />
              <input
                {...register("passenger_bid")}
                className="w-1/2 join-item input input-bordered input-xs bg-white border-gray-300 rounded-md"
                type="number"
                placeholder="Set a Bid"
              />
              {!user?.email ? (
                <input
                  disabled
                  type="submit"
                  value="Login to Request"
                  className="join-item disabled:text-white btn btn-xs text-white "
                />
              ) : (
                <input
                  type="submit"
                  value="Request Ride"
                  className="join-item rounded-md btn btn-xs btn-outline text-black "
                />
              )}
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
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Rates;
