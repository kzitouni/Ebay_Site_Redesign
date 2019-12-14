import React, {useContext} from 'react'
import {SampleData} from './SampleData'
import {Link, Switch, Route} from 'react-router-dom'
import {Context} from './Context'
const SearchResult = (item) => {
    const {itemFetch} = useContext(Context)
let endingTime = item.endtime.toString()
let endingTime1 = endingTime.substring(
    endingTime.lastIndexOf("P") + 1, 
    endingTime.lastIndexOf("D"))
let endingTime2 = endingTime.substring(
    endingTime.lastIndexOf("T") + 1, 
    endingTime.lastIndexOf("H"))
let endingTime3 = endingTime.substring(
    endingTime.lastIndexOf("H") + 1, 
    endingTime.lastIndexOf("M"))
// let endingTime1 = endingTime.substring(endingTime.toString().lastIndexOf("P") + 1, endingTime.toString().lastIndexOf("D"))
// let timeleft = endTime.toString().substring(0, endTime.lastIndexOf("D"))
console.log(endingTime1)
console.log(item.buyitnow, "ayyy")
    return (
        <div style = {{marginBottom:'25px'}}>
            <div className="Image_Cont" >
                <div className="SearchImages" style={{backgroundImage:`url(${item.item})`}}>
                    {/* <img src={item.item}/> */}
                </div>
                <div className="Sub_Info_Cont" >
                  <Link to={`/product${item.itemId}`}>  <p onClick={() => itemFetch(item.itemId)} className="Sub_Info_Title" >{item.title}</p> </Link>
    <p className="Sub_Info_Subtitle">{item.conditionDisplayName}</p>
                    <div className="Left_Search" >
                    <div className="Sub_Info_Price_Cont" >
                    {/* <p style={{textAlign:'left', marginTop:'0rem', marginBottom:'0rem', fontSize:'.8rem'}}>Item Price: </p> */}
    {item.buyitnow != null ? (<div><p className="Sub_Info_Price" >${item.buyitnow.toString().indexOf(".") != -1 ? ((item.buyitnow).split(".")[1].length < 2 ? (item.buyitnow.concat("0")) : item.buyitnow) : item.buyitnow.concat(".00")} </p>
                        <p className="Sub_Info_BuyText">Buy It Now</p>
                       </div> ) : null}
    <p className="Sub_Info_Price">${(item.price).split(".")[1].length < 2 ? (item.price.concat("0")) : item.price }</p>
                    <p className="Sub_Info_ShippText">+ {(item.shipping == "Free" )? "Free" : item.shippingcost} Shipping</p>
                    {item.listingtype == "Auction" ? <p className="Sub_Info_Type">Auction</p> : item.listingtype == "AuctionWithBIN" ? <p className="Sub_Info_Type">Buy It Now + Auction</p> : item.listingtype == "FixedPrice" || "StoreInventory" ? <p className="Sub_Info_Type">Buy It Now</p>  : null}

                    </div>  
                    {/* <hr style={{marginLeft:'.8rem', marginRight: '.8rem'}}/>
                    <div style={{textAlign:'center'}}>
                    <p style={{textAlign:'left', marginTop:'0rem', marginBottom:'0rem', fontSize:'.8rem'}}>Quantity:</p>
                    <p style={{textAlign:'left', fontWeight:'bold', marginTop:'0rem', marginBottom:'0rem', fontSize:'.8rem'}}>3</p>
                    <p style={{textAlign:'left', marginTop:'0rem', marginBottom:'0rem', fontSize:'.8rem'}}>Ends Tuesday</p>                    
                    </div>
                    <hr style={{marginLeft:'.8rem', marginRight: '.8rem'}}/>
                    <div style={{textAlign:'center'}}>
                    <p style={{textAlign:'left', marginTop:'0rem', marginBottom:'0rem', fontSize:'.8rem'}}>Seller:</p>
                    <p style={{textAlign:'left', marginTop:'0rem', marginBottom:'0rem', fontSize:'.8rem'}}>Destroyer</p>
                    <p style={{textAlign:'left', marginTop:'0rem', marginBottom:'0rem', fontSize:'.8rem'}}>100% positive Feedback</p>
                    </div> */}
                    <div className="Ends_Container">
                <h1 >{endingTime1}d {endingTime2}h {endingTime3}M left</h1>
                    </div>
                    {/* <button style = {{marginLeft:'3rem', height:'2rem', width:'7rem', borderRadius:'.2rem', color:'white', backgroundColor:'blue'}}>
                        Buy Now
                    </button> */}
                    </div>
                </div>
            </div>
            <hr style={{marginTop:'25px'}}/>
        </div>
    )
}
// const ImageContainer = {
//     backgroundColor:'white', 
//     display: 'block',
//     width:'17.8vw',
//     height:'24.5vh',
// marginLeft:'3%',
// // borderWidth:'thin',
// // borderColor:'black',
// // borderStyle:'solid',
// boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
// backgroundRepeat: 'no-repeat',
// textAlign:'center',
// backgroundSize: 'contain',
// backgroundPosition: 'center'

// }
// const ImageStyle = {
// display: 'flex',
// resizeMode: 'contain',
// resizeImage: 'contain',
// marginRight: 'auto',
// marginLeft:'auto',
//     maxWidth: '100%',
//     // width:'auto',
//     maxHeight: '100%',
//   backgroundColor:'white'
// }

export default SearchResult