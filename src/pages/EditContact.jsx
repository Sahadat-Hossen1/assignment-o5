// import React from "react";
// import { useContactContext } from "../contextApi/ContactContext";
// import updateUser from "../api_service/users/UpdateUser";
// import Actions from "../actions/Actions";

// export default function EditContact({ id, onClose }) {
//   const { users,dispatch } = useContactContext();
//   const editingContact = users.find(
//     (contact) => String(contact.id) === String(id),
//   );
//   console.log(editingContact.firstName);
//   const handleSubmit =async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const firstName = form.first_name.value;
//     const lastName = form.last_name.value;
//     const email = form.email.value;
//     let phone = form.phone.value;
//     const address = form.address.value;
    
//     const UpdatedCantact = {
//         id,
//       firstName,
//       lastName,
//       email,
//       phone,
//       address,
//     };
//   try {
//       const savedUser = await updateUser(id, UpdatedCantact);

//       dispatch({
//         type: Actions.User.EDIT_USER,
//         payload: savedUser,
//       });

//       onClose();
//     } catch (error) {
//       console.error(error);
//     }

   
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="row g-3">
//         <div className="col-md-12">
//           <label className="form-label">First Name</label>
//           <input
//             className="form-control"
//             defaultValue={editingContact?.firstName} 
//             name="first_name"
//             required
//           />
//         </div>

//         <div className="col-md-12">
//           <label className="form-label">Last Name</label>
//           <input
//             className="form-control"
//             defaultValue={editingContact?.lastName} 
//             name="last_name"
//             required
//           />
//         </div>

//         <div className="col-md-12">
//           <label className="form-label">Email</label>
//           <input
//             className="form-control"
//             defaultValue={editingContact?.email} 
//             name="email"
//             required
//           />
//         </div>

//         <div className="col-md-12">
//           <label className="form-label">Phone</label>
//           <input
//             type="number"
//             className="form-control"
//             defaultValue={editingContact?.phone} 
//             name="phone"
//             required
//           />
//         </div>

//         <div className="col-md-12">
//           <label className="form-label">Address</label>
//           <textarea
//             rows="3"
//             className="form-control"
//             defaultValue={editingContact?.address} 
//             name="address"
//             required
//           />
//         </div>

//         <div className="d-flex justify-content-end mt-3">
//           <button type="submit" className="btn btn-primary">
//             Save
//           </button>
//           <button
//             type="button"
//             onClick={onClose}
//             className="btn btn-outline-secondary ms-2"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </>
//   );
// }

import React, { useState } from "react";
import { useContactContext } from "../contextApi/ContactContext";
import updateUser from "../api_service/users/UpdateUser";
import Actions from "../actions/Actions";

export default function EditContact({ id, onClose }) {
  const { users, dispatch } = useContactContext();
  const editingContact = users.find((c) => String(c.id) === String(id));

  if (!editingContact) return <p>Loading...</p>;

  const [formData, setFormData] = useState({
    firstName: editingContact.firstName,
    lastName: editingContact.lastName,
    email: editingContact.email,
    phone: editingContact.phone,
    address: editingContact.address,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const savedUser = await updateUser(id, formData);

      dispatch({
        type: Actions.User.EDIT_USER,
        payload: savedUser,
      });

      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form  className="row g-3">
      <div className="col-md-12">
        <label className="form-label">First Name</label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="col-md-12">
        <label className="form-label">Last Name</label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="col-md-12">
        <label className="form-label">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="col-md-12">
        <label className="form-label">Phone</label>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="col-md-12">
        <label className="form-label">Address</label>
        <textarea
          name="address"
          rows="3"
          value={formData.address}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button onClick={handleSubmit} className="btn btn-primary">
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="btn btn-outline-secondary ms-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
