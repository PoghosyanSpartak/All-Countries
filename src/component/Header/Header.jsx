import React from "react";
import s from "./Header.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Ef, INP_TEXT } from "../../redux/reduc";
import fetchCountries from "../../DAL/Dal";

const Header = () => {
  const region = ["Europe", "Asia", "Oceania", "Americas", "Africa"];


  const inptext = useSelector((state) => state.r.text);
  const dispatch = useDispatch();

  const regRegion = (region) =>{
        fetchCountries.region(dispatch,region)
  }
  function Ef(){
    fetchCountries.country(dispatch,inptext)
}

  return (
    <div className={s.parent}>
      <div>
        <button onClick={() =>  fetchCountries.all(dispatch)}>ALL</button>
        {region.map((region) => {
          return <button className={s.btn_reg} onClick={() => regRegion(region)} >{region}</button>;
        })}
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={inptext}
          onChange={(e) =>
            dispatch({ type: INP_TEXT, payload: e.target.value })
          }
        />
        <button onClick={() => Ef()}>Search</button>
      </div>
    </div>
  );
};

export default Header;
