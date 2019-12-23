import React, { useState, useContext } from "react";
import SearchResult from "./SearchResult";
import { Context } from "../Context";

const Result = () => {
  const { product } = useContext(Context);
  const Elements = product.map(item =>
    item.paginationOutput[0].totalEntries[0] != "0" ? (
      <div>
        {item.searchResult[0].item.map(t => (
          <SearchResult
            index={t.itemId}
            item={t.galleryURL}
            title={t.title}
            itemId={t.itemId}
            subtitle={t.subtitle}
            conditionDisplayName={
              t.condition == undefined
                ? null
                : t.condition[0].conditionDisplayName[0]
            }
            shipping={t.shippingInfo[0].shippingType[0]}
            shippingcost={t.shippingInfo[0].shippingType[0]}
            price={t.sellingStatus[0].currentPrice[0].__value__}
            endtime={t.sellingStatus[0].timeLeft}
            buyitnow={
              t.listingInfo[0].buyItNowPrice != undefined
                ? t.listingInfo[0].buyItNowPrice[0].__value__
                : null
            }
            listingtype={t.listingInfo[0].listingType[0]}
          />
        ))}
      </div>
    ) : (
      <h1>No matches found for that search</h1>
    )
  );

  return <div>{product != "" ? Elements : null}</div>;
};

export default Result;
