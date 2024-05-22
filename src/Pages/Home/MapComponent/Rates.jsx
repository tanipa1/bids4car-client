import React from "react";

const Rates = ({ rate, distance }) => {
  const { carType, rent } = rate;
  const totalRate = Math.round(rent * distance);

  return (
    <div className="my-5">
      <p className="mb-2 font-semibold text-lg">{carType} :</p>
      <div className="flex justify-between items-center">
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
        <div className="flex gap-4 items-center">
          <button className="btn btn-xs btn-outline text-black ">
            Request Ride
          </button>
        </div>
        <div>
        <button className="btn btn-xs btn-outline text-black ">
            Sent a Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rates;
