const addToDb = (id) => {
  const bookmarks = getBookmark();
  if (bookmarks.includes(id)) {
    return true;
  } else {
    bookmarks.push(id);
  }

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

const getBookmark = () => {
  let bookmarks = [];

  const storedBookmark = localStorage.getItem("bookmarks");
  if (storedBookmark) {
    bookmarks = JSON.parse(storedBookmark);
  }
  return bookmarks;
};
export { addToDb, getBookmark };
