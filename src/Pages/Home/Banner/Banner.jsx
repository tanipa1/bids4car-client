import React from "react";
import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";
import banner4 from "../../../assets/banner4.jpg";

const Banner = () => {
  return (
    <div className="carousel bg-white w-full h-[500px] ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={banner1} className="w-full" />
        <div className="absolute flex items-center h-full w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h1 className="text-5xl font-bold">
              "Unlock Your Ride: Bid Your Fare!"
            </h1>
            <p>
              "Efficient, eco-friendly ridesharing: book easily, stay safe,
              enjoy fair pricing, quality service, responsive support, and
              special promotions."
            </p>
            <div className="text-white flex gap-4">
              <button className="btn text-white bg-[#B20404] hover:bg-black hover:text-white">Discover More</button>
              <button className="btn btn-outline border-white text-white hover:border-white hover:text-white hover:bg-base-100">
              Affordable
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <img src={banner2} className="w-full" />
        <div className="absolute flex items-center h-full w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h1 className="text-5xl font-bold">
              "Ride Smarter, Save Greener!"
            </h1>
            <p>
            "Green, user-friendly ridesharing platform: intuitive booking, safety measures, fair fares, superior service, responsive assistance, and enticing promotions."
            </p>
            <div className="text-white flex gap-4">
            <button className="btn text-white bg-[#B20404] hover:bg-black hover:text-white">Discover More</button>
              <button className="btn btn-outline border-white text-white hover:border-white hover:text-white hover:bg-base-100">
              Affordable
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full ">
        <img src={banner3} className="w-full" />
        <div className="absolute flex items-center h-full w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h1 className="text-5xl font-bold">
            "Share the Ride, Share the Love!"
            </h1>
            <p>
            "Sustainable, hassle-free rideshare: effortless booking, safety first, competitive pricing, premium service, attentive support, and attractive promotions."
            </p>
            <div className="text-white flex gap-4">
            <button className="btn text-white bg-[#B20404] hover:bg-black hover:text-white">Discover More</button>
              <button className="btn btn-outline border-white text-white hover:border-white hover:text-white hover:bg-base-100">
              Affordable
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full ">
        <img src={banner4} className="w-full" />
        <div className="absolute flex items-center h-full w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h1 className="text-5xl font-bold">
            "Driving Change, One Ride at a Time!"
            </h1>
            <p>
            "Convenient, sustainable rideshare: simple booking, safety features, fair rates, reliable service, helpful support, and ongoing promotions."
            </p>
            <div className="text-white flex gap-4">
            <button className="btn text-white bg-[#B20404] hover:bg-black hover:text-white">Discover More</button>
              <button className="btn btn-outline border-white text-white hover:border-white hover:text-white hover:bg-base-100">
              Affordable
              </button>     
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
