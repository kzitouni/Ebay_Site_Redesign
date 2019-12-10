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
            <div style = {{display:"flex", marginBottom:'2rem'}}>
                <div className="SearchImages" style={{backgroundImage:`url(${item.item})`}}>
                    {/* <img src={item.item}/> */}
                </div>
                <div style={{ marginLeft:'1vw', textAlign:'left'}}>
                  <Link to={`/product${item.itemId}`}>  <p onClick={() => itemFetch(item.itemId)} style={{marginTop:'.8rem', marginBottom:'0rem', textAlign:'left', fontSize:'.9rem'}}>{item.title}</p> </Link>
    <p style={{marginTop:'0rem', marginBottom:'0rem', fontSize:'.68rem'}}>{item.subtitle}New</p>
                    <div className="Left_Search" >
                    <div style={{width:'11vw'}}>
                    {/* <p style={{textAlign:'left', marginTop:'0rem', marginBottom:'0rem', fontSize:'.8rem'}}>Item Price: </p> */}
    {item.buyitnow != null ? (<div><p style={{textAlign:'left', fontWeight:'bold', marginBottom:'0rem', fontSize:'.8rem'}}>${item.buyitnow.toString().indexOf(".") != -1 ? ((item.buyitnow).split(".")[1].length < 2 ? (item.buyitnow.concat("0")) : item.buyitnow) : item.buyitnow.concat(".00")} </p>
                        <p style={{textAlign:'left', marginTop:'.4vh', marginBottom:'.4vh', fontSize:'.5rem', color:'grey'}}>Buy It Now</p>
                       </div> ) : null}
    <p style={{textAlign:'left', fontWeight:'bold', marginBottom:'0rem', fontSize:'.8rem'}}>${(item.price).split(".")[1].length < 2 ? (item.price.concat("0")) : item.price }</p>
                    <p style={{textAlign:'left', fontWeight:'bold', marginTop:'.5vh', marginBottom:'0rem', fontSize:'.5rem', color:'grey'}}>+ {(item.shipping == "Free" )? "Free" : item.shippingcost} Shipping</p>
    <p style={{textAlign:'left', marginTop:'2vh', marginBottom:'0rem', fontSize:'.7rem', fontWeight:'bold'}}>{item.listingtype == "AuctionWithBIN" ? "Buy It Now + Auction" : item.listingtype == "FixedPrice" || "StoreInventory" ? "Buy It Now" : console.log(item.listingtype)}</p>

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
const ImageContainer = {
    backgroundColor:'white', 
    display: 'block',
    width:'17.8vw',
    height:'24.5vh',
marginLeft:'3%',
// borderWidth:'thin',
// borderColor:'black',
// borderStyle:'solid',
boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
backgroundRepeat: 'no-repeat',
textAlign:'center',
backgroundSize: 'contain',
backgroundPosition: 'center'

}
const ImageStyle = {
display: 'flex',
resizeMode: 'contain',
resizeImage: 'contain',
marginRight: 'auto',
marginLeft:'auto',
    maxWidth: '100%',
    // width:'auto',
    maxHeight: '100%',
  backgroundColor:'white'
}

export default SearchResult