import React, {useContext, useState, useEffect} from 'react'
import {Context} from '../Context'
import {IoIosTimer, IoMdEye, IoMdCheckmark, IoIosAirplane} from "react-icons/io";
import {FaDollarSign, FaRegCalendarAlt, FaEbay, FaFlagUsa} from 'react-icons/fa'
import {FiPackage} from 'react-icons/fi'
import {GiCardboardBox} from 'react-icons/gi'
import {AiOutlineShoppingCart} from "react-icons/ai";
import Slider from './ImageSlider/Slider'
const AuctionBox = (item) => {
    
    const {product, itemspec, watchlist, setWatchlist, savedlist} = useContext(Context)
    const [watchingItems, setWatchingItems] = useState()
let ind =  watchlist.map((item) => {return item.itemid}).indexOf(item.itemid)
const found = () => watchlist.some(item => ( item.itemid == itemspec.Item.ItemID))

const pushitems = {
    title: itemspec.Item.Title, 
    itemid: itemspec.Item.ItemID, 
    price: ((itemspec.Item.ConvertedCurrentPrice.Value).toString().indexOf(".") != -1 ? ((itemspec.Item.ConvertedCurrentPrice.Value).toString().split(".")[1].length < 2 ? (itemspec.Item.ConvertedCurrentPrice.Value.toString().concat("0")) : itemspec.Item.ConvertedCurrentPrice.Value ) : (itemspec.Item.ConvertedCurrentPrice.Value.toString().concat(".00"))) ,
    buyitnow: itemspec.Item.BuyItNowAvailable, BINPrice: (itemspec.Item.BuyItNowAvailable) ? itemspec.Item.ConvertedBuyItNowPrice.Value : null, 
    CurrPrice: itemspec.Item.ConvertedCurrentPrice.Value, timeleft: itemspec.Item.TimeLeft,
    picture: itemspec.Item.PictureURL[0], listingtype: itemspec.Item.ListingType,
    condition: itemspec.Item.ConditionDisplayName
}
const pushtoWatch = () => (
    
    (found() == false) ? watchlist.push(pushitems) && setWatchingItems(found()) : watchlist.splice(ind, 1) && setWatchingItems(found())
    )

    useEffect( () => { 
        setWatchingItems(found())
    })
const date = new Date()
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let today = months[date.getMonth()]
return (
<div className="Product_Container">
    <Slider />
<div className="ProductPage_Image_Container" style={{backgroundImage: (itemspec != "") ? `url(${itemspec.Item.PictureURL[0]})` : null}}>
</div>
<div style={{backgroundColor:'black', width:"10vw", height:"3vh"}}>
</div>
<div className="Product_Info"> 
<hr className="Product_Right_HR" />
<div className="Condition_Container">


{(itemspec != "" && (itemspec.Item.ConditionDisplayName.toLowerCase().indexOf("new") != -1) ) ? <p>  <FiPackage style={{marginRight:'1vw'}} />{(itemspec != "") ? itemspec.Item.ConditionDisplayName : null}</p>
 : (itemspec != "" && (itemspec.Item.ConditionDisplayName.toLowerCase().indexOf("new") == -1) ) ? <p>  <GiCardboardBox style={{marginRight:'1vw'}} />{(itemspec != "") ? itemspec.Item.ConditionDisplayName : null}</p> : null}

</div>

    <div className="Buy_Container">
        <div className="Price_Container">
            <div style={{textAlign:'center', marginTop: '-1rem'}}>
            <h1 className="Price">${ (itemspec != "") ? itemspec.Item.CurrentPrice.Value : null}  </h1>
            </div>
            <div >
            <h3 className="Price_Text">Current Bid</h3>
            </div>
            <div className="Purchase_Container">
                <div className="Purchase_Left_Auction_Container">
                    <div>
                    <FaDollarSign className="Auction_Dollar_Box" />
                    </div>
                </div>
                <div >
                   <input className="Auction_Input" placeholder="Enter your bid"/>
                </div>
            </div>
            <p className="Under_Bid_Text">Bid Must be Greater than $16</p>
            

        </div>
        <div className="Price_Right_Auction_Container">
        <button className="Add_To" onClick={()=> pushtoWatch()}>
            <div className="Purchase_Eye_Icon">
                
            <h1 className="Watch_Item_Text" style={{color: watchingItems ? '#a3cb47' : 'grey'}}><IoMdEye size={10} style={{marginRight:'.5vw'}} />{watchingItems === false ? "Watch Item" : "Watching"}
    </h1>
                </div>
            </button>
            <p className="Bids_Text">6 bids</p>
        <button className="Bid_Button" >Place Bid
                </button>
        </div>
    </div>
    <div style={{display:'flex'}}>
        <div style={{width:'10vw', textAlign:'center'}}>
    <div className="Circle_Under_Buy" >
        <div>
        <IoIosAirplane className="Plane_Color" />
        </div>
    </div>
    <p className="Shipping_Text">{(itemspec != "") ? itemspec.Item.ShippingCostSummary.ShippingType : null} Service</p>
    <p className="Shipping_Text_Under">Shipping Service</p>
        </div>
        <div style={{width:'10vw', textAlign:'center'}}>
    <div className="Circle_Under_Buy" >
        <div>
        <FaRegCalendarAlt className="Calendar" />
        </div>
    </div>
<p className="Shipping_Text">Item Ships ({today} {(itemspec != "") ? date.getDate() + itemspec.Item.HandlingTime : null})</p>
    <p className="Shipping_Text_Under">{(itemspec != "") ? itemspec.Item.HandlingTime : null} Day Handling</p>
        </div>
        <div style={{width:'10vw', textAlign:'center'}}>
    <div className="Circle_Under_Buy" >
        <div>
        <FaFlagUsa className="USA_Text" />
        </div>
    </div>
    <p className="Shipping_Text">{(itemspec != "") ? itemspec.Item.Location : null}</p>
    <p className="Shipping_Text_Under">Item Location</p>

        </div>
        <div style={{width:'10vw', textAlign:'center'}}>
    <div className="Circle_Under_Buy" >
        <div>
        <FaEbay className="Plane_Color" />
        </div>
    </div>
    <p className="Shipping_Text">Ebay Money Back</p>
    <p className="Shipping_Text_Under" >60 Day Guarantee</p>
        </div>
    </div>

    </div>
</div>
)
}

export default AuctionBox