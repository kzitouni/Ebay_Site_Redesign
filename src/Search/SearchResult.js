import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
const SearchResult = item => {
  const { itemFetch, setItemspec } = useContext(Context);
  let endingTime = item.endtime.toString();
  let endingTime1 = endingTime.substring(
    endingTime.lastIndexOf("P") + 1,
    endingTime.lastIndexOf("D")
  );
  let endingTime2 = endingTime.substring(
    endingTime.lastIndexOf("T") + 1,
    endingTime.lastIndexOf("H")
  );
  let endingTime3 = endingTime.substring(
    endingTime.lastIndexOf("H") + 1,
    endingTime.lastIndexOf("M")
  );
  useEffect(() => {
    setItemspec("");
  });
  console.log(endingTime1);
  console.log(item.buyitnow, "ayyy");
  return (
    <div style={{ marginBottom: "25px" }}>
      <div className="Image_Cont">
        <div
          className="SearchImages"
          style={{ backgroundImage: `url(${item.item})` }}
        ></div>
        <div className="Sub_Info_Cont">
          <Link to={`/product${item.itemId}`}>
            {" "}
            <p
              onClick={() => itemFetch(item.itemId)}
              className="Sub_Info_Title"
            >
              {item.title}
            </p>{" "}
          </Link>
          <p className="Sub_Info_Subtitle">{item.conditionDisplayName}</p>
          <div className="Left_Search">
            <div className="Sub_Info_Price_Cont">
              {item.buyitnow != null ? (
                <div>
                  <p className="Sub_Info_Price">
                    $
                    {item.buyitnow.toString().indexOf(".") != -1
                      ? item.buyitnow.split(".")[1].length < 2
                        ? item.buyitnow.concat("0")
                        : item.buyitnow
                      : item.buyitnow.concat(".00")}{" "}
                  </p>
                  <p className="Sub_Info_BuyText">Buy It Now</p>
                </div>
              ) : null}
              <p className="Sub_Info_Price">
                $
                {item.price.split(".")[1].length < 2
                  ? item.price.concat("0")
                  : item.price}
              </p>
              <p className="Sub_Info_ShippText">
                + {item.shipping == "Free" ? "Free" : item.shippingcost}{" "}
                Shipping
              </p>
              {item.listingtype == "Auction" ? (
                <p className="Sub_Info_Type">Auction</p>
              ) : item.listingtype == "AuctionWithBIN" ? (
                <p className="Sub_Info_Type">Buy It Now + Auction</p>
              ) : item.listingtype == "FixedPrice" || "StoreInventory" ? (
                <p className="Sub_Info_Type">Buy It Now</p>
              ) : null}
            </div>
            <div className="Ends_Container">
              <h1>
                {endingTime1}d {endingTime2}h {endingTime3}M left
              </h1>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "25px" }} />
    </div>
  );
};

export default SearchResult;
