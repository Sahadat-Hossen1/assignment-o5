import React, { useEffect, useState } from "react";
import { useContactContext } from "../contextApi/ContactContext";
import { Link } from "react-router-dom";
import Search from "../components/search/Search";
import Table from './../components/contaclist/Table';

export default function ContactList() {
  const { loading, filteredUsers, handleDelete } = useContactContext();
  const [finalData, setFinalData] = useState([]);
  // console.log(filteredUsers);
  
   const handleSelect = (value) => {
    let filtered = [...filteredUsers];
    // console.log(value);
    if ((value ==="firstName")) {
      filtered = filtered.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (value === "lastName") {
      filtered = filtered.sort((a, b) => a.lastName.localeCompare(b.lastName));
    } else if (value === "oldestToFirst") {
      filtered = filtered.sort((a, b) => b.id - a.id);
    } else {
      filtered = [...filteredUsers];
    }
    setFinalData(filtered);
  };
  useEffect(() => {
    setFinalData(filteredUsers);
   
    // handleSelect()
  }, [filteredUsers]);
  // console.log(finalData);
  
  return (
    <>
      <main className="py-5">
        <div className="container">
          <div className="card">
            <div className="card-header card-title">
              <div className="d-flex align-items-center justify-content-between">
                <h2>All Contacts</h2>

                {/* search fild */}
                <Search />
                {/*  */}
                <Link to="/add" className="btn btn-success">
                  <i className="fa fa-plus-circle"></i> Add New
                </Link>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between p-3">
              <div className="fs-2">
                <i className="fa fa-filter text-success"></i> Filter
              </div>

              <select
                onClick={(e) => handleSelect(e.target.value)}
                className="form-select"
              >
                <option value="default">Default</option>
                <option value="firstName">First Name (A → Z)</option>
                <option value="lastName">Last Name (A → Z)</option>
                <option value="oldestToFirst">Oldest To First</option>
              </select>
            </div>

            <div className="card-body">
              <Table loading={loading} finalData={finalData} handleDelete={handleDelete}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
