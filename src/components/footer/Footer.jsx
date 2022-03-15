import React from "react";
import "./footer.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="title">
        <h3>
          <span>Weather</span> Web
        </h3>
        <WbSunnyIcon id="icon"></WbSunnyIcon>
      </div>

      <h3 className="copyRight">
        <CopyrightIcon></CopyrightIcon> Copyright 2021 by Micael Alessandro
        Gomez
      </h3>
      <div>
        <a
          href="https://www.linkedin.com/in/micael-alessandro-gomez-fullstack/"
          target="_blank"
          rel="noopener"
          className="contact"
        >
          <LinkedInIcon></LinkedInIcon>{" "}
        </a>
        <a
          href="https://github.com/micaelgomez/Clima-web"
          target="_blank"
          rel="noopener"
          className="contact"
        >
          <GitHubIcon></GitHubIcon>{" "}
        </a>
      </div>
    </div>
  );
};
