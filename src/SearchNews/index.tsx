import React from "react";
import NewsGrid from "../NewsGrid";
import { News } from "../NewsGrid/components/NewsPost";
import { getNews } from "../services/news.service";
import Form from "react-bootstrap/Form";
import NewsDetails from "../NewsDetails";

function SearchNews(props: { country: string }) {
  const [news, setNews] = React.useState<News[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [selectedNews, setSelectedNews] = React.useState<News | null>(null);

  let searchTimeout: NodeJS.Timeout;

  React.useEffect(() => {
    getNews(props.country,search).subscribe((res) => {
        setNews(res.articles);
      });
  }, [props.country,search]);

  const onSearchChange = (text: string) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      setSearch(text);
    }, 500);
  };

  return (
    <div className="news">
      <p>Search Top News</p>
      <div className="search-cnt">
        <Form.Control
          onChange={(e) => onSearchChange(e.target.value)}
          type="text"
          placeholder="Search"
        />
      </div>
      {selectedNews ? (
        <NewsDetails item={selectedNews} onBack={() => setSelectedNews(null)} />
      ) : (
        <NewsGrid onNews={(news) => setSelectedNews(news)} items={news} />
      )}
    </div>
  );
}

export default SearchNews;
