import React from "react";
import logo from "../assets/JASH.png"

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
              
              <h3>Our Team</h3><br/>
              <div className = "d-space-around ">
                <p className = "font-size">Hiba Abdel Karim</p>
                <p className = "font-size">AbdelRaouf Dannaoui</p>
                <p className = "font-size">Samira Samargi</p>
                <p className = "font-size">Joseph Tarrazi</p>
              </div>
              
            </div>

            <div className="col-md-4 col-lg-3 footer-social wow fadeInUp animated">
              <h3>Follow us</h3><br/>
              <Icons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icons({ account }) {
  return (
    <p className="social-media-p">   

      
        <div className="d-space-around">
          <a href="#" className="social-media-icons raoufIcon">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="social-media-icons raoufIcon">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="social-media-icons raoufIcon">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="social-media-icons raoufIcon">
            <i className="fab fa-github"></i>
          </a>
        </div>
      

      
        {/* raouf linkedin style  */}
        <div className="d-space-around">
          <a href="https://www.linkedin.com/in/hiba-abdel-karim-8524361bb/" target="_blank" className="social-media-icons raoufIcon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.linkedin.com/in/abdel-raouf-dannaoui-7907a91b8/" target="_blank" className="social-media-icons raoufIcon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.linkedin.com/in/samira-el-samargi-7b97451b0/" target="_blank" className="social-media-icons raoufIcon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.linkedin.com/in/joseph-tarrazi-2a7067137/" target="_blank" className="social-media-icons raoufIcon">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      

      
        <div className="d-space-around">
          <a href="#" className="social-media-icons raoufIcon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-media-icons raoufIcon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-media-icons raoufIcon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-media-icons raoufIcon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      
    </p>
  );
}
