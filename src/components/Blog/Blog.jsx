import React, { useEffect, useState } from "react";
import Article from "../Article/Article";
import { addToDb, getBookmark } from "../../utilites/fakedb";
import { faHourglass3 } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  let [time, setTime] = useState(0);
  let [bookmarkCount, setBookmarkCount] = useState(0);
  let [change, setChange] = useState(0);
  let [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  useEffect(() => {
    const bookmarks = getBookmark();
    bookmarkCount = bookmarks.length;
    setBookmarkCount(bookmarkCount);
    let savedArticle = [];
    for (let id of bookmarks) {
      const addedArticle = articles.find((article) => article.id === id);
      if (addedArticle) {
        savedArticle.push(addedArticle);
      }
    }
    setBookmarkedArticles(savedArticle);
  }, [articles, change]);

  const handleReadTime = (article) => {
    time = time + article.readTime;
    setTime(time);
  };

  const handleBookmark = (article) => {
    addToDb(article.id);
    setChange(change + 1);
  };

  return (
    <div className="max-w-[1280px] flex mt-8 px-6 lg:px-0">
      {/* Article part */}
      <div className="w-4/6">
        {articles.map((article) => (
          <Article
            handleBookmark={handleBookmark}
            handleReadTime={handleReadTime}
            article={article}
            key={article.id}
          ></Article>
        ))}
      </div>
      {/* Sidebar */}
      <div className="ml-7">
        <div className=" sticky top-8 w-full lg:w-96 bg-purple-100 border-2 rounded-md border-purple-600">
          <h4 className="px-8 py-3 text-center font-semibold">Spent time on read: {time} min</h4>
        </div>
        <div className="mt-4 sticky top-24 w-full lg:w-96 px-8 py-3 bg-gray-200 rounded-md">
          <h4 className=" mb-4 text-center font-semibold">Bookmarked Blogs: {bookmarkCount}</h4>
          {bookmarkedArticles.map((bookmarkedArticle) => (
            <p>{bookmarkedArticle.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
