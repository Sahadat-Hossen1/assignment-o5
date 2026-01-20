import React, { createContext, useContext, useEffect, useReducer } from "react";
import GetUsers from "../api_service/users/GetUsers";
import Api from "../api_service/api/user_api";
import Actions from "../actions/Actions";
import UserReducer, { initialState } from "../reducers/UserReducer";
import DeleteUser from "../api_service/users/DeleteUser";
export const ContactContext = createContext({});
export default function ContactProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const { users, filteredUsers, loading, error } = state;
  const {
    DATA_FETCHING,
    DATA_FETCHED,
    DATA_FETCH_ERROR,
    DELETE_USER,
    EDIT_USER,
    SEARCH_USER,
    ADD_USER,
  } = Actions.User;
  // console.log(state.user);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: DATA_FETCHING });
      try {
        // const response=await fetch("http://localhost:3003/users");
        const data = await GetUsers(Api.USERS);
        // console.log(data);

        dispatch({
          type: DATA_FETCHED,
          payload: {
            data: data,
            filteredUsers: data,
          },
        });
      } catch (error) {
        dispatch({ type: DATA_FETCH_ERROR, payload: error.message });
      }
    };
    // debugger

    fetchData();
  }, []);
  //delete fuction
  const handleDelete = async (id) => {
    // console.log("delete",id);
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;
    try {
      await DeleteUser(id);
      dispatch({ type: DELETE_USER, payload: id });
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  // search function
  const handleSearch = (searchKeyword) => {
    dispatch({
      type: SEARCH_USER,
      payload: searchKeyword.toLowerCase(),
    });
  };
  //this useEfect for console check
  // useEffect(() => {
  //   // console.log(state.user);
  // }, [state.user]);
  //sending state and variable globaly
  const concatInfo = {
    dispatch,
    users,
    filteredUsers,
    loading,
    error,
    handleDelete,
    handleSearch,
  };
  return (
    <ContactContext.Provider value={concatInfo}>
      {children}
    </ContactContext.Provider>
  );
}
export const useContactContext = () => {
  return useContext(ContactContext);
};
