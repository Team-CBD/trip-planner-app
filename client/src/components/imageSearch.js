import React, { useState } from 'react';
import '../styles/image.css';
import axios from "axios";

function ImageSearch(props) {

const [photo, setPhoto] =useState();
// eslint-disable-next-line
const [clientId, setClientId] = useState("LIUod54u1aBakvpL9JKb2GUq5t-pI0snN2wujAQqDKM");

const [result, setResult] = useState([]);

 function handleChange(props){
      setPhoto(props.target.value);
  
 }

 function handleSubmit(props) {
       console.log(photo);
       props.preventDefault();
      const url = "https://api.unsplash.com/search/photos?page=1&query=" + photo + "&client_id=" + clientId;
     
       axios.get(url)
       .then(response =>{
         console.log(response);
         setResult(response.data.results.slice(0,response.data.results.length-1));
       });
 }

  return (
    <div>
      <div className="row">
      <div className="col-sm-8 order-first justify-content-center">
        
      {result.map((photo) => (
        <img className="col-4 image rounded" alt="" src={photo.urls.small} />
      ))}
      </div>
      <div className="col-sm-4 order-last">
      <div className="card neu bg-light p-4">
      <div className="card-title">City Images</div>
      <div>
      <input className="input-box numberInput neuflip m-2 p-2" onChange={handleChange} type="text" name="photo" placeholder="Search"/>
      {/* <button className="button" onClick={handleSubmit} type="submit">Search</button> */}
      <button type="button" id="submit" className="btn neu btn-primary" onClick={handleSubmit}>Search</button>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default ImageSearch;
