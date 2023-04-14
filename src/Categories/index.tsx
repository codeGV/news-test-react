import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

function Categories() {
  return (
    <div className="news">
      <p>Categories</p>
      <Row>
        {categories.map((c) => (
          <Col>
            <Button variant="light">{c.toUpperCase()}</Button>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Categories;
