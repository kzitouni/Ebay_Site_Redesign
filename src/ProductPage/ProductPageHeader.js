import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import { IoIosTimer, IoIosStar } from "react-icons/io";
import BuyBox from "./BuyBox";
import AuctionBox from "./AuctionBox";
import AuctionBuyBox from "./AuctionBuyBox";
import Description from "./Description";
import ReactLoading from "react-loading";
import { SampleData } from "../SampleData";

const ProductPage = item => {
  const { product, itemspec, setItemspec } = useContext(Context);
  const [load, setLoad] = useState(
    <div
      style={{ display: "grid", justifyContent: "center", marginTop: "90px" }}
    >
      <ReactLoading type={"bars"} color={"#a3cb47"} />
    </div>
  );
  const date = new Date();
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  useEffect(() => {
    setLoad(
      <div
        style={{ display: "grid", justifyContent: "center", marginTop: "90px" }}
      >
        <ReactLoading type={"bars"} color={"#a3cb47"} />
      </div>
    );
    const timer = setTimeout(() => {
      setLoad(
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            marginTop: "90px"
          }}
        >
          <h1 style={{ color: "#a3cb47" }}>
            Dang we could not get the results for that search. Please go back
            and try again
          </h1>
        </div>
      );
      if (itemspec.Ack == "Failure" || itemspec == "x") {
        setItemspec(SampleData);
      }
    }, [6000]);
    return () => clearTimeout(timer);
  }, [itemspec]);

  let endingTime = itemspec != "x" ? itemspec.Item.TimeLeft.toString() : null;
  let endingTime1 =
    itemspec != "x"
      ? endingTime.lastIndexOf("D") == -1
        ? "0"
        : endingTime.substring(
            endingTime.lastIndexOf("P") + 1,
            endingTime.lastIndexOf("D")
          )
      : null;
  let endingTime2 =
    itemspec != "x"
      ? endingTime.lastIndexOf("H") == -1
        ? "0"
        : endingTime.substring(
            endingTime.lastIndexOf("T") + 1,
            endingTime.lastIndexOf("H")
          )
      : null;
  let endingTime3 =
    itemspec != "x"
      ? endingTime.lastIndexOf("H") == -1
        ? endingTime.substring(
            endingTime.lastIndexOf("T") + 1,
            endingTime.lastIndexOf("M")
          )
        : endingTime.lastIndexOf("M") == -1
        ? "0"
        : endingTime.substring(
            endingTime.lastIndexOf("H") + 1,
            endingTime.lastIndexOf("M")
          )
      : null;

  return itemspec == "x" ? (
    load
  ) : (
    <div>
      <hr className="ProductPage_HR" />
      <div style={{ display: "flex" }}>
        <div className="Title_Section_Cont">
          <div className="Title_Container">
            <h1 className="ProductPageTitle">
              {" "}
              {itemspec != "x" ? itemspec.Item.Title : null}
            </h1>
          </div>
          <div className="Icon_Container">
            <IoIosTimer size={15} className="Eye" />{" "}
            <h6 className="Timer_Style">
              {" "}
              {endingTime1}d {endingTime2}h {endingTime3}M left
            </h6>
          </div>
        </div>
        <div
          className="Seller_Container"
          style={{
            marginLeft:
              itemspec != "x"
                ? itemspec.Item.PictureURL == undefined
                  ? null
                  : itemspec.Item.PictureURL.length > 1
                  ? "3.5vw"
                  : null
                : null
          }}
        >
          <div style={{ display: "flex" }}>
            <p className="Seller_Text">
              {itemspec != "x" ? itemspec.Item.Seller.UserID : null}{" "}
            </p>
            {itemspec != "x" ? (
              itemspec.Item.Seller.TopRatedSeller ? (
                <div style={{ marginLeft: "10.24px" }}>
                  <IoIosStar className="Star_Icon"></IoIosStar>
                  <p className="Top_Seller_Text">Top Seller</p>
                </div>
              ) : null
            ) : null}
          </div>
          <div className="Seller_Container_div">
            <div className="Rating_Bar">
              <div
                className="Rating_Bar_div"
                style={{
                  width:
                    itemspec != "x"
                      ? itemspec.Item.Seller.PositiveFeedbackPercent + "%"
                      : null
                }}
              ></div>
            </div>
            <p className="Rating_Text">
              {" "}
              {itemspec != "x"
                ? itemspec.Item.Seller.PositiveFeedbackPercent
                : null}
              %
            </p>
          </div>
        </div>
      </div>
      {itemspec != "x" ? (
        itemspec.Item.ListingType == "FixedPriceItem" ? (
          <BuyBox />
        ) : itemspec.Item.ListingType == "Chinese" &&
          itemspec.Item.BuyItNowPrice == undefined ? (
          <AuctionBox />
        ) : itemspec.Item.ListingType == "Chinese" ? (
          <AuctionBuyBox />
        ) : itemspec.Item.ListingType == "Auction" ? (
          <AuctionBox />
        ) : (
          <AuctionBuyBox />
        )
      ) : null}
      <hr className="Product_Bottom_HR" />
      <Description />
    </div>
  );
};

export default ProductPage;
