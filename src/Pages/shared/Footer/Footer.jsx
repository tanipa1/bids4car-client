import React from "react";
import logo from "../../../assets/2.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <aside>
        <img className="w-36" src={logo} alt="" />
        <p className="flex gap-5">
          {/* Facebook */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="26"
            viewBox="0 0 256 256"
          >
            <path
              fill="#1877f2"
              d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
            />
            <path
              fill="#fff"
              d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"
            />
          </svg>

          {/* Youtube */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34.14"
            height="24"
            viewBox="0 0 256 180"
          >
            <path
              fill="#f00"
              d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
            />
            <path
              fill="#fff"
              d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
            />
          </svg>

          {/* Twitter */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <path d="M1 2h2.5L3.5 2h-2.5z">
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.4s"
                  values="M1 2h2.5L3.5 2h-2.5z;M1 2h2.5L18.5 22h-2.5z"
                />
              </path>
              <path d="M5.5 2h2.5L7.2 2h-2.5z">
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.4s"
                  values="M5.5 2h2.5L7.2 2h-2.5z;M5.5 2h2.5L23 22h-2.5z"
                />
              </path>
              <path d="M3 2h5v0h-5z" opacity="0">
                <set attributeName="opacity" begin="0.4s" to="1" />
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.4s"
                  dur="0.4s"
                  values="M3 2h5v0h-5z;M3 2h5v2h-5z"
                />
              </path>
              <path d="M16 22h5v0h-5z" opacity="0">
                <set attributeName="opacity" begin="0.4s" to="1" />
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.4s"
                  dur="0.4s"
                  values="M16 22h5v0h-5z;M16 22h5v-2h-5z"
                />
              </path>
              <path d="M18.5 2h3.5L22 2h-3.5z" opacity="0">
                <set attributeName="opacity" begin="0.5s" to="1" />
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.5s"
                  dur="0.4s"
                  values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"
                />
              </path>
            </g>
          </svg>
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input border-white input-bordered join-item"
              />
              <button className="btn bg-[#B20404] text-white border-white join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </nav>
    </footer>
  );
};

export default Footer;
