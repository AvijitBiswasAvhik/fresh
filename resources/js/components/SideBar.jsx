import React from "react";
import "../../css/component/SideBar.css";
import { Link, NavLink } from "react-router-dom";
export default function SideBar() {
    return (
        <div
            className="container w-100 px-0 overflow-y-scroll"
            id="sidebar-content"
        >
            <div
                className="list-group w-100 list-group-flush "
                id="sidebar-man-menu"
                role="tablist"
            >
                <Link
                    to={"/products/glass"}
                    className="list-group-item"
                    id="list-home-list"
                    role="tab"
                    aria-controls="list-home"
                >
                    Glass
                </Link>
                <Link
                    to={"/products/shirt"}
                    className="list-group-item"
                    id="list-home-list"
                    role="tab"
                    aria-controls="list-home"
                >
                    Shirt
                </Link>
                <Link
                    to={"/products/pant"}
                    className="list-group-item"
                    id="list-home-list"
                    role="tab"
                    aria-controls="list-home"
                >
                    Pant
                </Link>
            </div>
        </div>
    );
}
