import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DateComponent from "./components/Date_and_time/Date";
import TimeComponent from "./components/Date_and_time/Time";
import PlaceComponent from "./components/Place/Place";
import Final from "./components/Final/Final";
import { SelectionProvider } from './SelectionContext';

function App() {
  return (
    <SelectionProvider>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/date" element={<DateComponent />} />
      <Route path="/time" element={<TimeComponent/>} />
      <Route path="/food" element={<PlaceComponent/>} />
      <Route path="/final" element={<Final />} />
    </Routes>
    </SelectionProvider>
   
  );
}

export default App;