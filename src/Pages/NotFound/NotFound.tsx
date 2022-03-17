import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../Assets/Videos/notfound.mp4";

const NotFound = () => {
  return (
    <div className="notfound">
      <video className="notfound__bg-video" muted loop autoPlay={true}>
        <source src={notfound} type="video/mp4"></source>
      </video>
      <div className="notfound__container">
        <span className="notfound__text notfound__text--main">404</span>
        <span className="notfound__text notfound__text--sub">Not found</span>
        <Link to="/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
