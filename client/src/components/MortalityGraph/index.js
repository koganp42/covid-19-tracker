import React, {useState, useEffect} from 'react';
import { VictoryPie, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import API from "../../utils/API"; 

export default function MortalityGraph() {
    const colors = {
        coral: '#ff7b48',
        purple: '#6c63ff',
        lightBlue: '#91e3f8',
        lightPurple: '#7890fd',
        red: '#fe425c'
      }

    const [illnessData, setIllnessData] = useState([]);
    const [percentages, setPercentages] = useState([]);

    useEffect(() => {
        loadIllnesses()
      }, [])

    function loadIllnesses() {
        API.getIllnesses()
        .then(res => {
            console.log(res.data);
            setIllnessData([1,2,3,4,5,6,7]);
            
            let total = res.data.length;
            let deaths = 0;
            let recoveries = 0;
            let deathPercent = 0;
            let recoveriesPercent = 0;
            
            res.data.forEach(illness => {
                if(illness.death === 'true'){
                    console.log('RIP')
                    deaths++;
                } else {
                    recoveries++
                }
            })
            console.log("deaths: " + deaths);
            console.log('recoveries: ' + recoveries);
            console.log('total: ' + total);
            deathPercent = ((deaths/total)*100);
            recoveriesPercent = ((recoveries/total)*100);
            console.log('deaths Percent: ' + deathPercent);
            console.log('recoveries percent: ' +recoveriesPercent)
            setPercentages([deathPercent,recoveriesPercent])
        })

        .catch(err => console.log(err));
    }

return (
    <div style={{height:'80%', width:'80%'}}>
    <h2>Cases by Outcome</h2>
    <VictoryPie
        colorScale = {['coral','#7890fd','#91e3f8',]}
        data={[
            { x: "Died", y: percentages[0]},
            { x: "Recovered", y: percentages[1]},
        ]}
    />
    </div>
)
}
