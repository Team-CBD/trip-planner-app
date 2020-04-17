// import React, { useState } from 'react';
// import '../styles/image.css';
// import axios from "axios";
// import ImageSearch from './ImageSearch';

// function ImageResults(props) {

// const [photo, setPhoto] =useState();
// // eslint-disable-next-line
// const [clientId, setClientId] = useState("LIUod54u1aBakvpL9JKb2GUq5t-pI0snN2wujAQqDKM");

// const [result, setResult] = useState([]);

//  function handleChange(props){
//       setPhoto(props.target.value);
  
//  }

//  function handleSubmit(props) {
//        console.log(photo);

//       const url = "https://api.unsplash.com/search/photos?page=1&query=" + photo + "&client_id=" + clientId;
     
//        axios.get(url)
//        .then(response =>{
//          console.log(response);
//          setResult(response.data.results.slice(0,response.data.results.length-1));
//        });
//  }



//   return (
//     <div>
      
//       <h3>City Images</h3>
//       <div>
//       <input className="input-box neuflip m-2 p-2" onChange={handleChange} type="text" name="photo" placeholder="Search for your city"/>
//       {/* <button className="button" onClick={handleSubmit} type="submit">Search</button> */}
//       <button type="button" className="btn neu btn-primary btn-lrg" onClick={handleSubmit}>Search</button>
//       </div>


//     </div>
//   );
// }

// export default ImageResults;
