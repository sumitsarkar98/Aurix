import React from "react";

const Landing = () => {
  return (
    <div className="container landing d-flex">
      <div
        id="hero"
        className="row flex-column justify-content-start min-vh-100 mt-lg-5 pt-5"
      >
        <div className="col-12 d-flex flex-column align-items-center pt-lg-5">
          <h1 className="display-2">gold calculator</h1>
          <h1 className="display-4">india</h1>
        </div>

        <div className="col-12 d-flex flex-column align-items-center mt-4">
          <p className="w-75 text-center fw-light fs-5">
            Make informed gold trading decisions with accurate calculations,
            real-time pricing, and a secure, user-friendly platform designed for
            simplicity and efficiency.
          </p>

          <p className="text-uppercase text-center my-3">
            India <span className="mx-1 text-warning">•</span>
            Gold Price <span className="mx-1 text-warning">•</span>
            Trusted
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
