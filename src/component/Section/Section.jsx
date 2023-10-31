import React, { useEffect } from "react";
import s from "./Section.module.css"
import { useSelector,useDispatch } from "react-redux";
import Card from "./Card";
import {fetchCountries} from "../../DAL/Dal";


const Section = () => {
    const dispatch = useDispatch()
    const country = useSelector((c) => c.r.count)
    useEffect(() =>{
        fetchCountries.all(dispatch)
    },[])

    return(
        <div>{
            country.map((elm) => {
                return <Card key={elm} country={elm} />
            })
            }</div>
    )
}

export default Section;