import React from "react";


export default function Header(){
    return (
        <nav className="navbar navbar-expand-lg bg-danger ">
        <div className="container-fluid row justify-content-center">
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#" >My travel Journal</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        )
}