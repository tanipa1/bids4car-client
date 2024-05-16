import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { TypeAnimation } from "react-type-animation";
import RidesharersRegister from "./RidesharersRegister";
import RidesharersDetails from "./RidesharersDetails";

const RidesharersHome = () => {
  const { user } = useContext(AuthContext);
  const [ridesharers, setRidesharers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/ridesharers")
      .then((res) => res.json())
      .then((data) => {
        setRidesharers(data);
      });
  }, []);

  return (
    <div>
      {ridesharers.length === 0 ?
                <div className="grid justify-center">
                    <div>
                        <TypeAnimation className='font-bold w-full  font-mono text-4xl'
                            style={{
                                height: '150px',
                                width: '1000px',
                                display: 'block',
                            }}
                            sequence={[`Hello, ${user?.displayName}!! Welcome to Bids 4 Rent Cars. You're not registered yet. Want to become a Ridesharer?`, 800]}
                            repeat={1}
                        />
                    </div>
                    <RidesharersRegister></RidesharersRegister>
                </div> :
                <div>
                    {ridesharers.map(ridesharer =>
                        <div key={ridesharer._id}>
                            {ridesharer.status === true ?
                                <>
                                    <RidesharersDetails ridesharer={ridesharer}></RidesharersDetails>
                                </> :
                                <div className="grid gap-3 justify-center ">
                                    <p className="mt-12 font-semibold text-xl">Your Information has been sent to Admin for verification.</p>

                                    <p className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M11 8v5h5" /></g>
                                        </svg>
                                        Get a response within 1-2 business days
                                    </p>
                                </div>
                            }
                        </div>
                    )
                    }
                </div>
            }
    </div>
  );
};

export default RidesharersHome;
