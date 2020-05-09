import * as React from "react";
import "./styles.css";
import Gauge from './Gauge'
export default function App() {
  return (
    <div className="App">
      
      <Gauge label="My Gauge" units="cms"/>
    </div>
  );
}
