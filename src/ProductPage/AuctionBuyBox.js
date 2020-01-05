import React, {useContext, useState, useEffect} from 'react'
import {Context} from '../Context'
import {IoMdEye, IoMdCheckmark} from "react-icons/io";
import {FaDollarSign} from 'react-icons/fa'
import {FiPackage} from 'react-icons/fi'
import {GiCardboardBox} from 'react-icons/gi'
import ProductIcons from './ProductIcons';
import Slider from './ImageSlider/Slider';
import swal from 'sweetalert'
const AuctionBuyBox = (item) => {

	const { itemspec, watchlist } = useContext(Context)
	const [bid, setBid] = useState()
    const [price, setPrice] = useState((itemspec != "x") ?  ((itemspec.Item.ConvertedCurrentPrice.Value).toString().indexOf(".") != -1 ? ((itemspec.Item.ConvertedCurrentPrice.Value).toString().split(".")[1].length < 2 ? (itemspec.Item.ConvertedCurrentPrice.Value.toString().concat("0")) : itemspec.Item.ConvertedCurrentPrice.Value ) : (itemspec.Item.ConvertedCurrentPrice.Value.toString().concat(".00")) ): null)
	const binprice = ((itemspec != "x") ? ((itemspec.Item.ConvertedBuyItNowPrice == undefined) ? "N/A" :itemspec.Item.ConvertedBuyItNowPrice.Value.toString().indexOf(".") != -1 ? ((itemspec.Item.ConvertedBuyItNowPrice.Value).toString().split(".")[1].length < 2 ? (itemspec.Item.ConvertedBuyItNowPrice.Value.toString().concat("0")) : itemspec.Item.ConvertedBuyItNowPrice.Value ) :  (itemspec.Item.ConvertedBuyItNowPrice.Value.toString().concat(".00"))): null)
	const [border, setBorder] = useState("red red #a3cb47 red")
	const [borderwidth, setBorderwidth] = useState("0px 0px 1px 0px")
	const box = ((itemspec != "x" && (itemspec.Item.ConditionDisplayName != undefined)) ? ((itemspec != "x" && (itemspec.Item.ConditionDisplayName.toLowerCase().indexOf("new") != -1) )  ? <p>  <FiPackage style={{marginRight:'1vw'}} />{(itemspec != "x") ? itemspec.Item.ConditionDisplayName : null}</p>
	: (itemspec != "x" && (itemspec.Item.ConditionDisplayName.toLowerCase().indexOf("new") == -1) ) ? <p>  <GiCardboardBox style={{marginRight:'1vw'}} />{(itemspec != "x") ? itemspec.Item.ConditionDisplayName : null}</p> : null) : null)
	const pushitems = {
		title: itemspec.Item.Title, 
		itemid: itemspec.Item.ItemID, 
		price: price,
		buyitnow: itemspec.Item.BuyItNowAvailable, BINPrice: (itemspec.Item.BuyItNowAvailable) ? itemspec.Item.ConvertedBuyItNowPrice.Value : null, 
		CurrPrice: itemspec.Item.ConvertedCurrentPrice.Value, timeleft: itemspec.Item.TimeLeft,
		picture: itemspec.Item.PictureURL[0], listingtype: itemspec.Item.ListingType,
		condition: itemspec.Item.ConditionDisplayName
	}
	const quantity = (
		itemspec != "x"
		  ? itemspec.Item.Quantity == undefined
			? null
			: itemspec.Item.Quantity
		  : null
	  );

		const found = () => watchlist.some(item => ( item.itemid == itemspec.Item.ItemID))

		const [watchingItems, setWatchingItems] = useState()
		let ind = watchlist
		.map((item) => {
		  return item.itemid;
		})
	let indy = ind.indexOf(itemspec.Item.ItemID)
		const pushtoWatch = () => (
			
			(found() == false) ? watchlist.push(pushitems) && setWatchingItems(found()) : watchlist.splice(indy, 1) && setWatchingItems(found())
			)
		
			useEffect( () => { 
				setWatchingItems(found())
			}, [])
const handleInput = (event) => {
    setBid(event.target.value)
}
let  outline = {
    borderColor: border,
    borderWidth: borderwidth,
    borderStyle:'solid'
};
const handleBid = () => {
    if(bid > Number(price)) {
        setPrice(bid)
        setBorderwidth("0px 0px 1px 0px")
        setBorder("red red #a3cb47 red")
    }
    else{
          setBorderwidth("1px 1px 1px 1px")
          setBorder("red")
    }
}
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
		<div className="Buy_Container" style={{height:'auto'}}>
			<div className="Price_Container">
				<div style={{textAlign:'center', marginTop: '-1rem'}}>
					<h1 className="Price">${binprice}</h1>
				</div>
				<div >
					<h3 className="Price_Text">Price</h3>
				</div>
                <button className="Image_Button" onClick={() => swal("Woot!", "You have purchased this item!", "success")}> 
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
						<h1 className="Price">${price}   </h1>
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
							<input className="Auction_Input" style={outline} type="number" placeholder="Enter your bid" onChange={handleInput}/>
						</div>
					</div>
					<p className="Under_Bid_Text">Bid Must be Greater than ${price}</p>
				</div>
			</div>
			<div className="Price_Right_Container">
            <button className="Add_To" onClick={()=> pushtoWatch()}>
				<div className="Purchase_Eye_Icon">
				<h1 className="Watch_Item_Text" style={{color: watchingItems ? '#a3cb47' : 'grey'}}><IoMdEye size={10} style={{marginRight:'.5vw'}} />{watchingItems === false ? "Watch Item" : "Watching"}
    </h1>
				</div>
                </button>
                <p className="Bids_Text" style={{marginTop:'92.48px'}}>{(itemspec != "x") ?  (itemspec.Item.BidCount) : null} bids</p>
        <button className="Bid_Button" onClick={() => handleBid()} style={{}} >Place Bid
                </button>
			</div>
		</div>
		<ProductIcons />
	</div>
</div>
)
}

export default AuctionBuyBox