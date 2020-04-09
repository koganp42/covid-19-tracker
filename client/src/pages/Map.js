import React, { useState, Fragment, useEffect } from "react";
import Map from "../components/Map"
import API from "../utils/API";
import {Redirect} from "react-router-dom"; 
// import {useLoggedInContext} from "../utils/GlobalState"; 

export default function App() {
    const [redirect, setRedirect] = useState( null); 
    // const [state, dispatch] = useLoggedInContext(); 

    useEffect(()=>{
        console.log("Check check"); 
        API.checkAuthentication()
            .then(response=>{
                console.log(response);
                if (response.data) {
                    console.log("logged in");
                    setRedirect(null);  
                    // dispatch({type: "redirect", url: "none"}); 
                    console.log(redirect);
                } else {
                    console.log("Not logged in!"); 
                    // dispatch({type: "redirect", url: "/login"});
                    setRedirect("/login"); 
                    console.log(redirect); 
                }
            })
            .catch(err=>console.log(err)); 
         
    }, [])

    return(
        <div>
        { redirect !== null ? (<Redirect to= {redirect}/>) : (
            <Map />) }
        </div>
        
    )
};