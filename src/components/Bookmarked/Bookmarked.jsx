import React from "react";

const Bookmarked = (props) => {
  const { title } = props.bookmarkedArticle;
  return <div className="bg-white px-4 py-2 rounded-lg my-3 font-semibold">{title}</div>;
};

export default Bookmarked;
