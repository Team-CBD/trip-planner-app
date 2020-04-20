// import React, { createContext, useState } from 'react';

// export const TripContext = createContext();

// const TripContextProvider = (props) => {
//   const [trips, setTrip] = useState([]);
//   const addTrip = (destination, startDate, endDate) => {
//     setTrip([...trips, {destination, startDate, endDate, id}]);
//   };
//   const removeTrip = (id) => {
//     setTrip(Trip.filter(trip => trip.id !== id));
//   }

//   return (
//     <TripContext.Provider value={{ trips, addTrip, removeTrip }}>
//       {props.children}
//     </TripContext.Provider>
//   );
// }
 
// export default TripContextProvider;