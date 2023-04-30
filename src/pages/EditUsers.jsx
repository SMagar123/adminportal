import React from "react";
import { Link } from "react-router-dom";

export function EditUsers() {
  return (
    <div className="edituser__wrapper">
        <h2>Edit User</h2>
        <div className="edit-form">
          <div className="edit-form-detail">
            <div className="edit-detail">
              <label>ID</label>
              <input type="text" />
            </div>
            <div className="edit-detail">
              <label>FirstName</label>
              <input type="text" />
            </div>
            <div className="edit-detail">
              <label>LastName</label>
              <input type="text" />
            </div>
            <div className="edit-detail">
              <label>Email</label>
              <input type="text" />
            </div>
            <div className="edit-detail">
              <label>Phone No:</label>
              <input type="text" />
            </div>
            <div className="button">
              <button className="confirm">Confirm</button>
              <Link to="/Users">
                <button className="cancel">Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}
