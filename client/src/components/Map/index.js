import React, { useState, Fragment, useEffect } from "react";
import { GoogleMap, withScriptjs, withGoogleMap , Marker, InfoWindow} from 'react-google-maps';
import patientData from "../../utils/patientData";
import mapStyles from "../../styleStuff/mapStyles"
import API from "../../utils/API"
import "./style.css"


function Map(props) {

    const [selectedPin, updateSelectedPin] = useState(null);
    const [people, setPeople] = useState([]);
    const [admin, setAdmin]= useState(false); 

  useEffect(() => {
    loadPeople()
    API.checkAuthentication()
        .then(user=>{
            console.log("running authentication"); 
            console.log(user.data.admin); 
            if (user.data.admin === "true"){
                console.log("setting admin"); 
                setAdmin(true); 
            }
        })
        .catch(err=>console.log(err)); 
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
            // width={'50%'}
            defaultZoom={9} 
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
                 (admin ? (
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
                 ) : (
                <div></div>
                 )
                )
            )}

        </GoogleMap>
        </Fragment>

      
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function App(props) {
    // let API_KEY = {AIzaSyACzcnTqh0EIE1HAJ1E605RBcwlWHAQ0Mw}
    
    
    return(
        
       <Fragment >
        <div  className={"mainDiv"}>

            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyACzcnTqh0EIE1HAJ1E605RBcwlWHAQ0Mw`}
                loadingElement={<div style={{height:'100%'}} className={"mapContainer"}/>}
                containerElement={<div style={{height:'100%', width: props.graphSelect.mapWidth}} className={"mapContainer"} />}
                mapElement={<div style={{height:'100%'}} className={"mapContainer"}/>}
            >
               {console.log(patientData)}
            </WrappedMap>

            </div>


        </Fragment>

   

   
    )
};