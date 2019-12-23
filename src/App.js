import React from "react";
import "./App.css";
import Searchbar from "./Search/Searchbar";
import Result from "./Search/Result";
import { Switch, Route } from "react-router-dom";
import ProductPage from "./ProductPage/ProductPageHeader";
import CategoriesBar from "./Search/Categories/CategoriesBar";
import WatchListMap from "./Watchlist/WatchListMap";
function App() { 
  return (
    <div className="App">
      <header className="App_Header">
        <Searchbar />
      </header>
      <div className="Search_Container_App">
        <div className="Categories_Left"></div>
      </div>
      <Switch>
        <Route exact path="/">
          <div className="Search_Container_App">
            <div className="Categories_Left">
              <CategoriesBar />
            </div>

            <Result />
          </div>
        </Route>
        <Route exact path="/product:productName">
          <div>
            <ProductPage />
          </div>
        </Route>
        <Route exact path="/watchlist">
          <WatchListMap />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
