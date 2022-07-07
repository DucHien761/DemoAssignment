import logo from "./logo.svg";
import "./App.css";

import React, { useContext, useState } from "react";
import WeatherStatus from "./component/UI/WeatherStatus/WeatherStatus";
import WeatherDetail from "./component/UI/WeatherDetail/WeatherDetail";
import Navigation from "./component/UI/Header/Header";

import TideSunChart from "./component/UI/Chart/Chart";

import {
  ReferenceDataContext,
  ReferenceDataContextProvider,
} from "./component/Context/ReferenceDataContext";

function App() {
  const { weather } = useContext(ReferenceDataContext);

  return (
    <div className="container">
      
        <div className="Header">
          <Navigation />
        </div>
        <div className="Summary">
          <ReferenceDataContextProvider>
            <WeatherStatus />
            <WeatherDetail />
          </ReferenceDataContextProvider>
        </div>
      

      <div className="chart-layout">
          <TideSunChart />    
      </div>
    </div>
  );
}

export default App;
