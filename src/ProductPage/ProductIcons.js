import React, { useContext } from "react";
import {
  IoIosAirplane
} from "react-icons/io";
import {
  FaRegCalendarAlt,
  FaEbay,
  FaFlagUsa
} from "react-icons/fa";
import { Context } from "../Context";
const ProductIcons = item => {
  const { itemspec } = useContext(
    Context
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
  let today = months[date.getMonth()];
  return (
    <div className="Icon_Set_Cont">
      <div className="Icon_Split">
      <div className="Icon_Cont">
        <div className="Circle_Under_Buy">
          <div>
            <IoIosAirplane className="Plane_Color" />
          </div>
        </div>
        <p className="Shipping_Text">
          {itemspec != "x"
            ? itemspec.Item.ShippingCostSummary.ShippingType
            : null}{" "}
          Service
        </p>
        <p className="Shipping_Text_Under">Shipping Service</p>
      </div>
      <div className="Icon_Cont">
        <div className="Circle_Under_Buy">
          <div>
            <FaRegCalendarAlt className="Calendar" />
          </div>
        </div>
        <p className="Shipping_Text">
          Item Ships ({today}{" "}
          {itemspec != "x" ? date.getDate() + itemspec.Item.HandlingTime : null})
        </p>
        <p className="Shipping_Text_Under">
          {itemspec != "x" ? itemspec.Item.HandlingTime : null} Day Handling
        </p>
      </div>
      </div>
<div className="Icon_Split">
      <div className="Icon_Cont">
        <div className="Circle_Under_Buy">
          <div>
            <FaFlagUsa className="USA_Text" />
          </div>
        </div>
        <p className="Shipping_Text">
          {itemspec != "x" ? itemspec.Item.Location : null}
        </p>
        <p className="Shipping_Text_Under">Item Location</p>
      </div>
      <div className="Icon_Cont">
        <div className="Circle_Under_Buy">
          <div>
            <FaEbay className="Plane_Color" />
          </div>
        </div>
        <p className="Shipping_Text">Ebay Money Back</p>
        <p className="Shipping_Text_Under">60 Day Guarantee</p>
      </div>
</div>
    </div>
  );
};

export default ProductIcons;
