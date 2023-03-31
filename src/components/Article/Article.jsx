import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Article = (props) => {
  const { img, authorImage, authorName, publishedDate, readTime, title } = props.article;
  const handleReadTime = props.handleReadTime;
  const handleBookmark = props.handleBookmark;
  return (
    <div>
      <img className="max-h-[460px] w-full" src={img} alt="" />
      {/* Author info part */}
      <div className="flex justify-between mt-8">
        <div className="flex items-center">
          <img className="w-14 rounded-full mr-4" src={authorImage} alt="" />
          <div>
            <h5 className="font-bold">{authorName}</h5>
            <p>{publishedDate}</p>
          </div>
        </div>
        <div>
          {readTime} min read
          <FontAwesomeIcon
            onClick={() => {
              handleBookmark(props.article);
            }}
            className="ml-2"
            icon="fa-solid fa-bookmark"
          />
        </div>
      </div>
      {/* End of author info part */}
      <h2 className="text-3xl font-semibold my-3 ">{title}</h2>
      <a
        onClick={() => handleReadTime(props.article)}
        className="mb-10 underline text-blue-700 cursor-pointer"
      >
        Mark as read
      </a>
      <div className="h-0.5 w-full bg-gray-200 my-10"></div>
    </div>
  );
};

export default Article;
