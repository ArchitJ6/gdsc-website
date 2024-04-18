import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Resource.css";

const Resource = () => {
  const Navigate = useNavigate();

  const handleCardClick = (path) => {
    Navigate(path);
  };

  return (
    <div className="resource-wpr" id="resources-section">
      <div className="resourcebody">
        <h1 className="resourceheading">Resource Sheet</h1>
        <div className="container">
          <div
            className="card"
            onClick={() => handleCardClick("/webdevelopment")}
          >
            <img
              className="card-img-top"
              src={"/resources/WebDevelopment.png"}
              alt="Card image cap"
            />
            <div className="card-body card-effect red">
              <h2 className="card-heading card-heading-one ">
                Web Development
              </h2>
            </div>
          </div>
          <div
            className="card"
            onClick={() => handleCardClick("/appdevelopment")}
          >
            <img
              className="card-img-top"
              src={"/resources/AppDevelopment.png"}
              alt="Card image cap"
            />
            <div className="card-body card-effect yellow">
              <h2 className="card-heading card-heading-one">App Development</h2>
            </div>
          </div>
          <div
            className="card"
            onClick={() => handleCardClick("/datastructures")}
          >
            <img
              className="card-img-top"
              src={"/resources/datastructures.png"}
              alt="Card image cap"
            />
            <div className="card-body card-effect blue">
              <h2 className="card-heading ">Data Structures and Algorthims</h2>
            </div>
          </div>
          <div
            className="card"
            onClick={() => handleCardClick("/machinelearning")}
          >
            <img
              className="card-img-top"
              src={"/resources/machinelearning.png"}
              alt="Card image cap"
            />
            <div className="card-body card-effect red">
              <h2 className="card-heading ">Machine Learning</h2>
            </div>
          </div>
          <div
            className="card"
            onClick={() => handleCardClick("/cybersecurity")}
          >
            <img
              className="card-img-top"
              src={"/resources/cybersecurity.png"}
              alt="Card image cap"
            />
            <div className="card-body  card-effect yellow">
              <h2 className="card-heading ">Cyber Security</h2>
            </div>
          </div>
          <div
            className="card"
            onClick={() => handleCardClick("/miscellaneous")}
          >
            <img
              className="card-img-top"
              src={"/resources/miscellaneous.png"}
              alt="Card image cap"
            />
            <div className="card-body card-effect blue">
              <h2 className="card-heading ">Miscellaneous</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
