import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="Services">
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
        }}
        className="mt-5 mb-0"
      >
        Services
      </h1>
      <div className="container-fluid row mx-auto">
        {services.map((service) => {
          return <Service service={service}></Service>;
        })}
      </div>
    </div>
  );
};

export default Services;
