import React from "react";
import logo from "../../assets/JASH.png";
import FooterIcons from "../FooterIcons/FooterIcons";
import "./Footer.css";

const teams = [
  { name: "Hiba Abdel Karim", github: "", linkedin: "", instagram: "" },
  { name: "Abdel Raouf Dannaoui", github: "", linkedin: "", instagram: "" },
  { name: "Joseph Tarrazi", github: "", linkedin: "", instagram: "" },
  { name: "Samira al samargi", github: "", linkedin: "", instagram: "" },
];

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 footer-about">
              <img
                className="logo-footer"
                src={logo}
                alt="logo-footer"
                data-at2x="assets/img/logo.png"
                width="180"
                height="150"
              />
              <p>
                Watch JASH movies & TV shows online or stream right to your
                smart TV, game console, PC, Mac, mobile, tablet and more.
              </p>
            </div>
            <div className="col-md-4 col-lg-4 offset-lg-1 footer-contact ourTeam">
              <h3>Our Team</h3>
              <br />
              <div className="d-space-around ">
                {teams &&
                  teams.map((member) => (
                    <p className="font-size">{member.name}</p>
                  ))}
              </div>
            </div>

            <div className="col-md-4 col-lg-3 footer-social">
              <h3>Follow us</h3>
              <br />
              <p className="social-media-p">
                <FooterIcons teams = {teams} act = "github"/>
                <FooterIcons teams = {teams} act = {teams.linkedin}/>
                <FooterIcons teams = {teams}/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

