import React, {useState, useEffect} from 'react';
import API from "../utils/API"; 
import AgeGraph from '../components/AgeGraph';
// import DataTest from "../components/DataTest"; 


export default function Graphs() {
  return (
    <div>
      <AgeGraph/>
    </div>
    
  );
}
