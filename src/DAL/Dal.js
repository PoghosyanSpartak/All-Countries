import { ALL_COUNTRY,INP_TEXT,ERR_MESSAGE } from "../redux/reduc";
import axios from "axios";
import { store } from "../redux/store";


 const instans = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

export const fetchCountries = {
    all(dispatch){
        return instans.get("/all")
        .then(res => dispatch({type : ALL_COUNTRY, payload:res.data}))
        .catch((err) => console.log(err))
    },
    region(dispatch,region){
        return instans.get(`/region/${region}`)
        .then(res => dispatch({type : ALL_COUNTRY, payload:res.data}))
    },
    country(dispatch,inptext){
        return instans.get(`/name/${inptext}`)
        .then(res => dispatch({type : ALL_COUNTRY, payload:res.data}))
    }
}

export default fetchCountries;