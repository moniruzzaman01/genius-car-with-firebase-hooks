import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetails;
