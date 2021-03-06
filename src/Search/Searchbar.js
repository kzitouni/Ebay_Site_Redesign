import React, { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import { IoMdEye } from "react-icons/io";
import swal from "sweetalert";
import CategoriesData from "./Categories/CategoriesData";
const Searchbar = () => {
  const { onSubmit } = useContext(Context);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [border, setBorder] = useState({});

  const onPress = () => {
    if (search == "") {
      setBorder({ borderBottom: "1px solid rgba(255, 66, 66, 1)" });
    } else if (search.length == 1) {
      swal("Try Again", "Searches must be longer than 1 character", "error");
    } else {
      onSubmit(search, category);
      setBorder({});
    }
  };
  const newarr = CategoriesData.GetCategoryInfoResponse.map((item, i) => {
    return (
      <option
       key={i} value={item.CategoryID == "" ? "" : item.CategoryID}
      >
        {item.CategoryNamePath}
      </option>
    );
  });
  const handleChange = e => {
    setCategory(e.target.value);
  };
  return (
    <header className="Header">
      <Link to={`/search`}>
        <img
          src="https://1000logos.net/wp-content/uploads/2018/08/eBay-Logo.png"
          className="Ebay_Logo"
        />
      </Link>
      <div className="Header_Space"></div>
      <div className="Header_Search">
        <input
          className="InputBar"
          style={border}
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search"
        />
        <select
          className="Category_Select"
          name={category}
          onChange={handleChange}
        >
          {newarr}
        </select>
        <Link to={`/search`}>
          <button onClick={() => onPress()} className="Search_Button">
            <div className="Search_Container">
              <IoIosSearch size={25} className="Search_Icon" />
            </div>
          </button>
        </Link>
      </div>
      <div className="Watch_Container">
        <Link to="/watchlist" style={{ textDecoration: "none" }}>
          <IoMdEye size={20} className="Watch_Eye" />
          <p className="WatchList_Header">Watch List</p>
        </Link>
      </div>
    </header>
  );
};

export default Searchbar;
