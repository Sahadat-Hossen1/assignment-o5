import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContactContext } from "../contextApi/ContactContext";
import Modal from "../components/modal/Modal";
import { initialState, modalReducer } from "../reducers/ModalReducer";

export default function ContactDetails() {
  //
  const [singleContact,setSingleContact]=useState({})
  //
  const[state,dispatch]=useReducer(modalReducer,initialState)
  //
  const { id } = useParams();
  //
  const { handleDelete, users } = useContactContext();
   //
  useEffect(()=>{
    if(users.length > 0){

      var contact=users.find(contact=>String(contact.id) === String(id))
      setSingleContact(contact ||{});
    }
  },[id,users])
  //
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };
  //
  const deleteContact = () => {
    handleDelete(id);
    navigate("/");
  }//
  const openModal=()=>{
    dispatch({type:"OPEN_MODAL"})
  }
  const closeModal=()=>{
    dispatch({type:"CLOSE_MODAL"})
  }
 
  
       
  return (
    <>
      <main className="py-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header card-title">
                  <strong>Contact Details</strong>
                </div>

                <div className="card-body">
                  {Object.entries(singleContact).map(([label, value], i) => (
                    <div className="form-group row" key={i}>
                      <label className="col-md-3 col-form-label">{label}</label>
                      <div className="col-md-9">
                        <p className="form-control-plaintext text-muted">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}

                  <hr />

                  <div className="form-group row mb-0">
                    <div className="col-md-9 offset-md-3">
                      <button onClick={()=>openModal()} className="btn btn-info me-2">Edit</button>
                     
                      <button
                        onClick={() => deleteContact()}
                        className="btn btn-outline-danger me-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={handleCancel}
                        className="btn btn-outline-secondary"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
       <Modal
      isOpen={state.isOpen}
      id={id}
      onClose={closeModal}
      />
    </>
  );
}
