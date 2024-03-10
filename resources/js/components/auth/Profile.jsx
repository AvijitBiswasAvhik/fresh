import React from "react";
import "../../../css/component/auth/profile.css";
import { useStateContext } from "../../ContextProvider";

export default function Profile() {
    let { manageLogin } = useStateContext();
    return (
        <div id="user-profile" className="pt-3">
            <div className="card d-flex">
                <div className="row">
                    <div className="col-3">
                      <div className="position-relative">
                        <div className="profile-image position-relative" id="user-profile-image">
                            <img
                                className="card-img-top"
                                src="https://i.etsystatic.com/iusa/2123df/105539236/iusa_400x400.105539236_n6er.jpg?version=0"
                                alt="Card image cap"
                            />
                            
                        </div>
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-camera-fill position-absolute bottom-0 start-50 ms-3 z-1  border-rounded border-secondary"
                                viewBox="0 0 16 16"
                            >
                                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
                            </svg>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-title">
                            <h5>{manageLogin.loginData.name}</h5>
                        </div>
                        <div className="card-text ">
                            <p className="form-text lh-1">Edith your profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
