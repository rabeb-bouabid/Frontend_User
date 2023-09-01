import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white big-padding pb-0">
        <div className="container-xl ">
          <div className="row">
            <div className="col-md-4">
             
              <img
                  className="max-220 py-3"
                  src="assets/images/logo.jpg"
                  alt
                  style={{marginTop:"-21px",marginLeft: "-72px"}}
                />
                  <div className="row">
                    <div className="col-2 text-center text-primary">
                      <i className="bi fs-1  bi-geo-alt" style={{marginLeft: "-150px"}}/>
                    </div>
                    <div className="col-10"> 
                      <h4 className="text-light fw-bolder fs-3" style={{marginLeft: "-92px",marginTop:"11px"}}>
                      Yasser arafet,Sousse, Sahloul
                      </h4>
            
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2 text-center text-primary">
                      <i className="bi fs-1 bi-telephone" style={{marginLeft: "-150px"}}/>
                    </div>
                    <div className="col-10"> 
                      <h8 className="text-light fw-bolder fs-3" style={{marginLeft: "-92px",marginTop:"11px"}}>
                      (+216) 58855597
                      </h8>
            
                    </div>
                  </div>
              </div>
         
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 pt-5">
                  
                  <ul className="row" style={{marginTop:"-22px",
    marginRight: "-31px"}}>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder" href="/">
                        {" "}
                       
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder" href="/">
                        {" "}
                        Home
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder" href="/services">
                        {" "}
                       
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder" href="/contact">
                        {" "}
                        Contact Us
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder" href>
                        {" "}
                        
                      </a>
                    </li>
                   
                   
                    
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder" href="/prestataires">
                        {" "}
                      prestataires 
                      </a>
                    </li>
                    <li className="float-start col-md-6 p-2">
                      <a className="text-white fw-bolder" href="/services" style={{marginLeft:"220px"}}>
                        {" "}
                      Services 
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6  pt-5">
                  <ul className="text-white pt-1 float-end">
                    <li className="float-start fs-6 p-3 py-2">
                      <i className="bi bi-facebook" />
                    </li>
                    <li className="float-start fs-6 p-3 py-2">
                      <i className="bi bi-twitter" />
                    </li>
                    <li className="float-start fs-6 p-3 py-2">
                      <i className="bi bi-instagram" />
                    </li>
                    <li className="float-start fs-6 p-3 py-2">
                      <i className="bi bi-linkedin" />
                    </li>
                  </ul>
                  <div className="input-group mb-3" style={{marginTop:"40px"}}>
                    <input
                      type="text" 
                      className="form-control mb-0"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text bg-primary"
                        id="basic-addon2"
                      >
                        <i className="bi text-white bi-send" />
                      </span>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy">
        <div className="container">
          <a href="https://www.smarteyeapps.com/">
            2023 © All Rights Reserved | Designed and Developed by
            Smarteyeapps.com
          </a>
          <span>
            <a href>
              <i className="fab fa-github" />
            </a>
            <a href>
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="https://in.pinterest.com/prabnr/pins/">
              <i className="fab fa-pinterest-p" />
            </a>
            <a href="https://twitter.com/prabinraja89">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.facebook.com/freewebtemplatesbysmarteye">
              <i className="fab fa-facebook-f" />
            </a>
          </span>
        </div>
      </div>
      <a
        href="#"
        class="back-to-top"
        style={{
          display: "inline",
          content: "\u2191",
          display: "inline-block",
          marginRight: "5px",
          fontWeight: "900",
        }}
      >
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  );
};

export default Footer;
