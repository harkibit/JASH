import React from "react";
import logo from "../../assets/JASH.png";
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
            <div className="col-md-4 col-lg-4 footer-about wow fadeInUp animated">
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
            <div className="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown animated ourTeam">
              <h3>Our Team</h3>
              <br />
              <div className="d-space-around ">
                {teams &&
                  teams.map((member) => (
                    <p className="font-size">{member.name}</p>
                  ))}
              </div>
            </div>

            <div className="col-md-4 col-lg-3 footer-social wow fadeInUp animated">
              <h3>Follow us</h3>
              <br />
              <Icons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <p className="social-media-p">
      <div className="d-space-around">
        {teams &&
          teams.map((git) => (
            <a href={git.github} className="social-media-icons raoufIcon">
              <i className="fab fa-github"></i>
            </a>
          ))}
      </div>

      <div className="d-space-around">
        {teams &&
          teams.map((lkn) => (
            <a
              href={lkn.linkedin}
              target="_blank"
              className="social-media-icons raoufIcon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          ))}
      </div>

      <div className="d-space-around">
        {teams &&
          teams.map((insta) => (
            <a href={insta.instagram} className="social-media-icons raoufIcon">
              <i className="fab fa-instagram"></i>
            </a>
          ))}
      </div>
    </p>
  );
}
