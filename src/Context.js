import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState();
  const [search, setSearch] = useState("sly cooper");
  const [category, setCategory] = useState("");
  const [itemspec, setItemspec] = useState("x");
  const [itemid, setItemid] = useState("123434343");
  const [watchlist, setWatchlist] = useState([]);

  const SearchItems = async () => {
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
        `https://7ohlgtw9j3.execute-api.us-east-1.amazonaws.com/EbaySearch?search=${search}&categoryId=${category}`
      );
      setLoad();
      return Data;
    } catch (error) {

    }
  };

  useEffect(() => {
    setProduct([]);
    SearchItems().then(data => setProduct(data.data.findItemsAdvancedResponse));
  }, [search, category]);

  const itemFetch = async item => {
    await setItemid(item);
    await axios
      .get(
        `https://7ohlgtw9j3.execute-api.us-east-1.amazonaws.com/EbayItem?item=${item}`
      )
      .then(data => setItemspec(data.data));
  };

  function onSubmit(item, cat) {
    setSearch(item);
    setCategory(cat);
  }

  function onClick(item) {
    setCategory(item);

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
        load
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
