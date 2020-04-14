import React, {useState, useEffect} from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import API from "../../utils/API"; 
import { responsiveFontSizes } from '@material-ui/core';

export default function  AgeGraph () {
  const [ageData, setAgeData] = useState([]); 
  const [ageObject, setAgeObject] = useState(); 
  const [data, setData]= useState([
    {ageRange: 1,  cases: 0},
    {ageRange: 2,  cases: 0},
    {ageRange: 3,  cases: 0},
    {ageRange: 4,  cases: 0},
    {ageRange: 5,  cases: 0}
  ]); 
  const [isLoading, setIsLoading]= useState(true); 

    useEffect(()=>{
        setAgeData(createAgeArray()); 
        console.log(ageData); 
        createAgeObject(ageData); 
    }, [isLoading]); 

    const createAgeArray = ()=>{
      console.log(ageData); 
        API.getPeople()
            .then(response=>{
                const sickArray= response.data.filter(person => person.sick==="true" || person.sick==="false");
                const newData = sickArray.map(person => person.age);
                setAgeData(newData); 
                createAgeObject(newData); 
                // console.log(ageObject); 
                // setData([
                //   {ageRange: 1,  cases: ageObject["0-20"]},
                //   {ageRange: 2,  cases: ageObject["21-40"]},
                //   {ageRange: 3,  cases: ageObject["41-60"]},
                //   {ageRange: 4,  cases: ageObject["61-80"]},
                //   {ageRange: 5,  cases: ageObject["81+"]}
                // ]);  
                
            })
            .catch(err=>console.log(err)); 
    }; 

    const createAgeObject = (newData)=>{
      const newObject= {"0-20": 0, "21-40": 0, "41-60": 0, "61-80": 0, "81+":0}; 
      console.log(newObject["21-40"]); 
      for (let i=0; i<newData.length; i++){
       if(newData[i] <21){
        newObject["0-20"]= newObject["0-20"]+1; 
       } else if (newData[i]<41){
         console.log(newObject["21-40"]); 
        newObject["21-40"]= newObject["21-40"]+1; 
       } else if (newData[i] <61){ 
       newObject["41-60"]= newObject["41-60"]+1; 
       } else if (newData[i] <81){
       newObject["61-80"]= newObject["61-80"]+1; 
       } else {
        newObject["81+"]= newObject["81+"]+1; 
       }
      setAgeObject(newObject); 
      setData([
                  {ageRange: 1,  cases: newObject["0-20"]},
                  {ageRange: 2,  cases: newObject["21-40"]},
                  {ageRange: 3,  cases: newObject["41-60"]},
                  {ageRange: 4,  cases: newObject["61-80"]},
                  {ageRange: 5,  cases: newObject["81+"]}
                ]);  
      setIsLoading(false); 
      console.log(ageObject); 
      console.log(data); 
      }

    }; 

    return (
      <div>
        <h1>Cases by Age</h1>
        <VictoryChart
        theme={VictoryTheme.material}
        //  domainPadding={20}
        >
           <VictoryAxis
           independentAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          label="Age Ranges (years)"
          tickValues={[1, 2, 3, 4, 5]}
          style={{
            axis: {stroke: "#756f6a"},
            axisLabel: {fontSize: 15, padding: 35},
            ticks: {stroke: "grey", size: 5},
            tickLabels: {fontSize: 10, padding: 5}
          }}
          tickFormat={["0-20", "21-40", "41-60", "61-80", "81+"]}
        />
        <VictoryAxis
          dependentAxis
          label="Number of cases"
          style={{
            axis: {stroke: "#756f6a"},
            axisLabel: {fontSize: 15, padding: 35},
            ticks: {stroke: "grey", size: 5},
            tickLabels: {fontSize: 10, padding: 5}
          }}
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
