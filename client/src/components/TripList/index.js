import React from "react";
import '../../styles/style.css';

export function TripList({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="btn list-group">{ children }</ul>
    </div>
  );
}

export function TripListSingle({ children }) {
  return <li className="neu m-2 shadow list-group-item">{children}</li>;
}
