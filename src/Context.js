import React, { useState, useEffect } from "react";
import axios from "axios";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("sly cooper");
  const [category, setCategory] = useState("");
  const [itemspec, setItemspec] = useState("");
  const [itemid, setItemid] = useState("123434343");
  const [watchlist, setWatchlist] = useState([]);
  const [item1, setItem1] = useState();
  const [item2, setItem2] = useState();
  const SearchItems = async () => {
    try {
      let Data = await axios.get(
        `https://7ohlgtw9j3.execute-api.us-east-1.amazonaws.com/EbaySearch?${category}&search=${search}`
      );
      console.log(category, search);
      return Data;
    } catch (error) {
      console.log(error);
      console.log("dayum");
    }
  };

  const url = `/svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=KarimZit-TestKey-PRD-83882c164-20d40dd0&RESPONSE-DATA-FORMAT=JSON${category}&REST-PAYLOAD&keywords=${search}&itemFilter.name=MaxPrice&itemFilter.value=1000.00&itemFilter.paramName=Currency&itemFilter.paramValue=USD&outputSelector(0)=SellerInfo&outputSelector(1)=CategoryHistogram&descriptionSearch=true&paginationInput.entriesPerPage=55`;
  useEffect(() => {
    SearchItems().then(data => setProduct(data.data.findItemsAdvancedResponse));
    console.log(product);
  }, [search, category]);

  const itemFetch = async item => {
    await setItemid(item);
    await console.log("joe", itemspec);
    console.log(watchlist);
    await axios
      .get(
        `https://7ohlgtw9j3.execute-api.us-east-1.amazonaws.com/EbayItem?item=${item}`
      )
      .then(data => setItemspec(data.data));
  };

  function onSubmit(item, cat) {
    setSearch(item);
    setCategory(cat);
    console.log(cat + "Category");
  }

  // function onClick(item) {
  //   setCategory(item);

  //   console.log(category);
  // }
  return (
    <Context.Provider
      value={{
        product,
        onSubmit,
        category,
        // onClick,
        itemFetch,
        itemspec,
        watchlist,
        setWatchlist,
        setItemspec,
        setItemid,
        itemid,
        setCategory
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
