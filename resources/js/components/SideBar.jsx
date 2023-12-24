import React from "react";
import "../../css/component/SideBar.css";
export default function SideBar() {
    return (
        <div className="container w-100 px-0 overflow-y-scroll" id="sidebar-content">
            <div
                className="list-group w-100 list-group-flush "
                id="sidebar-man-menu"
                role="tablist"
            >
                <a
                    className="list-group-item"
                    id="list-home-list"
                    data-bs-toggle="list"
                    href="#list-home"
                    role="tab"
                    aria-controls="list-home"
                >
                    Glass
                </a>
                <a
                    className="list-group-item"
                    id="list-home-list"
                    data-bs-toggle="list"
                    href="#list-home"
                    role="tab"
                    aria-controls="list-home"
                >
                    Shirt
                </a>
                <a
                    className="list-group-item"
                    id="list-home-list"
                    data-bs-toggle="list"
                    href="#list-home"
                    role="tab"
                    aria-controls="list-home"
                >
                    Pant
                </a>
            </div>
        </div>
    );
}
