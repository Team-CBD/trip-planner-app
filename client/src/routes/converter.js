import React from "react";
import Convertor from "../components/Convertor";
// eslint-disable-next-line
import ImageSearch from "../components/imageSearch";


function ConvertBuild() {
  return (
    <div className="container mt-5">
      <div className="ptitle text-dark justify-content-center">
      <h2>Tools</h2>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <Convertor />
        </div>
        <div className="col-sm-8">
          <ImageSearch />
          </div>
      </div>
    </div>
  );
}

export default ConvertBuild;


