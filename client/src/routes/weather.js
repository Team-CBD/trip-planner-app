import React from 'react';
import '../styles/style.css';
import Weather from '../components/Weather';

class weatherSearch extends React.Component {
  render() { 
    return (
        <div className="container mt-5">

        <h2 className="ptitle text-dark">Weather</h2>
  
        <div className="row">
        <div className="col-sm-12">
            <Weather />
          </div>
          
        </div>
      </div>


    );
}
}
export default weatherSearch;