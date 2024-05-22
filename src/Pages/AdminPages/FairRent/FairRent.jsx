import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const FairRent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const { carType, rent} = data;
        const rates = { rent: parseFloat(rent) };

        fetch(`http://localhost:5000/rates/${carType}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rates)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                        toast.success('Rate Updated Successfully!', {
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
    <div className="text-black">
      <h1 className="font-semibold text-2xl text-center mb-12">
        Set a Fair Rate For Different Cars
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="flex gap-4 mt-3 items-end w-full">
            <div className="w-1/2">
              <p className="text-center font-semibold mb-2">Car Type</p>
              <select
                className="input w-full bg-white input-bordered border-t-2 border-black"
                {...register("carType", { required: true })}
              >
                <option disabled selected>
                  Select a Car Type
                </option>
                <option value="Car Intercity">Car Intercity</option>
                <option value="Prime Intercity">Prime Intercity</option>
                <option value="Max Intercity">Max Intercity</option>
              </select>
              {errors.carType && (
                <span className="text-red-600">Car Type is required</span>
              )}
            </div>
            <div>
              <p className="text-center font-semibold mb-2">Rate per km</p>
              <input
                type="number"
                {...register("rent", { required: true })}
                className="input bg-white input-bordered border-t-2 border-black"
              />
              {errors.rent && (
                <span className="text-red-600">Rent is required</span>
              )}
            </div>
            <div>
              <input
                type="submit"
                className="btn mb-2 btn-sm bg-[#B20404] text-white mx-auto"
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default FairRent;
