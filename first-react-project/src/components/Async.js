import React, { useEffect, useState } from "react";

const Async = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("newApiToken")
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
