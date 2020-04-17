import React from "react";
import Convertor from "../components/Convertor";
// eslint-disable-next-line
import ImageSearch from "../components/imageSearch";


function ConvertBuild() {
  return (
    <div className="container mt-5">
      
      <div className="row">
        <div className="col-sm-6">
        
          <Convertor />
        </div>
        <div className="col-sm-6">
          <ImageSearch />
          </div>
      </div>
    </div>
  );
}

export default ConvertBuild;


