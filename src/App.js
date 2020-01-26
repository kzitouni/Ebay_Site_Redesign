import React from "react";
import "./App.css";
import Searchbar from "./Search/Searchbar";
import Result from "./Search/Result";
import { Switch, Route } from "react-router-dom";
import ProductPage from "./ProductPage/ProductPageHeader";
import CategoriesBar from "./Search/Categories/CategoriesBar";
import WatchListMap from "./Watchlist/WatchListMap";
import LandingPage from "./LandingPage";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/product:productName">
          <header className="App_Header">
            <Searchbar />
          </header>
          <div className="Search_Container_App">
            <div className="Categories_Left"></div>
          </div>
          <div>
            <ProductPage />
          </div>
        </Route>
        <Route exact path="/watchlist">
          <header className="App_Header">
            <Searchbar />
          </header>
          <div className="Search_Container_App">
            <div className="Categories_Left"></div>
          </div>
          <WatchListMap />
        </Route>
        <Route exact path="/search">
          <header className="App_Header">
            <Searchbar />
          </header>
          <div className="Search_Container_App">
            <div className="Categories_Left"></div>
          </div>
          <div className="Search_Container_App">
            <div className="Categories_Left">
              <CategoriesBar />
            </div>

            <Result />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
