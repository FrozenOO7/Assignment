import { combineReducers } from "redux";
import { getUser } from '../reducer/user';

export default combineReducers({
    users: getUser
});