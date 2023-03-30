import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
    </div>
  );
}

export default App;
