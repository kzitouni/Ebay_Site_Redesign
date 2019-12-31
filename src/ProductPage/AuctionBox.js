import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import {
  IoMdEye,
} from "react-icons/io";
import {
  FaDollarSign,
} from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { GiCardboardBox } from "react-icons/gi";
import Slider from "./ImageSlider/Slider";
import ProductIcons from "./ProductIcons";
const AuctionBox = item => {
  const { itemspec, watchlist } = useContext(
    Context
  );
  const [watchingItems, setWatchingItems] = useState();
  const [bid, setBid] = useState();
  const [price, setPrice] = useState(
    itemspec != ""
      ? itemspec.Item.ConvertedCurrentPrice.Value.toString().indexOf(".") != -1
        ? itemspec.Item.ConvertedCurrentPrice.Value.toString().split(".")[1]
            .length < 2
          ? itemspec.Item.ConvertedCurrentPrice.Value.toString().concat("0")
          : itemspec.Item.ConvertedCurrentPrice.Value
        : itemspec.Item.ConvertedCurrentPrice.Value.toString().concat(".00")
      : null
  );
  const box = (itemspec != "" &&
  itemspec.Item.ConditionDisplayName.toLowerCase().indexOf("new") !=
    -1 ? (
    <p>
      {" "}
      <FiPackage style={{ marginRight: "12.8px" }} />
      {itemspec != "" ? itemspec.Item.ConditionDisplayName : null}
    </p>
  ) : itemspec != "" &&
    itemspec.Item.ConditionDisplayName.toLowerCase().indexOf("new") ==
      -1 ? (
    <p>
      {" "}
      <GiCardboardBox style={{ marginRight: "12.8px" }} />
      {itemspec != "" ? itemspec.Item.ConditionDisplayName : null}
    </p>
  ) : null)
  const [border, setBorder] = useState("red red #a3cb47 red");
  const [borderwidth, setBorderwidth] = useState("0px 0px 1px 0px");
  const found = () => watchlist.some(item => item.itemid == itemspec.Item.ItemID);

  const pushitems = {
    title: itemspec.Item.Title,
    itemid: itemspec.Item.ItemID,
    price:
      itemspec.Item.ConvertedCurrentPrice.Value.toString().indexOf(".") != -1
        ? itemspec.Item.ConvertedCurrentPrice.Value.toString().split(".")[1]
            .length < 2
          ? itemspec.Item.ConvertedCurrentPrice.Value.toString().concat("0")
          : itemspec.Item.ConvertedCurrentPrice.Value
        : itemspec.Item.ConvertedCurrentPrice.Value.toString().concat(".00"),
    buyitnow: itemspec.Item.BuyItNowAvailable,
    BINPrice: itemspec.Item.BuyItNowAvailable
      ? itemspec.Item.ConvertedBuyItNowPrice.Value
      : null,
    CurrPrice: itemspec.Item.ConvertedCurrentPrice.Value,
    timeleft: itemspec.Item.TimeLeft,
    picture: itemspec.Item.PictureURL[0],
    listingtype: itemspec.Item.ListingType,
    condition: itemspec.Item.ConditionDisplayName
  };
  let outline = {
    borderColor: border,
    borderWidth: borderwidth,
    borderStyle: "solid"
  };
  const handleInput = event => {
    setBid(event.target.value);
    console.log(bid);
  };

  const handleBid = () => {
    if (Number(bid) > Number(price)) {
      setPrice(bid);
      setBorderwidth("0px 0px 1px 0px");
      setBorder("red red #a3cb47 red");
    } else {
      setBorderwidth("1px 1px 1px 1px");
      setBorder("red");
    }
  };

  let ind = watchlist
  .map((item) => {
    return item.itemid;
  })
let indy = ind.indexOf(itemspec.Item.ItemID)
  const pushtoWatch = () =>
    found() == false
      ? watchlist.push(pushitems) && setWatchingItems(found())
      : watchlist.splice(indy, 1) && setWatchingItems(found());

  useEffect(() => {
    setWatchingItems(found());
  }, []);
  return (
    <div className="Product_Container">
      <div className="Title_Left_Cont">
        <Slider />
      </div>
      <div className="Product_Info">
        <hr className="Product_Right_HR" />
        <div className="Condition_Container">
          {box}
        </div>

        <div className="Buy_Container">
          <div className="Price_Container">
            <div style={{ textAlign: "center", marginTop: "-1rem" }}>
              <h1 className="Price">${price} </h1>
            </div>
            <div>
              <h3 className="Price_Text">Current Bid</h3>
            </div>
            <div className="Purchase_Container">
              <div className="Purchase_Left_Auction_Container">
                <div>
                  <FaDollarSign className="Auction_Dollar_Box" />
                </div>
              </div>
              <div>
                <input
                  className="Auction_Input"
                  style={outline}
                  type="number"
                  placeholder="Enter your bid"
                  onChange={handleInput}
                />
              </div>
            </div>
            <p className="Under_Bid_Text">Bid Must be Greater than ${price}</p>
          </div>
          <div className="Price_Right_Auction_Container">
            <button className="Add_To" onClick={() => pushtoWatch()}>
              <div className="Purchase_Eye_Icon">
                <h1
                  className="Watch_Item_Text"
                  style={{ color: watchingItems ? "#a3cb47" : "grey" }}
                >
                  <IoMdEye size={10} style={{ marginRight: ".5vw" }} />
                  {watchingItems === false ? "Watch Item" : "Watching"}
                </h1>
              </div>
            </button>
            <p className="Bids_Text">
              {itemspec != "" ? itemspec.Item.BidCount : null} bids
            </p>
            <button className="Bid_Button" onClick={() => handleBid()}>
              Place Bid
            </button>
          </div>
        </div>
        <ProductIcons />
      </div>
    </div>
  );
};

export default AuctionBox;
