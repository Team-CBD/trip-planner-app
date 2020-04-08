import React from "react";
import Convertor from "../components/Convertor";


function ConvertBuild() {
  return (
    <div className="container">
      <h2 className="ptitle text-dark">Currency Converter</h2>

      <div className="row">
        <div className="col-sm">
          <Convertor />
        </div>
      </div>
    </div>
  );
}

export default ConvertBuild;


