import React from "react";
import Images from "./Images.js";

function RelatedProduct() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center ">
          <div className="col-md-12 mt-3">
            <h2 className="text-center me-5">
              Related Products{" "}
              <span className="position-absolute  me-4 end-0 ">
                <span className="me-2" aria-hidden="true"></span>{" "}
                <i
                  className="fa fa-chevron-circle-left carousel-control-prev icon text-secondary  "
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                  type="button"
                ></i>
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <i
                  className="fa fa-chevron-circle-right carousel-control-next icon text-secondary  "
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                  type="button"
                ></i>
              </span>
            </h2>{" "}
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <div className="cards-wrapper ">
                    {Images.map((data, index) => (
                      <div className="card" key={index}>
                        <div className="image-wrapper ">
                          <img src={data.image} alt="..." />
                        </div>
                        <div className="card-body">
                          <p className="card-text">{data.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="carousel-item border-0">
                  <div className="cards-wrapper ">
                    {Images.map((data, index) => (
                      <div className="card " key={index}>
                        <div className="image-wrapper">
                          <img src={data.image} alt="..." />
                        </div>
                        <div className="card-body">
                          <p className="card-text">{data.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RelatedProduct;
