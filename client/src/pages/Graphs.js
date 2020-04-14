import React, {useState, useEffect} from 'react';
import API from "../utils/API"; 
import AgeGraph from '../components/AgeGraph';

export default function Graphs() {
  return (
    <div>
      <AgeGraph/>
    </div>
    
  );
}
