import React, { useState, Fragment, useEffect } from "react";
import Map from "../components/Map"
import API from "../utils/API";
export default function App() {
    useEffect(()=>{
        console.log("Check check"); 
        API.checkAuthentication()
            .then(response=>{
                console.log(response); 
            })
            .catch(err=>console.log(err)); 
    }, [])

    return(
        <Map />
    )
};