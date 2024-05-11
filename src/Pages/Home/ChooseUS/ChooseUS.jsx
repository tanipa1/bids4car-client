import React from "react";

const ChooseUS = () => {
  return (
    <div className="py-10 px-16 text-black bg-white">
      <div className="w-1/2 mx-auto text-center">
        <h1 className="font-bold text-3xl">
          Why <span className="text-[#B20404]">Choose</span> Us
        </h1>
        <p className="text-sm">
          We stands as your trusted partner. Our dedication to customer
          satisfaction sets us apart.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-8">
        {/* Support */}
        <div className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="#B20404"
              d="m10.155 14.773l-.009-.021a7 7 0 0 1-.402-.123l-.01-.004A7 7 0 0 1 5 8a7 7 0 0 1 13.96-.749c.044.412-.296.749-.71.749s-.745-.338-.8-.748a5.501 5.501 0 1 0-7.279 5.937a2 2 0 0 1 3.829.81a2 2 0 0 1-3.845.774m-1.025 1.23a8.5 8.5 0 0 1-3.136-1.988a2.25 2.25 0 0 0-1.99 2.234v.92c0 .572.178 1.13.51 1.596C6.056 20.929 8.58 22 12 22s5.945-1.072 7.49-3.235a2.75 2.75 0 0 0 .513-1.599v-.918a2.25 2.25 0 0 0-2.248-2.25H15.5a3.5 3.5 0 0 1-6.37 2.004M16 8a4 4 0 0 0-1.431-3.066a4 4 0 1 0-4.811 6.379A3.5 3.5 0 0 1 12 10.5c.853 0 1.635.305 2.243.813A4 4 0 0 0 16 8"
            />
          </svg>
          <div>
            <h1 className="font-bold">24 Hour Support</h1>
            <p>
            "Support that never sleeps: Our 24/7 assistance is here to guide you through every twist and turn of your journey."
            </p>
          </div>
        </div>

        {/* Bidding System */}
        <div className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="#B20404"
              d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-6.211 4.384a2 2 0 0 0-2.683-.895l-.553.277a1 1 0 0 0 .894 1.788L9 8.618L8.999 10H8a1 1 0 0 0-.993.883L7 11a1 1 0 0 0 1 1h.999L9 15a3 3 0 0 0 2.824 2.995L12 18h.5a3.5 3.5 0 0 0 3.5-3.5V14a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1l.007.117a1 1 0 0 0 .876.876l.032.002l-.02.057A1.5 1.5 0 0 1 12.5 16H12a1 1 0 0 1-1-1l-.001-3H15a1 1 0 0 0 .993-.883L16 11a1 1 0 0 0-1-1h-4.001L11 8.618a2 2 0 0 0-.136-.725z"
            />
          </svg>
          <div>
            <h1 className="font-bold">Bidding System</h1>
            <p>
              "Rev up your ride with our bidding system: Where fares meet your
              terms, and every bid is a winning drive!"
            </p>
          </div>
        </div>

        {/* Verified */}
        <div className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="#B20404"
              d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm-2 16l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z"
            />
          </svg>
          <div>
            <h1 className="font-bold">Verified License</h1>
            <p>
              "Travel with confidence: Our fleet boasts verified, licensed cars,
              and drivers for your peace of mind on every journey."
            </p>
          </div>
        </div>

        {/* Safety */}
        <div className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="#B20404"
              d="M6 8c0-2.21 1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4m6 10.2c0-.96.5-1.86 1.2-2.46v-.24c0-.39.07-.76.18-1.12c-1.03-.24-2.17-.38-3.38-.38c-4.42 0-8 1.79-8 4v2h10zm10 .1v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V17c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V17h3z"
            />
          </svg>
          <div>
            <h1 className="font-bold">Safety & Security</h1>
            <p>
            "Your safety, our priority: With robust safety measures and security protocols, we ensure worry-free travels from start to finish."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUS;
