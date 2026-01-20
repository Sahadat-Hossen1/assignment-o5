import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import { modalReducer } from "../../reducers/ModalReducer";
import { initialState } from "../../reducers/UserReducer";

export default function Table({ loading, finalData, handleDelete }) {
    // const[open,setOpen]=useState(false)
      const [state, dispatch] = useReducer(modalReducer, initialState);

  const openModal = (id) => {
    dispatch({ type: "OPEN_MODAL", payload: id });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  
  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        {loading ? (
          <p style={{ color: "red", alignItems: "center", marginTop: "10px" }}>
            Loading
          </p>
        ) : (
          <tbody>
            {finalData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1} </td>
                <td>{item?.firstName}</td>
                <td>{item?.lastName}</td>
                <td>{item?.email}</td>
                <td>{item?.address}</td>
                <td>
                  <Link
                    to={`/contact/${item?.id}`}
                    className="btn btn-sm btn-outline-info me-1"
                  >
                    <i className="fa fa-eye"></i>
                  </Link>
                  <button
                    onClick={()=>openModal(item?.id)}
                    className="btn btn-sm btn-outline-secondary me-1"
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(item?.id)}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      <Modal
      isOpen={state.isOpen}
      id={state.selectedId}
      onClose={closeModal}
      />

    </>
  );
}
