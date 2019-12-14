import React, {useContext, useState} from 'react'
import {Context} from './Context'
import {IoIosTimer, IoMdEye, IoMdCheckmark, IoIosAirplane, IoIosStar} from "react-icons/io";
import {FaDollarSign, FaRegCalendarAlt, FaEbay, FaFlagUsa} from 'react-icons/fa'
import {FiPackage} from 'react-icons/fi'
import {AiOutlineShoppingCart} from "react-icons/ai";
import BuyBox from './ProductPage/BuyBox'
import AuctionBox from './ProductPage/AuctionBox'
import AuctionBuyBox from './ProductPage/AuctionBuyBox'
import renderHTML from 'react-render-html';
const ProductPage = (item) => {
const {product, itemspec} = useContext(Context)
const date = new Date()
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(product)
let endingTime = (itemspec != "") ? itemspec.Item.TimeLeft.toString() : null
let endingTime1 = (itemspec != "") ?  (endingTime.lastIndexOf("D") == -1 ? "0" :  endingTime.substring(
    endingTime.lastIndexOf("P") + 1, 
    endingTime.lastIndexOf("D"))) : null
let endingTime2 = (itemspec != "") ?  (endingTime.lastIndexOf("H") == -1 ? "0" : endingTime.substring(
    endingTime.lastIndexOf("T") + 1, 
    endingTime.lastIndexOf("H"))) : null
let endingTime3 = (itemspec != "") ? (endingTime.lastIndexOf("H") == -1 ? endingTime.substring(
    endingTime.lastIndexOf("T") + 1, 
    endingTime.lastIndexOf("M")) : endingTime.substring(
    endingTime.lastIndexOf("H") + 1, 
    endingTime.lastIndexOf("M"))) : null
    return (
        <div>
           <hr className="ProductPage_HR" />
           <div style={{display:'flex'}}>
               <div className="Title_Section_Cont" >
            <div className="Title_Container">
    <h1 className="ProductPageTitle">  {(itemspec != "") ? itemspec.Item.Title : null}</h1>
      
        </div>
        <div className="Icon_Container">
        <IoMdEye size={15} className="Eye" /> <h6 className="Eye_Style"> {(itemspec != "") ? itemspec.Item.Watching : null} watching</h6>
        <IoIosTimer size={15} className="Time"  />  <h6 className="Timer_Style"> {endingTime1}d {endingTime2}h {endingTime3}M left</h6>
        </div>

           </div>
           <div className="Seller_Container">
            <div style={{display:'flex'}}>
            <p className="Seller_Text" >{(itemspec != "") ? itemspec.Item.Seller.UserID : null} </p>
            {(itemspec != "") ? (itemspec.Item.Seller.TopRatedSeller ? 
            <div style={{marginLeft:'10.24px'}}>
            <IoIosStar className="Star_Icon"></IoIosStar>
            <p className="Top_Seller_Text">Top Seller</p>
            </div> : null)
 : null}
            </div>
                <div className="Seller_Container_div">
            <div className="Rating_Bar"> 
                <div className="Rating_Bar_div" style={{width :(itemspec != "") ? itemspec.Item.Seller.PositiveFeedbackPercent+"%" : null}}></div>
                
            </div>
            <p className="Rating_Text" > {(itemspec != "") ? itemspec.Item.Seller.PositiveFeedbackPercent : null}%</p>
                </div>
            
        </div>
        </div>
        {(itemspec != "") ? (itemspec.Item.ListingType == "FixedPriceItem" ? <BuyBox /> : itemspec.Item.ListingType == "Chinese" && itemspec.Item.BuyItNowPrice == undefined ? <AuctionBox /> : itemspec.Item.ListingType == "Chinese" ? <AuctionBuyBox /> : itemspec.Item.ListingType == "Auction" ? <AuctionBox /> : <AuctionBuyBox />)  : null}
        </div>
    )
}

export default ProductPage