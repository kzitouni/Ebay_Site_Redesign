import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import swal from "sweetalert";
import { Context } from "./Context";
const LandingPage = () => {
  const { onSubmit } = useContext(Context);
  const [search, setSearch] = useState("");
  const [border, setBorder] = useState({});
  const onPress = () => {
    if (search == "") {
      setBorder({ border: "1px solid rgba(255, 66, 66, 1)" });
    } else if (search.length == 1) {
      swal("Try Again", "Searches must be longer than 1 character", "error");
    } else {
      onSubmit(search, "");
      setBorder({});
    }
  };
  return (
    <div className="LandingPage_Cont">
      <div
        id="Land_Image"
        style={{
          backgroundImage: `url(${"https://cdn.thegentlemansjournal.com/wp-content/uploads/2017/08/header-how-to-organise-your-desk-reorganise-desktop-office-efficient-efficiency-900x600-c-center.jpg"})`
        }}
      >
        <div id="dark_over" />
        <img
          src="https://1000logos.net/wp-content/uploads/2018/08/eBay-Logo.png"
          className="Ebay_Logo_Land"
        />
        <div id="Landing_Text">
          <h1>Find whatever you need</h1>
          <p>Search through our vast collection of products</p>
        </div>
        <div className="Landing_Input">
          <input
            placeholder="Search"
            style={border}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Link
            onClick={() => onPress()}
            to={search.length > 1 ? "/search" : "/"}
          >
            <IoIosSearch size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
