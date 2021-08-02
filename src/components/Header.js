import React, { useState } from "react";
import classes from "../ui/App.module.css";

const Header = (props) => {
  const [cityState, setCityState] = useState({ city: "" });

  const insertCity = (e) => {
    setCityState({ city: e.target.value });
    if (e.keyCode === 13) {
      props.getDataFromApi(cityState.city);
    }
  };

  return (
    <header>
      <label className={classes.lable}>
        Enter your city and press enter:
        <input
          type="text"
          autoComplete="off"
          className={classes.input}
          placeholder="Search for a city or country ... "
          onKeyUp={insertCity}
        />
      </label>
    </header>
  );
};

export default Header;
