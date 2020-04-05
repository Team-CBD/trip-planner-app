import React from "react";

function Contact() {
  return (
    <div className="container z-depth-1 white radius-1">

      <h1 className="ptitle">Contact Me</h1>
      <div className="row">
        <div className="center col s12 m12">
          <h4>email:<a href="mailto:twopheat@gmail.com?Subject=Portfolio Contact for Brad J" alt="" target="_top"> twopheat@gmail.com</a><br /><br />
        phone:<a href="tel:951-255-2533"> 951-255-2533</a></h4>
        </div>
        <div className="row">
          <social className="col s12 m12 center" id="map">
            <img className="social-icons text-center" target="_blank" alt="" rel="noopener noreferrer" href="https://github.com/twopheat/" src="assets/images/GitHub-Mark-64px.png" width="64" height="64" ></img>

            <img className="social-icons text-center" target="_blank" alt="" rel="noopener noreferrer" href="https://www.linkedin.com/in/precogit/" src="assets/images/linkedinlogo.png" width="64" height="64"></img>

            <img className="social-icons text-center" caption="RESUME" alt="" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1tM2gArCqJwi4Bgz1r7Zv7RR7vbGMIEYr/view?usp=sharing" src="assets/images/googledrive_logo.png" width="64" height="64"></img>
            <p>RESUME</p>
          </social>
        </div>
        
        <iframe title="map1" className="col s12 m12 center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56098.73888552415!2d-117.4761380389308!3d33.95694370446146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb1c9bda1d65f%3A0x9c267b86d0e7b6cd!2sCentral%20Ave%2C%20California!5e0!3m2!1sen!2sus!4v1576989044896!5m2!1sen!2sus" width="400" height="300" frameBorder="0"></iframe>
      </div>

    </div>
  );
}

export default Contact;