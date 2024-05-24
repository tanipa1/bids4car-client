import React, { useContext, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { AuthContext } from "../../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RideRequests = ({ ridesharer }) => {
  const {user} = useContext(AuthContext);
  const [rideRequests, setRideRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rideRequests")
      .then((res) => res.json())
      .then((data) => {
        setRideRequests(data);
      });
  }, []);

  const handleAccept = id => {
    const updateRequests = { Accepted_by: user.displayName, rideSharer_contact: user.email  };

    fetch(`http://localhost:5000/rideRequests/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateRequests)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                        toast.success('Request Accepted!', {
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
  }

  return (
    <div className="p-8">
      <h1 className="text-black text-center font-bold text-lg mb-8">___Ride Requests___</h1>
      {ridesharer?.activity === "Active" && ridesharer?.status !== "Accepted" ? (
        <>
          {rideRequests.map((rideRequest) => (
            <div key={rideRequest._id}>
              <div className="card card-compact border-gray-400 border-[1px] w-96 bg-base-100 shadow-xl">
                <div className="card-body bg-white text-black">
                  <h2 className="card-title">
                    Passenger Name: {rideRequest.passenger_name}
                  </h2>
                  <p><span className="font-semibold">Contact no: </span> {rideRequest.phone_no}</p>

                  <p>
                    <span className="font-semibold">Pickup Point:</span>{" "}
                    {rideRequest.pickup}
                  </p>
                  
                  <p>
                    <span className="font-semibold">Destination Point:</span>{" "}
                    {rideRequest.destination}
                  </p>
                  <div className="flex">
                    <p className="flex">
                      <span className="font-semibold">Passenger Bid:</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="black"
                          d="M18.09 10.5V9h-8.5V4.5A1.5 1.5 0 0 0 8.09 3a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 0 0 8.09 6v3h-3v1.5h3v6.2c0 2.36 1.91 4.27 4.25 4.3c2.34-.04 4.2-1.96 4.16-4.3c0-1.59-.75-3.09-2-4.08a4 4 0 0 0-.7-.47c-.22-.1-.46-.15-.7-.15c-.71 0-1.36.39-1.71 1c-.19.3-.29.65-.29 1c.01 1.1.9 2 2.01 2c.62 0 1.2-.31 1.58-.8c.21.47.31.98.31 1.5c.04 1.5-1.14 2.75-2.66 2.8c-1.53 0-2.76-1.27-2.75-2.8v-6.2z"
                        />
                      </svg>
                      {rideRequest.passenger_bid}
                    </p>
                    <p className="flex">
                      <span className="font-semibold">Actual Rate:</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="black"
                          d="M18.09 10.5V9h-8.5V4.5A1.5 1.5 0 0 0 8.09 3a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 0 0 8.09 6v3h-3v1.5h3v6.2c0 2.36 1.91 4.27 4.25 4.3c2.34-.04 4.2-1.96 4.16-4.3c0-1.59-.75-3.09-2-4.08a4 4 0 0 0-.7-.47c-.22-.1-.46-.15-.7-.15c-.71 0-1.36.39-1.71 1c-.19.3-.29.65-.29 1c.01 1.1.9 2 2.01 2c.62 0 1.2-.31 1.58-.8c.21.47.31.98.31 1.5c.04 1.5-1.14 2.75-2.66 2.8c-1.53 0-2.76-1.27-2.75-2.8v-6.2z"
                        />
                      </svg>
                      {rideRequest.actual_rate}
                    </p>
                  </div>
                  <div className="card-actions w-full mt-4">
                    <button onClick={() => handleAccept(rideRequest._id)} className="btn btn-xs w-1/2 mx-auto hover:bg-white hover:text-black btn-outline text-black">Accept</button>
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
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <TypeAnimation
            className="p-20 text-center font-bold w-full text-black font-mono text-4xl mx-auto"
            style={{
              height: "150px",
              width: "850px",
              display: "block",
            }}
            sequence={["Set Your Status Active to get Ride Requests...", 800]}
            repeat={1}
          />
        </>
      )}
    </div>
  );
};

export default RideRequests;
