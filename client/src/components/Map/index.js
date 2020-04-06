import React, { useState, Fragment, useEffect } from "react";
import { GoogleMap, withScriptjs, withGoogleMap , Marker, InfoWindow} from 'react-google-maps';
import patientData from "../../utils/patientData";
import mapStyles from "../../styleStuff/mapStyles"
import API from "../../utils/API"
import "./style.css"




function Map(props) {

    const [selectedPin, updateSelectedPin] = useState(null);
    const [people, setPeople] = useState([]);


      // Load all books and store them with setBooks
  useEffect(() => {
    loadPeople()
  }, [])

  // Loads all People and sets them to People
  function loadPeople() {
    API.getPeople()
      .then(res => {
          console.log(res.data);
          setPeople(res.data);
      }
      )
      .catch(err => console.log(err));
  };



    return (
        <Fragment>
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat:36.166340, lng:-86.779068}}
            defaultOptions={{styles:mapStyles}}
        >
             
            {people.map(patient => (
                <Marker 
                key={patient.id} 
                position={{lat:patient.lat, lng:patient.lon}} 
                onClick={() => {
                    updateSelectedPin(patient)
                }}
                icon={{
                    url: "/coronavirus.png",
                    scaledSize: new window.google.maps.Size(25, 25)
                }}
                /> 
                ))}

            {selectedPin && (
                <InfoWindow 
                position={{
                    lat:selectedPin.lat, lng:selectedPin.lon
                }} 
                onCloseClick={() => {
                    updateSelectedPin(null)
                }}
                >
                    <div>
                        <h5>ID: {selectedPin.id}</h5>
                        <p>Name: {`${selectedPin.firstName} ${selectedPin.lastName}`}</p>
                        <p>Age: {selectedPin.age}</p>
                        <p>Sex: {selectedPin.sex}</p>
                        <p>Smoker: {selectedPin.smoker===true ? "Yes" : "No"}</p>
                    </div>
                </InfoWindow>
            )}

        </GoogleMap>
        </Fragment>

      
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function App() {
    return(
   
        <div style={{width:"100vh", height:"80vh"}} className={"mainDiv"}>

            <WrappedMap 
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyACzcnTqh0EIE1HAJ1E605RBcwlWHAQ0Mw"}
                loadingElement={<div style={{height:'100%'}} className={"mapContainer"}/>}
                containerElement={<div style={{height:'100%'}} className={"mapContainer"} />}
                mapElement={<div style={{height:'100%'}} className={"mapContainer"}/>}
            >
               {console.log(patientData)}
            </WrappedMap>
            
        </div>

   

   
    )
};