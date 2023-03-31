import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import QAsection from "./components/QAsection/QAsection";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <QAsection></QAsection>
    </div>
  );
}

export default App;
