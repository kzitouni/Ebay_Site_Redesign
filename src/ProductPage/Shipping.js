import React, { useContext } from "react";
import {
  FaCcPaypal,
  FaCcVisa,
  FaCcDiscover,
  FaCcMastercard
} from "react-icons/fa";
import { Context } from "../Context";
import ReturnPolicy from "./ReturnPolicy";
const Shipping = () => {
  const { itemspec } = useContext(Context);
  return (
    <div className="Item_Spec_Container">
      <div className="Item_Ship_Container1">
        <h1 className="Desc_Titles">Shipping & Handling</h1>
        <div style={{ display: "block" }} className="Spec_Box">
          <div className="Left_Box"></div>
          <div className="Shipping_Bar">
            <div className="Shipping_Bar_Text_Cont">
              <p className="Shipping_Bar_Title">Shipping Cost</p>
            </div>
            <div className="Shipping_Bar_Text_Cont">
              <p className="Shipping_Bar_Title">Ships To</p>
            </div>
            <div className="Shipping_Bar_Text_Cont">
              <p className="Shipping_Bar_Title">Shipping Service</p>
            </div>
            <div className="Shipping_Bar_Text_Cont">
              <p className="Shipping_Bar_Title">Taxes</p>
            </div>
          </div>
          <div className="Shipping_Bar_Answer">
            <div className="Shipping_Bar_Text_Cont">
              <p className="Shipping_Bar_Text" style={{ width: "100%" }}>
                {itemspec != "x"
                  ? itemspec.Item.ShippingCostSummary.ShippingType ==
                    "Calculated"
                    ? "Calculated at Checkout"
                    : "$" +
                      itemspec.Item.ShippingCostSummary.ShippingServiceCost
                        .Value
                  : null}
              </p>
            </div>
            <div className="Shipping_Bar_Text_Cont">
              <p className="Shipping_Bar_Text">WorldWide</p>
            </div>
            <div className="Shipping_Bar_Text_Cont">
              <p className="Shipping_Bar_Text">
                {itemspec != "x"
                  ? itemspec.Item.ShippingCostSummary.ShippingType ==
                    "Calculated"
                    ? "Did not Specify"
                    : itemspec.Item.ShippingCostSummary.ShippingType
                  : null}
              </p>
            </div>
            <div className="Shipping_Bar_Text_Cont">
              <p className="Shipping_Bar_Text">Taxes may apply</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "28.9px" }}></div>
      <ReturnPolicy />
      <div style={{ height: "28.9px" }}></div>
      <div className="Payment_Cont">
        <h1 className="Desc_Titles">Payment Details</h1>
        <div style={{ display: "block" }} className="Spec_Box">
          <div className="Shipping_Bar">
            <div className="Payment_Bar_Text_Cont">
              <p className="Payment_Bar_Title" style={{ textAlign: "center" }}>
                Payment Methods
              </p>
            </div>
          </div>
          <div>
            <div className="Payment_Bar_Text_Cont">
              <p className="Payment_Bar_Text" style={{ textAlign: "center" }}>
                <FaCcPaypal className="Payment_Icon" size={18} />{" "}
                <FaCcVisa className="Payment_Icon" size={18} />{" "}
                <FaCcMastercard className="Payment_Icon" size={18} />{" "}
                <FaCcDiscover className="Payment_Icon" size={18} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
