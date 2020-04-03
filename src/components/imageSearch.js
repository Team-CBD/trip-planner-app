import React, { useState } from 'react';


import './image.css';
import axios from "axios";
function imageSearch() {

const [photo, setPhoto] =useState("");
const [clientId, setClientId] = useState("LIUod54u1aBakvpL9JKb2GUq5t-pI0snN2wujAQqDKM");

const [result, setResult] = useState([]);

 function handleChange(event){
      setPhoto(event.target.value);
  
 }

 function handleSubmit(event) {
       console.log(photo);

      const url = "https://api.unsplash.com/search/photos?page=1&query=" + photo + "&client_id=" + clientId;
     
       axios.get(url)
       .then(response =>{
         console.log(response);
         setResult(response.data.results);
       });
 }



  return (
    <div className="App">
      
      <h1>City</h1>
      <div>
      <input className="input-box" onChange={handleChange} type="text" name="photo" placeholder="Search for your city"/>
      {/* <button className="button" onClick={handleSubmit} type="submit">Search</button> */}
      <button type="button" class="btn btn-info btn-lrg" onClick={handleSubmit}>Search</button>
      </div>


      {result.map((photo) => (
        <img className="image" alt="" src={photo.urls.small} />
      ))}


      

    </div>
  );
}

export default imageSearch;
