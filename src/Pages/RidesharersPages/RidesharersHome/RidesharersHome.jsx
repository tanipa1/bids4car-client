import React, { useContext, useEffect, useState } from "react";
import RidesharersRegister from "./RidesharersRegister";
import { AuthContext } from "../../../Providers/AuthProvider";
import { TypeAnimation } from "react-type-animation";

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
      {ridesharers?.length === 0 ? 
        <>
          <div>
            <TypeAnimation
              className="mx-auto text-black mt-8 font-bold w-full text-center  font-mono text-4xl"
              style={{
                height: "150px",
                width: "1000px",
                display: "block",
              }}
              sequence={[
                `Hello, ${user?.displayName}!! Welcome to Bids 4 Rent Cars. You're not registered yet. Want to become a Ridesharers?`,
                800,
              ]}
              repeat={1}
            />
          </div>
          <RidesharersRegister></RidesharersRegister>
        </>
       : 
        <>
            
        </>
      }
    </div>
  );
};

export default RidesharersHome;
