import React, { useState, useEffect } from "react";
import "../../../../css/component/admin/user/UserList.css";
import axiosClient from "../../../Axios";

export default function UserList() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient
      .get("/admin/user-list")
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading users...</div>;

  return (
    <div id="admin-user-list">
      <div className="row">
        {user.map((el) => (
          <div
            key={el.id}
            className="col mb-2 d-flex align-items-center justify-content-center"
          >
            <div className="user">
              <div className="admin-user-card">
                <div className="admin-user-card-photo">
                  <img
                    src={el.image || "/default-avatar.png"}
                    alt="User"
                    className="admin-user-photo bottom-left"
                    onError={(e) => {
                      e.target.src = "/default-avatar.png";
                    }}
                  />
                </div>

                <div className="admin-user-details">
                  <h5 className="user-name user-content">{el.name}</h5>
                  <p className="form-text text-muted user-content">{el.email}</p>
                  <p className="user-content">
                    Current Order: {el.order?.length || 0}
                  </p>
                  <p className="user-content">Complete Order: 4</p>
                  <p className="user-content">
                    Total Payment: $
                    {(el.order || []).reduce(
                      (total, order) => total + Number(order.total_amount || 0),
                      0
                    )}
                  </p>
                  {/* Social icons remain the same */}
                  <div className="user-admin-card-footer">
                  Contact NO: +88 01{Math.floor(1000000000 + Math.random() * 9000000000)}
                </div>
                </div>

                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}