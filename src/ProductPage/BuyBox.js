import React, {useContext, useState, useEffect} from 'react'
import {Context} from '../Context'
import {IoIosTimer, IoMdEye, IoMdCheckmark, IoIosAirplane} from "react-icons/io";
import {FaDollarSign, FaRegCalendarAlt, FaEbay, FaFlagUsa} from 'react-icons/fa'
import {FiPackage} from 'react-icons/fi'
import {GiCardboardBox} from 'react-icons/gi'
import {AiOutlineShoppingCart} from "react-icons/ai";
import ProductPageImages from './ProductPageImages'
import Slider from './ImageSlider/Slider'
import ProductIcons from './ProductIcons';


const BuyBox = (item) => {
const [watch, setWatch] = useState(false)
const {product, itemspec, watchlist, setWatchlist, savedlist} = useContext(Context)
const table = "ayyooo table"
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
    // return  (itemspec != "") ? watchlist.push(pushitems) : null

// useEffect( () => {
//     localStorage.setItem("watchlist", [JSON.stringify(savedlist), JSON.stringify(watchlist)])
//     }, [watchlist])
// console.log(JSON.parse(localStorage.getItem("watchlist"), "getdatable"))
const date = new Date()
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let today = months[date.getMonth()]
return (
<div className="Product_Container">
    <div className="Title_Left_Cont">
{/* <ProductPageImages /> */}
<Slider />
    </div>
<div className="Product_Info"> 
<hr className="Product_Right_HR" />
<div className="Condition_Container">
{(itemspec != "" && itemspec.Item.ConditionDisplayName != undefined) ? 
((itemspec.Item.ConditionDisplayName.toLowerCase().indexOf("new") != -1) ? <p>  <FiPackage style={{marginRight:'10px'}} />{itemspec.Item.ConditionDisplayName} </p>
: <p>  <GiCardboardBox style={{marginRight:'10px'}} /> {itemspec.Item.ConditionDisplayName} </p>) : null}


{/* {(itemspec != "" && (itemspec.Item.ConditionDisplayName.toLowerCase().indexOf("new") != -1) ) 
? <p>  <FiPackage style={{marginRight:'1vw'}} /> {itemspec.Item.ConditionDisplayName}{(itemspec != "") 
? itemspec.Item.ConditionDisplayName : null}</p>
: (itemspec != "" && (itemspec.Item.ConditionDisplayName.toLowerCase().indexOf("new") == -1) ) 
? <p>  <GiCardboardBox style={{marginRight:'1vw'}} />{(itemspec != "") 
? itemspec.Item.ConditionDisplayName : null}</p> : null} */}
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
    <div className="Buy_Container">
        <div className="Price_Container">
            <div style={{textAlign:'center', marginTop: '-1rem'}}>
                
            <h1 className="Price">${(itemspec != "") ?  ((itemspec.Item.ConvertedCurrentPrice.Value).toString().indexOf(".") != -1 ? ((itemspec.Item.ConvertedCurrentPrice.Value).toString().split(".")[1].length < 2 ? (itemspec.Item.ConvertedCurrentPrice.Value.toString().concat("0")) : itemspec.Item.ConvertedCurrentPrice.Value ) : (itemspec.Item.ConvertedCurrentPrice.Value.toString().concat(".00")) ): null} </h1>
            </div>
            <div >
            <h3 className="Price_Text">Price</h3>
            </div>
            <button className="Image_Button">   
            <div className="Purchase_Container">
                <div className="Purchase_Left_Container">
                    <div style={{minHeight:'24.48px', minWidth:'23.7px'}}>
                    <IoMdCheckmark className="Check_Box" />
                    </div>
                </div>
                <div className="Purchase_Right_Container">
                    <h1 className="Buy_Now_Text">Buy Now</h1>
                </div>
            </div>
            </button>
        </div>
        
        <div className="Price_Right_Container">
            <button className="Add_To" onClick={() => {pushtoWatch()}} >
            <div className="Purchase_Eye_Icon">
        <h1 className="Watch_Item_Text" style={{color: watchingItems ? '#a3cb47' : 'grey'}}><IoMdEye size={10} style={{marginRight:'5px'}} />{watchingItems === false ? "Watch Item" : "Watching"}
    </h1>

            </div>

            </button>
            <button className="Add_To">
            <div className="Purchase_Cart_Icon">
       <h1 className="Add_Cart_Text"> <AiOutlineShoppingCart size={10} style={{marginRight:'5px'}}/>Add to Cart</h1>
            </div>

            </button>
        </div>
    </div>
<ProductIcons />

    </div>
</div>
)
}

export default BuyBox