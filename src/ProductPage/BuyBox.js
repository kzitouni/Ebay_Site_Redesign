import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import {
  IoMdEye,
  IoMdCheckmark,
} from "react-icons/io";
import { FiPackage } from "react-icons/fi";
import { GiCardboardBox } from "react-icons/gi";
import Slider from "./ImageSlider/Slider";
import ProductIcons from "./ProductIcons";
import swal from "sweetalert";
const BuyBox = item => {
  const { itemspec, watchlist } = useContext(
    Context
  );
  const [watchingItems, setWatchingItems] = useState();
  const box = (itemspec != "" && itemspec.Item.ConditionDisplayName != undefined ? (
    itemspec.Item.ConditionDisplayName.toLowerCase().indexOf("new") !=
    -1 ? (
      <p>
        {" "}
        <FiPackage style={{ marginRight: "10px" }} />
        {itemspec.Item.ConditionDisplayName}{" "}
      </p>
    ) : (
      <p>
        {" "}
        <GiCardboardBox style={{ marginRight: "10px" }} />{" "}
        {itemspec.Item.ConditionDisplayName}{" "}
      </p>
    )
  ) : null)
  const price = (
    itemspec != ""
      ? itemspec.Item.ConvertedCurrentPrice.Value.toString().indexOf(".") != -1
        ? itemspec.Item.ConvertedCurrentPrice.Value.toString().split(".")[1]
            .length < 2
          ? itemspec.Item.ConvertedCurrentPrice.Value.toString().concat("0")
          : itemspec.Item.ConvertedCurrentPrice.Value
        : itemspec.Item.ConvertedCurrentPrice.Value.toString().concat(".00")
      : null
  );
  const quantity = (
    itemspec != ""
      ? itemspec.Item.Quantity == undefined
        ? null
        : itemspec.Item.Quantity
      : null
  );

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
  const found = () =>
    watchlist.some(item => item.itemid == itemspec.Item.ItemID);

  let ind = watchlist
    .map(item => {
      return item.itemid;
    })
let indy = ind.indexOf(itemspec.Item.ItemID)
    // indexOf(watchlist);
  const pushtoWatch = () =>{
      console.log(watchlist)
    found() == false
      ? watchlist.push(pushitems) && setWatchingItems(found())
      : watchlist.splice(indy, 1) && setWatchingItems(found());
}
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
        <div className="Quantity_Container">
          <h1 className="Quantity_Text">Quantity: {quantity}</h1>
        </div>
        <div className="Buy_Container">
          <div className="Price_Container">
            <div style={{ textAlign: "center", marginTop: "-1rem" }}>
              <h1 className="Price">
                $
                {price}{" "}
              </h1>
            </div>
            <div>
              <h3 className="Price_Text">Price</h3>
            </div>
            <button
              className="Image_Button"
              onClick={() =>
                swal("Woot!", "You have purchased this item!", "success")
              }
            >
              <div className="Purchase_Container">
                <div className="Purchase_Left_Container">
                  <div style={{ minHeight: "24.48px", minWidth: "23.7px" }}>
                    <IoMdCheckmark className="Check_Box" />
                  </div>
                </div>
                <div className="Purchase_Right_Container">
                  <h1 className="Buy_Now_Text">Buy Now</h1>
                </div>
              </div>
            </button>
          </div>

          <div className="Price_Right_Container">
            <button
              className="Add_To"
              onClick={() => {
                pushtoWatch();
              }}
            >
              <div className="Purchase_Eye_Icon">
                <h1
                  className="Watch_Item_Text"
                  style={{ color: watchingItems ? "#a3cb47" : "grey" }}
                >
                  <IoMdEye size={10} style={{ marginRight: "5px" }} />
                  {watchingItems === false ? "Watch Item" : "Watching"}
                </h1>
              </div>
            </button>
          </div>
        </div>
        <ProductIcons />
      </div>
    </div>
  );
};

export default BuyBox;
