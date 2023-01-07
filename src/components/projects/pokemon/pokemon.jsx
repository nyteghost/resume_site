import React from "react";
import Pokemon from "./Pokemon.png";

const App = () => {
  return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center text-white bg-danger py-3 pb-4">
              <div>
                <img src={Pokemon} alt="pokemon" className="poke" />
              </div>
              <input
                  type="text"
                  placeholder="Enter name of Pokemon"
                  className="col-2 py-1 my-3"
              />
              <button className="btn-warning py-1 px-2 mx-2 text-white fw-bold fs-5">
                See Stats
              </button>
            </div>
          </div>
        </div>
      </>
  );
};