import React, { useState, Fragment, useEffect } from "react";
import Map from "../components/Map"
import AgeGraph from '../components/AgeGraph'
import MortalityGraph from '../components/MortalityGraph'
import Footer from '../components/Footer'
import API from "../utils/API";
import {Redirect} from "react-router-dom"; 
import { Grid } from "@material-ui/core"
// import {useLoggedInContext} from "../utils/GlobalState"; 

export default function App() {
    const [redirect, setRedirect] = useState( null); 
    // const [state, dispatch] = useLoggedInContext(); 
    const [graphSelect, setGraphSelect] = useState({
        graph: 'none',
        mapWidth: '100%'
    })

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

    if(graphSelect.graph === 'none') {
        return(
            <div>
            { redirect !== null ? (<Redirect to= {redirect}/>) : (
                <Fragment>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Map graphSelect={graphSelect}/>
                        </Grid>
                    </Grid>
                    <Footer graphSelect={graphSelect} setGraphSelect={setGraphSelect}/>
                </Fragment>
                ) }
            </div> 
        )
    } else if (graphSelect.graph === 'age'){
        return(
            <div>
            { redirect !== null ? (<Redirect to= {redirect}/>) : (
                <Fragment>
                    <Grid container spacing={2}>
                        <Grid item xs={7}>
                            <Map graphSelect={graphSelect} setGraphSelect={setGraphSelect}/>
                        </Grid>
                        <Grid item xs={4}>
                            <AgeGraph />                       
                        </Grid>
                    </Grid>
                    <Footer graphSelect={graphSelect} setGraphSelect={setGraphSelect}/>
                </Fragment>
                ) }
            </div> 
        )
    } else if (graphSelect.graph === 'outcome'){
        return(
            <div>
            { redirect !== null ? (<Redirect to= {redirect}/>) : (
                <Fragment>
                    <Grid container spacing={2}>
                        <Grid item xs={7}>
                            <Map graphSelect={graphSelect} setGraphSelect={setGraphSelect}/>
                        </Grid>
                        <Grid item xs={4}>
                            <MortalityGraph />                      
                        </Grid>
                    </Grid>
                    <Footer graphSelect={graphSelect} setGraphSelect={setGraphSelect}/>
                </Fragment>
                ) }
            </div> 
        )
    }
    
};