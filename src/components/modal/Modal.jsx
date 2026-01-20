
import React from "react";
import { Link } from "react-router-dom";
import "./modal.css";
import EditContact from "../../pages/EditContact";

export default function Modal({ isOpen, onClose,id }) {
  if (!isOpen) return null;

  return (
    <div className={`modal-parent ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="modal-children position-relative" onClick={(e) => e.stopPropagation()}>
        
        {/* Close button */}
        <span className="modal-close" onClick={onClose}>×</span>

        <h4 className="mb-4 text-center">User Information</h4>

      <EditContact id={id} onClose={onClose}/>
      </div>
    </div>
  );
}
