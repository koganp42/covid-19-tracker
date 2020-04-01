import React, { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap , Marker, InfoWindow} from 'react-google-maps';
import patientData from "../utils/patientData";
import mapStyles from "./mapStyles"
import Container from '@material-ui/core/Container';







function Map(props) {

    const [selectedPin, updateSelectedPin] = useState(null);


    return (
       
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat:36.166340, lng:-86.779068}}
            defaultOptions={{styles:mapStyles}}
        >
            
            {patientData.map(patient => (
                <Marker 
                    key={patient.id} 
                    position={{lat:patient.lat, lng:patient.lng}} 
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
                        lat:selectedPin.lat, lng:selectedPin.lng
                    }} 
                    onCloseClick={() => {
                        updateSelectedPin(null)
                    }}
                >
                    <div>
                        <h5>ID: {selectedPin.id}</h5>
                        <p>Name: {selectedPin.name}</p>
                        <p>Age: {selectedPin.age}</p>
                        <p>Sex: {selectedPin.sex}</p>
                        <p>Smoker: {selectedPin.smoker===true ? "Yes" : "No"}</p>
                    </div>
                </InfoWindow>
            )}

        </GoogleMap>

      
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function App() {
    return(
   
        <div style={{width:"100vh", height:"80vh"}}>

            <WrappedMap 
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyACzcnTqh0EIE1HAJ1E605RBcwlWHAQ0Mw"}
                loadingElement={<div style={{height:'100%'}} />}
                containerElement={<div style={{height:'100%'}} />}
                mapElement={<div style={{height:'100%'}} />}
            >
               {console.log(patientData)}
            </WrappedMap>
            
        </div>

   

   
    )
};