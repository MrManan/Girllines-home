import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 p-3">
            <div className="title">
              <h2 className="text-center">BE IN TOUCH WITH US:</h2>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit} className="d-flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="form-control me-2 rounded-5 w-75"
                />
                <button className="btn btn-danger ps-4 pe-4 rounded-5">Join Us</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
