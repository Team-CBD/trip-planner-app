import React from "react";

function Portfolio() {
    return (
<div className="container z-depth-1 white radius-1">
<h1 className="pb">Portfolio</h1>

<carousel className="carousel carousel-size">
  <div className="row">

    <div className="col s12 m12 carousel-item container">
      <div className="picbox round-2 center">
          <img1 target="_blank" href="https://team-cbd.github.io/AGT/" className="pic" src="assets/images/agt.JPG" alt="Mountains" style={{ 'width':'80%' }}></img1>

        <div className="col s10 m12 offset-s1 description">
          <b>Any Given T</b>
          <p>This is my first group Project in Boot Camp.</p>
        </div>
      </div>
    </div>

    <div className="col s12 m12 carousel-item container">
      <div className="picbox round-2 center">
          <img className="pic" target="_blank" href="https://dashboard.heroku.com/apps/mvc-burger-pos" src="assets/images/mvcpos.JPG" alt="Mountains" style={{ 'width':'80%' }}></img>

        <div className="col s10 m12 offset-s1 description">
          <b>Simple Burger POS</b>
          <p>This is a Node, Express, MySQL CRUD.</p>
        </div>
      </div>
    </div>

    <div className="col s12 m12 carousel-item container">
      <div className="picbox round-2 center">
        <img  className="myImg" src="assets/images/omstc.JPG" alt="OMSTC" style={{ 'width':'80%' }}></img>

        <div className="col s10 m12 offset-s1 description">
          <b>OneManandaSolution</b>
          <p className="flow-text">This was my first shot at a website for profit. The year was 2005. I had just opened my tech consulting
            business in Atlanta, and I could not afford a website back then. I ran the business in Atlanta for 7
            years, gained 540+ happy customers, and cut my teeth on web development and design back in the early
            2000's.</p>
        </div>
      </div>
    </div>

    <div className="col s12 m12 carousel-item container">
      <div className="picbox round-2 center">
        <img  className="myImg" src="assets/images/dashboard.JPG" alt="WeatherDashboard" style={{ 'width':'80%' }}></img>
        <div className="col s10 m12 offset-s1 description">
          <b><a className="black-text" target="_blank" href="dashboard.html">Weather Dashboard</a></b>
          <p>This is my first API call homework assignment.</p>
        </div>
      </div>
    </div>


    <div className="col s12 m12 carousel-item container">
      <div className="picbox round-2 center">
        <img  className="myImg" src="assets/images/icarenote.png" alt="TheBandGuard" style={{ 'width':'80%' }}></img>
        <div className="col s10 m12 offset-s1 description">
          <b>iCareNote</b>
          <p>iCarenote was my first Start-Up experience. Like most Start-Ups, it went belly up around a year or so
            in. Good experience, good lessons, good times.</p>
        </div>
      </div>
    </div>

    <div className="col s12 m12 carousel-item container">
      <div className="picbox round-2 center">
          <img  className="pic" target="_blank" href="https://orionservers.net" src="assets/images/ogs.JPG" alt="OrionServers" style={{ 'width':'80%' }}></img>
        <div className="col s10 m12 offset-s1 description">
          <b>OrionServers</b>
          <p>This company offers game servers, game slots, and vps for business at some of the lowest prices around. Our hosts are DDOS and power reduntant 24/7.</p>
        </div>
      </div>
    </div>

    <div className="col s12 m12 carousel-item container">
      <div className="picbox round-2 center">
          <img className="pic" target="_blank" href="https://reel-big.herokuapp.com/" src="assets/images/rba.png" alt="PreWork" style={{ 'width':'80%' }}></img>
        <div className="col s10 m12 offset-s1 description">
          <b>Project #2</b>
          <p>This is my original idea for a mobile app, at least a small slice of it.</p>
        </div>
      </div>
    </div>

    <div className="col s12 m12 carousel-item container">
      <div className="picbox round-2 center">
          <img className="pic" target="_blank" href="https://twopheat.github.io/prework-about-me/" src="assets/images/prework.JPG" alt="PreWork" style={{ 'width':'80%' }}></img>
        <div className="col s10 m12 offset-s1 description">
          <b>Bootcamp Prework</b>
          <p>This is my PreWork assignment leading up to Coding Bootcamp!</p>
        </div>
      </div>
    </div>

    <div id="myModal" className="modal">
      <span className="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>

      <img alt="" className="modal-content" id="img01"></img>
    </div>
  </div>
</carousel>
</div>
      
      
    );
  }

  export default Portfolio;