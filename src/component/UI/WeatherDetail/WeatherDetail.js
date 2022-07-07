import { React, useContext, useEffect, useState } from "react";

import { ReferenceDataContext } from "../../Context/ReferenceDataContext";

import { ReactComponent as Add } from "../../../static/media/add.80ec9be2.svg";

function WeatherDetail() {
  const { weather, setWeather } = useContext(ReferenceDataContext);

  return (
    <>
      {typeof weather.main != "undefined" ? (
        <div className="weather-detail">
          <div className="col-detail">
            <div className="col-detail__title-detail"> PSI</div>
            <div className="col-detail__psi">
              {Math.round(weather?.main?.temp)}
            </div>
            <div className="col-detail__status">Good</div>
          </div>

          <div className="col-detail">
            <div className="title-detail">Rain</div>
            <div className="col-detail__deg">10</div>
            <div className="col-detail__status">mm</div>
          </div>
          <div className="col-detail">
            <div className="title-detail"> DEG </div>
            <div className="col-detail__circle-icon"></div>
            <div className="circle-review"></div>
          </div>
          <div className="col-detail">
            <div className="weather-info__add-btn"></div>
            <div className="col-detail__add-text">Add</div>
          </div>
        </div>
      ) : (
        <div className="weather-detail">
          <div className="col-detail">
            <div className="col-detail__title-detail"> PSI</div>
            <div className="col-detail__psi"></div>
            <div className="col-detail__status">Good</div>
          </div>

          <div className="col-detail">
            <div className="title-detail">Rain</div>
            <div className="col-detail__deg">10</div>
            <div className="col-detail__status">mm</div>
          </div>
          <div className="col-detail">
            <div className="title-detail"> DEG </div>
            <div className="col-detail__circle-icon"></div>
            <div className="circle-review"></div>
          </div>
          <div className="col-detail">
            <div className="weather-info__add-btn"></div>
            <div className="col-detail__add-text">Add</div>
          </div>
        </div>
      )}
    </>
  );
}

export default WeatherDetail;
