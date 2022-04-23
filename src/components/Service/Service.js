import { Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  // console.log(service);
  const navigate = useNavigate();
  const handleBookingBtn = (id) => {
    navigate(`/booking/${id}`);
  };
  return (
    <div className="col-12 col-md-4 col-lg-3 g-4 relative">
      <Card
        style={{
          minHeight: "40vh",
        }}
      >
        <Card.Img variant="top" src={service.img} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>{service.description.slice(0, 80)}</Card.Text>
          <Card.Text>{service.price}</Card.Text>
          <Button
            onClick={() => handleBookingBtn(service.id)}
            className="mx-auto d-block"
            variant="dark"
          >
            Booking Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
