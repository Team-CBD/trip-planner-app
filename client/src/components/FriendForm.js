import React, { useState } from "react";
import API from '../utils/api';
//import { Link } from 'react-router-dom';


function FriendForm(props) {

  const [formObject, setFormObject] = useState({})
  
  

  function handleFormSubmit(event) {
    // event.preventDefault();
    console.log(formObject);
    if (formObject.fullName && formObject.relation && formObject.phone) {

      
      API.addFriend({
        fullName: formObject.fullName,
        relation: formObject.relation,
        phone: formObject.phone
      })
      .then(res => props.loadFriend())
      .catch(err => console.log(err));
    }
  };

    function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };
 
  return(
    <div className = "container">
      <div className = "friendForm">
        <h4 className="text-dark pt-3">Add</h4>
        <form name="form1" onSubmit={handleFormSubmit}>
          <input className="neuflip border m-2 p-2" 
            type="text" id="fullName" placeholder="Full Name"
            name="fullName"
            onChange={handleInputChange}
            />
            <br/>
            <input type="text"
            className="neuflip border m-2 p-2"
            placeholder="Relation / Role"
            name="relation"
            onChange={handleInputChange} /><br/>
            <input type="tel"
            className="neuflip border m-2 p-2"
            placeholder="Phone"
            name="phone"
           
            required
            onChange={handleInputChange} /><br/>
            
            <button id="submit" className="btn btn-primary neu">Save</button>
            
        </form>
      </div>

      
    </div>
  )


}



export default FriendForm;
