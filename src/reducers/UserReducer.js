import { useReducer } from "react";
import Actions from "../actions/Actions";

export const initialState = {
  users: [],
  filteredUsers: [],
  loading: false,
  error: null,
};
const {
  DATA_FETCHING,
  DATA_FETCHED,
  DATA_FETCH_ERROR,
  DELETE_USER,
  EDIT_USER,
  SEARCH_USER,
  ADD_USER,
} = Actions.User;
const UserReducer = (state, action) => {
  switch (action.type) {
    case DATA_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case DATA_FETCHED:
      return {
        ...state,
        loading: false,
        error: null,
        users: action?.payload?.data,
        filteredUsers: action?.payload?.data,
      };
    case DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
        filteredUsers: state.filteredUsers.filter(
          (item) => item.id !== action.payload,
        ),
      };
    case SEARCH_USER:
      const keyword = action.payload.toLowerCase();
      const filtered = state.users.filter((user) => {
        return (
          user.firstName.toLowerCase().includes(keyword) ||
          user.lastName.toLowerCase().includes(keyword) ||
          user.email.toLowerCase().includes(keyword) ||
          user.address.toLowerCase().includes(keyword)
        );
      });
      return {
        ...state,
        filteredUsers: filtered,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        filteredUsers: [...state.filteredUsers, action.payload],
      };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user,
        ),
        filteredUsers: state.filteredUsers.map((user) =>
          user.id === action.payload.id ? action.payload : user,
        ),
      };

    default:
      return state;
  }
};
export default UserReducer;
