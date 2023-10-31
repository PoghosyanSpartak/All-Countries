export const ALL_COUNTRY = "allCount";
export const INP_TEXT = "inpTxt";
export const ERR_MESSAGE = "errMess";

const initstate = {
    count:[],
    text :"",
    errorMes :"",
    isError :false

}

const reducer = (state = initstate , action) => {
    switch (action.type) {
        case ALL_COUNTRY:
            return{
                ...state,
                count: action.payload 
            }
            case INP_TEXT:
                return{
                    ...state,
                    text:action.payload   
                }
                case ERR_MESSAGE:
                return{
                    ...state,
                    errorMes :action.payload,
                    isError :true
            }
            default:
                return state
            }
        }

export default reducer;