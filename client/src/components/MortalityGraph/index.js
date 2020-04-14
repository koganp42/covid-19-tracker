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

return (
    <div>
        <h2>Cases by Outcome</h2>

<VictoryPie
colorScale = {['#fe425c','#7890fd','#91e3f8',]}
  data={[
    { x: "Died", y: 35 },
    { x: "Recovered", y: 40 },
    { x: "Birds", y: 55 }
  ]}
/>

    </div>
)
}
