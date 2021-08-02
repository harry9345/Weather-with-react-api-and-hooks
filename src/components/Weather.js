import React from "react";
import classes from "../ui/App.module.css";

export default function Weather(props) {
  let data;

  if (props.busyState.isBusy && !props.errorState.error) {
    data = <p style={{ textAlign: "center" }}> loading ... </p>;
  } else if (props.errorState.error) {
    data = <p style={{ textAlign: "center" }}> Somthings went wrong </p>;
  } else if (props.weatherState.name !== "") {
    data = (
      <div>
        <div className={classes.location}>
          <div className={classes.city}>{props.weatherState.name}</div>
          <div className={classes.city}>{props.weatherState.sysCountry}</div>
          <div className={classes.date}> today</div>
        </div>
        <div className={classes.current}>
          <div className={classes.temp}>
            {props.weatherState.temp} <span>c</span>
          </div>
          <div className={classes.weather}>{props.weatherState.weather}</div>
          <div className={classes.hiLow}>
            {props.weatherState.minTemp} / {props.weatherState.maxTemp}
          </div>
        </div>
      </div>
    );
  }

  return <div>{data}</div>;
}
