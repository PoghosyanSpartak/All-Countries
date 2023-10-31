import React from "react";
import s from "./Card.module.css"


const Card = ({country}) =>{
    return(
            <div>
                <img src={country.flags.png} alt="" />
                <div>{country.name.common}</div>
            </div>
    )
}

export default Card;