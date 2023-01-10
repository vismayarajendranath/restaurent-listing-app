import axios from "axios";
import { R_SUCCESS,R_FAIL } from "../constants/restaurentConstants";
export const RestaurentListActions = ()=>async (dispatch)=>{
    try{
    const result = await axios.get('/restaurents.json')
    console.log(result.data.restaurants);
    dispatch({
        type:R_SUCCESS,
        payload:result.data.restaurants
    })
    }
    catch(error){
            dispatch({
                type:R_FAIL,
                error:error
            })

    }
}