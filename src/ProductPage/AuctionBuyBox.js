import React, {useContext, useState, useEffect} from 'react'
import {Context} from '../Context'
import {IoIosTimer, IoMdEye, IoMdCheckmark, IoIosAirplane} from "react-icons/io";
import {FaDollarSign, FaRegCalendarAlt, FaEbay, FaFlagUsa} from 'react-icons/fa'
import {FiPackage} from 'react-icons/fi'
import {GiCardboardBox} from 'react-icons/gi'
import {AiOutlineShoppingCart} from "react-icons/ai";
const AuctionBuyBox = (item) => {

	const {product, itemspec, watchlist, setWatchlist, savedlist} = useContext(Context)
	const pushitems = {
		title: itemspec.Item.Title, 
		itemid: itemspec.Item.ItemID, 
		price: ((itemspec.Item.ConvertedCurrentPrice.Value).toString().indexOf(".") != -1 ? ((itemspec.Item.ConvertedCurrentPrice.Value).toString().split(".")[1].length < 2 ? (itemspec.Item.ConvertedCurrentPrice.Value.toString().concat("0")) : itemspec.Item.ConvertedCurrentPrice.Value ) : (itemspec.Item.ConvertedCurrentPrice.Value.toString().concat(".00"))) ,
		buyitnow: itemspec.Item.BuyItNowAvailable, BINPrice: (itemspec.Item.BuyItNowAvailable) ? itemspec.Item.ConvertedBuyItNowPrice.Value : null, 
		CurrPrice: itemspec.Item.ConvertedCurrentPrice.Value, timeleft: itemspec.Item.TimeLeft,
		picture: itemspec.Item.PictureURL[0], listingtype: itemspec.Item.ListingType,
		condition: itemspec.Item.ConditionDisplayName
	}

		const found = () => watchlist.some(item => ( item.itemid == itemspec.Item.ItemID))

		const [watchingItems, setWatchingItems] = useState()
		let ind =  watchlist.map((item) => {return item.itemid}).indexOf(item.itemid)
		const pushtoWatch = () => (
			
			(found() == false) ? watchlist.push(pushitems) && setWatchingItems(found()) : watchlist.splice(ind, 1) && setWatchingItems(found())
			)
		
			useEffect( () => { 
				setWatchingItems(found())
			})
    const date = new Date()
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let today = months[date.getMonth()]
console.log((itemspec.Item.ConvertedCurrentPrice.Value).toString(), "ay")
return (
<div className="Product_Container">
	<div className="ProductPage_Image_Container" style={{backgroundImage: (itemspec != "") ? `url(${itemspec.Item.PictureURL[0]})` : null}}></div>
	<div className="Product_Info">
		<hr className="Product_Right_HR" />
		<div className="Condition_Container">
        {(itemspec != "" && (itemspec.Item.ConditionDisplayName != undefined)) ? ((itemspec != "" && (itemspec.Item.ConditionDisplayName.toLowerCase().indexOf("new") != -1) )  ? <p>  <FiPackage style={{marginRight:'1vw'}} />{(itemspec != "") ? itemspec.Item.ConditionDisplayName : null}</p>
 : (itemspec != "" && (itemspec.Item.ConditionDisplayName.toLowerCase().indexOf("new") == -1) ) ? <p>  <GiCardboardBox style={{marginRight:'1vw'}} />{(itemspec != "") ? itemspec.Item.ConditionDisplayName : null}</p> : null) : null}

		</div>
		<div className="Quantity_Container">
			<h1 className="Quantity_Text">Quantity</h1>
			<select className="Selector">
				<option value={1} className="Selector_Option_Text" >1</option>
				<option value={2} className="Selector_Option_Text" >2</option>
				<option value={3} className="Selector_Option_Text" >3</option>
				<option value={4} className="Selector_Option_Text" >4</option>
				<option value={5} className="Selector_Option_Text" >5</option>
				<option value={6} className="Selector_Option_Text" >6</option>
				<option value={7} className="Selector_Option_Text" >7</option>
				<option value={8} className="Selector_Option_Text" >8</option>
				<option value={9} className="Selector_Option_Text" >9</option>
			</select>
		</div>
		<div className="Buy_Container" style={{height:'auto'}}>
			<div className="Price_Container">
				<div style={{textAlign:'center', marginTop: '-1rem'}}>
					<h1 className="Price">${(itemspec != "") ? ((itemspec.Item.BuyItNowPrice == undefined) ? "N/A" : ((itemspec.Item.BuyItNowPrice.Value).toString().split(".")[1].length < 2 ? (itemspec.Item.BuyItNowPrice.Value.toString().concat("0")) : itemspec.Item.BuyItNowPrice.Value )): null}</h1>
				</div>
				<div >
					<h3 className="Price_Text">Price</h3>
				</div>
                <button className="Image_Button"> 
				<div className="Purchase_Container">
					<div className="Purchase_Left_Container">
						<div>
							<IoMdCheckmark className="Check_Box" />
						</div>
					</div>
					<div className="Purchase_Right_Container">
						<h1 className="Buy_Now_Text">Buy Now</h1>
					</div>
				</div>
                </button>
				<div className="Price_Container">
					<div style={{textAlign:'center', marginTop: '-1rem'}}>
						<h1 className="Price">${(itemspec != "") ?  ((itemspec.Item.ConvertedCurrentPrice.Value).toString().indexOf(".") != -1 ? ((itemspec.Item.ConvertedCurrentPrice.Value).toString().split(".")[1].length < 2 ? (itemspec.Item.ConvertedCurrentPrice.Value.toString().concat("0")) : itemspec.Item.ConvertedCurrentPrice.Value ) : (itemspec.Item.ConvertedCurrentPrice.Value.toString().concat(".00")) ): null}   </h1>
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
					<p className="Under_Bid_Text">Bid Must be Greater than ${(itemspec != "") ?   ((itemspec.Item.ConvertedCurrentPrice.Value).toString().indexOf(".") != -1 ? ((itemspec.Item.ConvertedCurrentPrice.Value).toString().split(".")[1].length < 2 ? (itemspec.Item.ConvertedCurrentPrice.Value.toString().concat("0")) : itemspec.Item.ConvertedCurrentPrice.Value ) : (itemspec.Item.ConvertedCurrentPrice.Value.toString().concat(".00")) ): null}</p>
				</div>
			</div>
			<div className="Price_Right_Container">
            <button className="Add_To" onClick={()=> pushtoWatch()}>
				<div className="Purchase_Eye_Icon">
				<h1 className="Watch_Item_Text" style={{color: watchingItems ? '#a3cb47' : 'grey'}}><IoMdEye size={10} style={{marginRight:'.5vw'}} />{watchingItems === false ? "Watch Item" : "Watching"}
    </h1>
				</div>
                </button>
                <button className="Add_To">
				<div className="Purchase_Cart_Icon">
					<h1 className="Add_Cart_Text">
						<AiOutlineShoppingCart size={10} style={{marginRight:'.5vw'}}/>Add to Cart
					</h1>
				</div>
                </button>
                <p className="Bids_Text" style={{marginTop:'16vh'}}>{(itemspec != "") ?  (itemspec.Item.BidCount) : null} bids</p>
        <button className="Bid_Button" style={{}} >Place Bid
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

export default AuctionBuyBox