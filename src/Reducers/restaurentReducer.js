import { R_SUCCESS, R_FAIL } from "../constants/restaurentConstants";

export const restaurentListReducer = (state = { restaurentList: [] }, action) => {
    console.log(action);
    switch (action.type) {
        case R_SUCCESS:
            return { restaurentList: action.payload }
        case R_FAIL:
            return { restaurentList: action.error }
        default:
            return state


    }

}