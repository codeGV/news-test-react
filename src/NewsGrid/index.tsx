import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewsPost, { News } from "./components/NewsPost";

interface NewsGridProps {
  items: News[];
  onNews: (item: News) => void;
}

function NewsGrid(props: NewsGridProps) {
  return (
    <div className="NewsGrid">
      <Container fluid>
        <Row>
          {props.items.map((item, i) => (
            <Col>
              <NewsPost onNews={() => props.onNews(item)} key={i} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default NewsGrid;
