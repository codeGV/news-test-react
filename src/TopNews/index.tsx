import React from "react";
import { take } from "rxjs";
import NewsDetails from "../NewsDetails";
import NewsGrid from "../NewsGrid";
import { News } from "../NewsGrid/components/NewsPost";
import { getNews } from "../services/news.service";

function TopNews(props: { country: string }) {
  const [news, setNews] = React.useState<News[]>([]);
  const [selectedNews, setSelectedNews] = React.useState<News | null>(null);

  React.useEffect(() => {
    getNews(props.country)
      .pipe(take(1))
      .subscribe((res) => {
        setNews(res.articles);
      });
  }, [props.country]);

  return (
    <div className="news">
      <p>Top News</p>
      {selectedNews ? (
        <NewsDetails item={selectedNews} onBack={() => setSelectedNews(null)} />
      ) : (
        <NewsGrid onNews={(news) => setSelectedNews(news)} items={news} />
      )}
    </div>
  );
}

export default TopNews;
