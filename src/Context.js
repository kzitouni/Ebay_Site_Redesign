import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("sly cooper");
  const [category, setCategory] = useState("");
  const [itemspec, setItemspec] = useState("");
  const [itemid, setItemid] = useState("123434343");
  const [watchlist, setWatchlist] = useState([]);
  const url = `https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=KarimZit-TestKey-PRD-83882c164-20d40dd0&RESPONSE-DATA-FORMAT=JSON${category}&REST-PAYLOAD&keywords=${search}&itemFilter.name=MaxPrice&itemFilter.value=1000.00&itemFilter.paramName=Currency&itemFilter.paramValue=USD&outputSelector(0)=SellerInfo&outputSelector(1)=CategoryHistogram&descriptionSearch=true&paginationInput.entriesPerPage=55`;
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      res.json().then(data => setProduct(data.findItemsAdvancedResponse));
    }
    fetchData();
    console.log(product);
  }, [search, category]);
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const itemFetch = async item => {
    await setItemid(item);
    await console.log("joe", itemspec);
    console.log(watchlist);

    const singleurl = `https://open.api.ebay.com/shopping?callname=GetSingleItem&responseencoding=JSON&appid=KarimZit-TestKey-PRD-83882c164-20d40dd0&siteid=0&version=967&ItemID=${item}&IncludeSelector=Description,ItemSpecifics,ShippingCosts,Details,Variations`;

    Promise.resolve(
      fetch(singleurl)
        .then(response => response.json())
        .then(data => setItemspec(data))
    );
  };

  function onSubmit(item, cat) {
    setSearch(item);
    setCategory(cat);
    console.log(cat + "Category");
  }

  function onClick(item) {
    setCategory(item);

    console.log(category);
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
        setItemspec
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
