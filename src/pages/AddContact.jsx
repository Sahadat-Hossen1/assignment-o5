import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Actions from "../actions/Actions";
import { useContactContext } from "../contextApi/ContactContext";
import AddUser from "../api_service/users/AddUser";

export default function AddContact() {
  const navigate=    useNavigate('/')

  const{dispatch,users}=useContactContext()
const {
  ADD_USER,
} = Actions.User;


  const handleSubmit =async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const email = form.email.value;
    let phone = form.phone.value;
    const address = form.address.value;
    console.log(phone.length);
    if (phone.length !== 11) {
      // phone=''
      alert("phone number must be 11 charecter");
      return;
    }
     const createAt=Date.now()
    const newUser = {
      firstName,
      lastName,
      email,
      phone,
      address,
      id:createAt
    };
    try{
     const addedUser= await AddUser(newUser)
      dispatch({
        type:ADD_USER,
        payload:addedUser,
      })
    }catch(error){
      console.log(error);
      
    }
    navigate('/')
    // console.log(newUser);
  };
  return (
    <>
      <main className="py-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header card-title">
                  <strong>Add New Contact</strong>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit} className="row">
                    <div className="col-md-12">
                      <div className="form-group row">
                        <label
                          htmlFor="first_name"
                          className="col-md-3 col-form-label"
                        >
                          First Name
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            id="first_name"
                            className="form-control"
                            required
                            
                            name="first_name"
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="last_name"
                          className="col-md-3 col-form-label"
                        >
                          Last Name
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            id="last_name"
                            className="form-control"
                            required
                            name="last_name"
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="email"
                          className="col-md-3 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-md-9">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            required
                            name="email"
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="phone"
                          className="col-md-3 col-form-label"
                        >
                          Phone
                        </label>
                        <div className="col-md-9">
                          <input
                            type="number"
                            id="phone"
                            className="form-control"
                            required
                            name="phone"
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="address"
                          className="col-md-3 col-form-label"
                        >
                          Address
                        </label>
                        <div className="col-md-9">
                          <textarea
                            id="address"
                            rows="3"
                            className="form-control"
                            required
                            name="address"
                          ></textarea>
                        </div>
                      </div>

                      <hr />

                      <div className="form-group row mb-0">
                        <div className="col-md-9 offset-md-3">
                          <button type="submit" className="btn btn-primary">
                            Save
                          </button>
                          <Link
                            to="/"
                            className="btn btn-outline-secondary ms-2"
                          >
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
