import React, { useEffect, useState } from "react";

const Async = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0f9a604e9f4342949b8b30e54c90fa1f"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
