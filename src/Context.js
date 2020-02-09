import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import DefaultSearch from './DefaultSearch'
const Context = React.createContext();

function ContextProvider({ children }) {
  const [product, setProduct] = useState([DefaultSearch]);
  const [load, setLoad] = useState();
  const [search, setSearch] = useState("guitar");
  const [category, setCategory] = useState("");
  const [itemspec, setItemspec] = useState("x");
  const [itemid, setItemid] = useState("123434343");
  const [watchlist, setWatchlist] = useState([]);

  const SearchItems = async (item, cat) => {
    try {
      setLoad(
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "90px"
          }}
        >
          <ReactLoading type={"bars"} color={"#a3cb47"} />
        </div>
      );
      let Data = await axios.get(
        `https://7ohlgtw9j3.execute-api.us-east-1.amazonaws.com/EbaySearch?search=${item}&categoryId=${cat}`
      );
      setLoad();
      return Data;
    } catch (error) {

    }
  };

  const itemFetch = async item => {
    await setItemid(item);
    await axios
      .get(
        `https://7ohlgtw9j3.execute-api.us-east-1.amazonaws.com/EbayItem?item=${item}`
      )
      .then(data => setItemspec(data.data));
  };

  function onSubmit(item, cat) {
    setProduct([]);
    setSearch(item);
    setCategory(cat);
    SearchItems(item, cat).then(data => setProduct(data.data.findItemsAdvancedResponse));
  }

  function onClick(item) {
    setCategory(item);
    setProduct([]);
    SearchItems(search, item).then(data => setProduct(data.data.findItemsAdvancedResponse));
  }
  return (
    <Context.Provider
      value={{
        product,
        onSubmit,
        category,
        onClick,
        itemFetch,
        itemspec,
        watchlist,
        setWatchlist,
        setItemspec,
        setItemid,
        itemid,
        setCategory,
        load,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };

