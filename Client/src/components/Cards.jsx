import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Cards({ photo, title, info, href }) {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <Card className="mx-5 card-container mb-5">
      <Card.Img variant="top" src={photo} className="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{info}</Card.Text>
        <Button
          onClick={() => handleClick(href)}
          variant="primary"
          className="card-button"
        >
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
