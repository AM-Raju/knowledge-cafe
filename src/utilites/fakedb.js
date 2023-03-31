const addToDb = (id) => {
  const bookmarks = getBookmark();
  bookmarks.push(id);
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
