import React, { useEffect, useState } from "react";
import Article from "../Article/Article";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  let [time, setTime] = useState(0);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  const handleReadTime = (article) => {
    time = time + article.readTime;
    setTime(time);
  };

  return (
    <div className="max-w-[1280px] flex mt-8 px-6 lg:px-0">
      {/* Article part */}
      <div className="w-4/6">
        {articles.map((article) => (
          <Article handleReadTime={handleReadTime} article={article} key={article.id}></Article>
        ))}
      </div>
      {/* Sidebar */}
      <div className="ml-7">
        <div className=" sticky top-8 w-full lg:w-96 bg-purple-100 border-2 rounded-md border-purple-600">
          <h4 className="px-8 py-3 text-center font-semibold">Spent time on read: {time} min</h4>
        </div>
        <div className="mt-4 sticky top-24">
          <h4 className=" w-full lg:w-96 px-8 py-3 text-center font-semibold bg-gray-200 rounded-md">
            Bookmarked Blogs: 00
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Blog;
