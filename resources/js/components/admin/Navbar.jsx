import React from "react";
import "../../../css/component/admin/navbar.css";

export default function Navbar() {
    return (
        <div className="row mx-auto bg-white shadow mb-2" id="admin-navbar">
            <div className="col d-flex align-items-center ">
                <div className="admin-brand-image overflow-hidden">
                    <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ab3bba3-5b59-43a1-9e2a-e1593d3ca64f/ddsn174-21df4ea8-9aeb-4c9b-aaa4-30852f0d7822.jpg/v1/fill/w_1121,h_713,q_70,strp/little_girl_hugging_lion_art_by_helpful111_ddsn174-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE0IiwicGF0aCI6IlwvZlwvOGFiM2JiYTMtNWI1OS00M2ExLTllMmEtZTE1OTNkM2NhNjRmXC9kZHNuMTc0LTIxZGY0ZWE4LTlhZWItNGM5Yi1hYWE0LTMwODUyZjBkNzgyMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eE5zoy3JXrdzMWLFe_bO-cdZHsEjZIwFigKkLC_Pt3Q"
                        alt=""
                    />
                </div>
            </div>
            <div className="col">2</div>
            <div className="col">3</div>
        </div>
    );
}
