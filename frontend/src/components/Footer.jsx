import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSquareInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Ghaziabad, India</li>
            <li>utkarshukla2003@gmail.com</li>
            <li>+91 8840878451</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li to={"/"}>
              <Link>Home</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"https://www.instagram.com/_utkarshukla/"}>
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/utkarsh2314"}>
                <span>
                  <FaGithub />
                </span>
                <span>GitHub</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/in/-utkarshukla/"}>
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved. peace out ;-O
      </div>
    </>
  );
};

export default Footer;
