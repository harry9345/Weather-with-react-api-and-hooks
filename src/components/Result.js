import axios from "axios";
import React, { useState } from "react";
import classes from "../ui/App.module.css";
import Header from "./Header";
import Weather from "./Weather";

const Result = () => {
  const [weatherState, setWeatherState] = useState({
    name: "",
    temp: "",
    sysCountry: "",
    weather: "",
    minTemp: "",
    maxTemp: "",
  });
  const [BusyState, setBusyState] = useState({
    isBusy: false,
  });
  const [errorState, setErrorState] = useState({
    error: null,
  });

  const getDataFromApi = async (city) => {
    let myApiKey = "2984cdd69bde16d2c7d12fa7f88ea814";
    setBusyState({ isBusy: true });
    setErrorState({ error: null });
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myApiKey}`
      );
      let res = response.data;
      setWeatherState({
        name: res.name,
        temp: res.main.temp,
        sysCountry: res.sys.country,
        weather: res.weather[0].main,
        minTemp: res.main.temp_max,
        maxTemp: res.main.temp_min,
      });
      setBusyState({ isBusy: false });
    } catch (error) {
      setBusyState({ isBusy: false });
      setErrorState({ error: JSON.stringify(error) });
    }
  };

  return (
    <section className={classes.mainDiv}>
      <Header getDataFromApi={getDataFromApi} />
      <Weather
        weatherState={weatherState}
        busyState={BusyState}
        errorState={errorState}
      />
    </section>
  );
};

export default Result;
