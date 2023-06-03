import * as React from "react";

export default function Breadcrumbs() {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-light justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 m-5">
            <h1 className="text-center">WATER BOTTLE</h1>
            <nav className="justify-content-center d-flex">
              <ol className=" breadcrumb  ">
                <li className="breadcrumb-item ">
                  {/* We can also use Link from react-router-dom instead of anchr tag a  */}
                  <a href="#" className="text-decoration-none text-secondary  ">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item  " aria-current="page">
                  New Arrivels
                </li>{" "}
                <li className="breadcrumb-item active" aria-current="page">
                  Water Bottle
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
