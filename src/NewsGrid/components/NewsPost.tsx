import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./index.css";
import newsImg from "../../news-dummy.jpg";

export interface News {
  source: {
    id: string;
    name: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

interface NewsPostProps {
  item: News;
  onNews: () => void;
}

function NewsPost(props: NewsPostProps) {
  const { item, onNews } = props;
  return (
    <div className="Post">
      <Card className="grid-card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="grid-card-title">{item.title}</Card.Title>
          <Card.Img
            className="grid-card-img"
            variant="top"
            src={item.urlToImage || newsImg}
          />
          <Card.Text
            className="grid-card-text"
            dangerouslySetInnerHTML={{ __html: item.description || "" }}
          ></Card.Text>
          <Button onClick={onNews} variant="link">
            More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewsPost;
