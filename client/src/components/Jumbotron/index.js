import React from "react"; 
import Map from  "../Map"

function Jumbotron({ children }) {

  const hospitalData =
[
    {
        "name": "Vanderbilt University Hospital",
        "id":1,
        "lat": 36.151490,
        "lng": -86.765010
    },
    {
        "name": "Children's Hospital at Tristar Centennial",
        "id":2,
        "lat": 36.138750,
        "lng": -86.801790
    }
]


  return (
    <div>
    <Map hospitalData={hospitalData} />
    </div>
  );
}

export default Jumbotron;
