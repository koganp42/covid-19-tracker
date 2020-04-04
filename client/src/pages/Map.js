import React, { useState, Fragment, useEffect } from "react";
import { GoogleMap, withScriptjs, withGoogleMap , Marker, InfoWindow} from 'react-google-maps';
import patientData from "../utils/patientData";
import mapStyles from "../styleStuff/mapStyles"
import API from "../utils/API"
import Paper from "../components/Paper"
import Map from "../components/Map"


export default function App() {
    return(

        <Map />

   

   
    )
};