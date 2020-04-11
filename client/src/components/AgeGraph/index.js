import React, {useState, useEffect} from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import API from "../../utils/API"; 
import { responsiveFontSizes } from '@material-ui/core';

const data = [
  {ageRange: 1,  cases: 32},
  {ageRange: 2,  cases: 98},
  {ageRange: 3,  cases: 144},
  {ageRange: 4,  cases: 212},
  {ageRange: 5,  cases: 300}
];

function AgeGraph () {
    const [ageArray, setAgeArray]= useState(); 
    
    useEffect(()=>{
        createAgeArray(); 
        console.log(ageArray); 
    }, []); 

    const createAgeArray = ()=>{
        API.getPeople()
            .then(response=>{
                console.log(response.data)
                const sickArray= response.data.filter(person => person.sick);
                const newAgeArray = sickArray.map(person => person.age);
                console.log(newAgeArray);  
                setAgeArray(newAgeArray);
                console.log(ageArray);  
            }); 
    }; 

    return (
      <div>
        <h1>Victory Tutorial</h1>
        <VictoryChart
        theme={VictoryTheme.material}
         domainPadding={20}
        >
           <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={["0-20", "21-40", "41-60", "61-80", "81+"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
        />
          <VictoryBar
            data={data}
            // data accessor for x values
            x="ageRange"
            // data accessor for y values
            y="cases"
        />
        </VictoryChart>
        
      </div>
    );
}

export default AgeGraph; 