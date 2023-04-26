import React from "react";
import Logo from "../assets/logo.png";
import LogoAl from "../assets/Little Company Logo_transparent_white_pn 1.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_container_wrapper">
        <div className="footer_container_wrapper_col">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: 100 }}
            className="footer_container_wrapper_col_logo"
          />
          <div className="footer_container_wrapper_col_entry">
            Museyo Beach, Eleko, Lotu Street, <br />
            Off Lekki Free <br /> Trade Zone Road. Lagos.
          </div>
          <a
            href="mailto:info@jarabeachresort.com"
            style={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
            }}
            className="footer_container_wrapper_col_entry"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 10 }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.66895 4.00562V17.3553H18.3561V4.00562H1.66895ZM16.6871 5.67456V6.06254L10.0122 10.5122L3.3374 6.06254V5.67456H16.6871ZM3.33742 15.6865V8.068L10.0123 12.5185L16.6871 8.068V15.6865H3.33742Z"
                fill="white"
              />
            </svg>
            info@jarabeachresort.com
          </a>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
            }}
            className="footer_container_wrapper_col_entry footer_container_wrapper_col_entry-whatsapp-number "
          >
            <svg
              style={{ marginRight: 10 }}
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.2614 19.2239C10.7434 19.2239 7.78057 17.8873 5.29252 15.4009C1.32265 11.4302 0.286382 6.24717 2.93296 3.6006C3.71475 2.81964 4.66592 2.34406 5.76309 2.18553L6.3972 2.09375L8.7309 7.53542L6.3972 8.70185C6.93787 9.72644 7.7572 10.7852 8.83269 11.8607C9.85811 12.8861 10.9161 13.6996 11.9782 14.277L13.0746 12.1302L18.4837 12.9028L18.5154 13.5928C18.5947 15.3108 18.1024 16.7517 17.092 17.7613C16.1041 18.7492 14.7616 19.2239 13.2614 19.2239ZM5.39062 3.98242C4.91086 4.14345 4.482 4.41128 4.11239 4.78173C2.19337 6.69992 3.27469 11.0227 6.47194 14.2208C9.67086 17.4189 13.9928 18.4977 15.9118 16.5804C16.551 15.9412 16.7812 15.0985 16.838 14.3526L14.0287 13.9513L13.4897 15.031C13.2861 15.4381 12.9349 15.7377 12.5002 15.8737C12.0655 16.0113 11.5832 15.9621 11.1794 15.7427C9.97791 15.0894 8.79062 14.1799 7.65172 13.041C6.45859 11.8479 5.54164 10.6556 4.92505 9.49668C4.71062 9.09202 4.66973 8.62978 4.80824 8.19425C4.94674 7.76122 5.24627 7.41162 5.65261 7.20804L6.5754 6.74664L5.39062 3.98242Z"
                fill="white"
              />
            </svg>
            + 12 3456 7890
          </a>
        </div>
        <div className="footer_container_wrapper_col">
          <div className="footer_container_wrapper_col_entry_header">Services</div>

          <div className="links">
            <Link to="/rooms" className="footer_container_wrapper_col_entry">
              Rooms Details
            </Link>
            <Link to="/car-services" className="footer_container_wrapper_col_entry">
              Car Services
            </Link>
            <Link
              to="/overnight-experiences-and-booking"
              className="footer_container_wrapper_col_entry"
            >
              Overnight Booking
            </Link>
            <Link to="/day-pass" className="footer_container_wrapper_col_entry">
              Day Pass Booking
            </Link>
          </div>
        </div>
        <div className="footer_container_wrapper_col">
          <div className="footer_container_wrapper_col_entry_header">Support</div>
          <div className="links">
            <Link to="/faqs" className="footer_container_wrapper_col_entry">
              FAQs
            </Link>
            <Link
              to="/responsible-hospitality"
              href=""
              className="footer_container_wrapper_col_entry"
            >
              Responsible Hospitality
            </Link>
            <Link to="/taxes" className="footer_container_wrapper_col_entry">
              Taxes
            </Link>
            <Link to="/complaints" className="footer_container_wrapper_col_entry">
              Complaints
            </Link>
          </div>
        </div>
        <div className="footer_container_wrapper_col">
          <div className="footer_container_wrapper_col_entry_header">Company</div>
          <div className="links">
            <Link to="/about" className="footer_container_wrapper_col_entry">
              About
            </Link>
            <Link to="/history" className="footer_container_wrapper_col_entry">
              History
            </Link>
            <Link to="/join-us" className="footer_container_wrapper_col_entry">
              Join Us
            </Link>
            <Link to="/jara-for-good" className="footer_container_wrapper_col_entry">
              Jara For Good
            </Link>
            <a href="" className="footer_container_wrapper_col_entry">
              Partners
            </a>
          </div>
        </div>
        <div className="footer_container_wrapper_col">
          <div className="footer_container_wrapper_col_entry_header">Legal</div>
          <div className="links">
            <a href="" className="footer_container_wrapper_col_entry">
              About
            </a>
            <a href="" className="footer_container_wrapper_col_entry">
              Claim
            </a>
            <a href="" className="footer_container_wrapper_col_entry">
              Privacy
            </a>
            <a href="" className="footer_container_wrapper_col_entry">
              Terms
            </a>
          </div>
        </div>
      </div>
      <div className="footer_footer">
        <img src={LogoAl} alt="LogoAl" />
        <div>
          <div className="para">© Jara beach resort</div>
          <div className="para">Owned and operated by Little Company Nigeria Limited</div>
        </div>
        <div>
          <div className="para">RC 1424441</div>
          <div className="para">TIN 20505177</div>
        </div>
      </div>
    </div>
  );
}
