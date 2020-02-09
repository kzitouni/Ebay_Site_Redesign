import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import { MdDeleteForever } from "react-icons/md";

const WatchList = item => {
  const { itemFetch, watchlist, itemspec } = useContext(Context);
  let endingTime = item.endtime.toString();
  let endingTime1 =
    endingTime.lastIndexOf("D") == -1
      ? "0"
      : endingTime.substring(
          endingTime.lastIndexOf("P") + 1,
          endingTime.lastIndexOf("D")
        );
  let endingTime2 =
    endingTime.lastIndexOf("H") == -1
      ? "0"
      : endingTime.substring(
          endingTime.lastIndexOf("T") + 1,
          endingTime.lastIndexOf("H")
        );
  let endingTime3 =
    endingTime.lastIndexOf("H") == -1
      ? endingTime.substring(
          endingTime.lastIndexOf("T") + 1,
          endingTime.lastIndexOf("M")
        )
      : endingTime.substring(
          endingTime.lastIndexOf("H") + 1,
          endingTime.lastIndexOf("M")
        );
  const [deleted, setDeleted] = useState(true);
  const deleteitem = () => {
    let ind = watchlist
      .map(item => {
        return item.itemid;
      })
      .indexOf(item.itemid);
    watchlist.splice(ind, 1);
    setDeleted(false);
  };
  return (
    <div>
      {deleted ? (
        <div>
          <div style={{ display: "flex", marginBottom: "2rem" }}>
            <div className="Trash_Container">
              <button
                onClick={() => deleteitem()}
                style={{ backgroundColor: "#a3cb47", border: "none" }}
              >
                <MdDeleteForever style={{ fontSize: "20px", color: "white" }} />
              </button>
            </div>
            <div className="Image_Cont">
              <div
                className="SearchImages"
                style={{ backgroundImage: `url(${item.picture})` }}
              ></div>
              <div className="Sub_Info_Cont">
                <Link to={`/product${item.itemid}`}>
                  <p
                    onClick={() => itemFetch(item.itemid)}
                    className="Sub_Info_Title"
                  >
                    {item.title}
                  </p>
                </Link>
                <p className="Sub_Info_Subtitle">{item.condition}</p>
                <div className="Left_Search">
                  <div className="Sub_Info_Price_Cont">
                    <p className="Sub_Info_Price">${item.price}</p>
                    <p className="Sub_Info_ShippText">+ Shipping</p>
                    <p className="Sub_Info_Type">
                      {item.listingtype == "AuctionWithBIN"
                        ? "Buy It Now + Auction"
                        : item.listingtype == "FixedPrice" || "StoreInventory"
                        ? "Buy It Now"
                        : null}
                    </p>
                  </div>

                  <div className="Ends_Container">
                    <h1>
                      {endingTime1}d {endingTime2}h {endingTime3}M left
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ marginTop: "25px" }} />
        </div>
      ) : null}
    </div>
  );
};


export default WatchList;
