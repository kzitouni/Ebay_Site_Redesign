import React, { useContext, useState } from "react";
import { Context } from "../Context";
import Render from "react-render-html";
const ItemSpecifics = () => {
  const { itemspec } = useContext(Context);
  return (
    <div className="Item_Spec_Container">
      <div className="Item_Spec_Container1">
        <h1>Item Specifics</h1>
        <div className="Spec_Box">
          {itemspec.Item.ItemSpecifics == undefined
            ? null
            : itemspec.Item.ItemSpecifics.NameValueList == undefined
            ? null
            : itemspec.Item.ItemSpecifics.NameValueList.map((item, i) => (
                <p
                  key={i}
                  style={{ gridArea: "inherit" }}
                  className="Right_Spec_Cont_Text"
                >
                  <p style={{ fontWeight: "bold" }}>{item.Name}:</p>{" "}
                  {item.Value}
                </p>
              ))}
        </div>
      </div>
      <div className="About_Cont">
        <h1 className="About_Title">About This Product</h1>
        <div className="About_Section">
          <p>{itemspec != "x" ? Render(itemspec.Item.Description) : null}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemSpecifics;
