import React, { useState } from "react";
import image from "../assets/images/pic1.jpg";
import "../App.css";
function Slider() {
  const [count, setCount] = useState(1);

  const handleCountPlus = () => {
    setCount(count + 1);
  };

  const handleCountMinus = () => {
    setCount(count - 1);
    if (count <= 1) {
      setCount(1);
    }
  };
  return (
    <>
      <div className=" mt-3 container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <div className="ms-4">
              <img src={image} className="d-block w-75 mb-3" alt="image" />
              <img src={image} className="d-block w-75  mb-3" alt="image" />
            </div>
          </div>
          <div className=" col-md-4">
            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={image} className="d-block w-100" alt="image" />
                </div>
                <div className="carousel-item">
                  <img src={image} className="d-block w-100" alt="image" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bg-danger  rounded-circle"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next "
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon bg-danger rounded-circle"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <div className="packing-carton ">
              <h2>Packing Carton</h2>
              <h4 className="text-danger">
                RS.875.00{" "}
                <span className="text-dark">
                  <s>RS.999.00</s>
                </span>
              </h4>
            </div>
            <div className="list-button w-auto">
              <ul className=" d-flex list-unstyled">
                <a href="" className=" text-decoration-none text-dark">
                  <li className="list-items ">
                    {" "}
                    <i className="fas fa-truck "></i> Shopping
                  </li>
                </a>
                <a href="" className=" ms-auto text-decoration-none text-dark">
                  <li className="list-items ms-3">
                    {" "}
                    <i className="fas fa-envelope icon"></i> Ask About This
                    Product
                  </li>
                </a>
              </ul>
            </div>
            <div className="d-inline">
              <div
                className="btn-group me-5 w-25"
                role="group"
                aria-label="Basic example"
              >
                <button
                  onClick={handleCountMinus}
                  type=" button"
                  className="btn btn-secondary rounded-start-4 "
                >
                  -
                </button>
                <span className="btn btn-secondary ">{count}</span>
                <button
                  type="button"
                  onClick={handleCountPlus}
                  className="btn btn-secondary rounded-end-4"
                >
                  +
                </button>
              </div>
              <button className="btn btn-outline-dark me-5 rounded-4 w-auto mt-2">
                Buy Now
              </button>
              <button className="btn btn-outline-danger rounded-4 w-auto mt-2">
                Add to cart
              </button>
            </div>
            <div className="wishlist mt-5">
              <ul className="  list-unstyled">
                <a href="" className=" text-decoration-none text-dark">
                  <li className="list-items mb-4">
                    <h6>
                      {" "}
                      <i className="far fa-heart icon"></i> Add to wishlist
                    </h6>
                  </li>
                </a>
                <a href="" className="  text-decoration-none text-dark">
                  <li className="list-items mb-4">
                    <h6>
                      Vendor:
                      <span className="text-secondary"> Girllines.com</span>
                    </h6>
                  </li>
                </a>

                <li className="list-items ">
                  <h4>DESCRIPTION</h4>
                </li>
              </ul>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <hr className=" mt-5 seprated" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
