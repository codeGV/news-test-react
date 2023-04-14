import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { News } from "../NewsGrid/components/NewsPost";
import newsImg from "../news-dummy.jpg";

interface NewsDetailsProps {
  item: News;
  onBack: () => void;
}

function NewsDetails(props: NewsDetailsProps) {
  const { item, onBack } = props;
  return (
    <div className="news-details">
      <Card className="w-75 mx-auto">
        <Card.Body>
          <Card.Title className="text-start">{item.title}</Card.Title>
          <Card.Img
            className="w-75"
            variant="center"
            src={item.urlToImage || newsImg}
          />
          <Card.Text
            className="text-start "
            dangerouslySetInnerHTML={{ __html: item.description || "" }}
          ></Card.Text>
        </Card.Body>
      </Card>
      <Button onClick={onBack} variant="link">
        Back to list
      </Button>
    </div>
  );
}

export default NewsDetails;
