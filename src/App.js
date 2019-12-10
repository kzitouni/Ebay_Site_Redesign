import React from 'react';
import logo from './logo.svg';
import './App.css';
import Starwars from './Starwars'
import Searchbar from './Searchbar'
import SearchResult from './SearchResult'
import Result from './Result'
import {Switch, Link, Route} from 'react-router-dom'
import ProductPage from './ProductPage';
import CategoriesBar from './CategoriesBar'
import Description from './ProductPage/Description';
import WatchList from './WatchList'
import WatchListMap from './WatchListMap'
function App() {
  return (
    <div className="App">
      <header className="App_Header">
        <Searchbar />
      </header>
      <div className="Search_Container_App" >
        <div className="Categories_Left">
        </div>
        </div>
    <Switch>
      <Route exact path="/">
      <div className="Search_Container_App" >
        <div className="Categories_Left">
        <CategoriesBar />
        </div>
      
        <Result />
        </div>
      </Route>
      <Route exact path="/product:productName">
<div>
        <ProductPage />
        <hr className="Product_Bottom_HR" />
        <Description />

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
