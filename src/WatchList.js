import React, {useContext, useState} from 'react'
import {SampleData} from './SampleData'
import {Link, Switch, Route} from 'react-router-dom'
import {Context} from './Context'
import { MdDeleteForever } from "react-icons/md";

const WatchList = (item) => {
    const {itemFetch, watchlist, itemspec} = useContext(Context)
let endingTime = item.endtime.toString()
let endingTime1 = (endingTime.lastIndexOf("D") == -1 ? "0" : endingTime.substring(
    endingTime.lastIndexOf("P") + 1, 
    endingTime.lastIndexOf("D")))
let endingTime2 = (endingTime.lastIndexOf("H") == -1 ? "0" : endingTime.substring(
    endingTime.lastIndexOf("T") + 1, 
    endingTime.lastIndexOf("H")))
let endingTime3 = (endingTime.lastIndexOf("H") == -1 ? endingTime.substring(
    endingTime.lastIndexOf("T") + 1, 
    endingTime.lastIndexOf("M")) : endingTime.substring(
        endingTime.lastIndexOf("H") + 1, 
        endingTime.lastIndexOf("M")))

        const found = () => watchlist.some(item => ( item.itemid == itemspec.Item.ItemID))
console.log(found())
const [deleted, setDeleted] = useState(true)
    const deleteitem = () => {
      let ind =  watchlist.map((item) => {return item.itemid}).indexOf(item.itemid)
        watchlist.splice(ind, 1)
      setDeleted(false)
    }
// let endingTime1 = endingTime.substring(endingTime.toString().lastIndexOf("P") + 1, endingTime.toString().lastIndexOf("D"))
// let timeleft = endTime.toString().substring(0, endTime.lastIndexOf("D"))
// console.log(endingTime1 + "ayy")
    return (
        <div>
        {deleted ?
        (<div style = {{marginBottom:'25px'}}>
            <div style = {{display:"flex", marginBottom:'2rem'}}>
               <div className="Trash_Container" >
                   <button onClick={() => deleteitem()}>
                   <MdDeleteForever style={{fontSize:"2vw"}}  />
                   </button>
                   </div> 
                <div className="SearchImages" style={{backgroundImage:`url(${item.picture})`, marginLeft:"5vw"}}>
                </div>
                <div style={{ marginLeft:'1vw', textAlign:'left'}}>
                <Link to={`/product${item.itemid}`}>  <p onClick={() => itemFetch(item.itemid)} style={{marginTop:'.8rem', marginBottom:'0rem', textAlign:'left', fontSize:'.9rem'}}>{item.title}</p> </Link>
    <p style={{marginTop:'0rem', marginBottom:'0rem', fontSize:'.68rem'}}>{item.condition}</p>
                    <div className="Left_Search" >
                    <div style={{width:'11vw'}}>
    <p style={{textAlign:'left', fontWeight:'bold', marginBottom:'0rem', fontSize:'.8rem'}}>${item.price}</p>
                    <p style={{textAlign:'left', marginTop:'.5vh', marginBottom:'0rem', fontSize:'.5rem', color:'grey'}}>+ Shipping</p>
    <p style={{textAlign:'left', marginTop:'2vh', marginBottom:'0rem', fontSize:'.7rem', fontWeight:'bold'}}>{item.listingtype == "AuctionWithBIN" ? "Buy It Now + Auction" : item.listingtype == "FixedPrice" || "StoreInventory" ? "Buy It Now" : console.log(item.listingtype)}</p>

                    </div>  
                   
                    <div className="Ends_Container">
                <h1 >{endingTime1}d {endingTime2}h {endingTime3}M left</h1>
                    </div>
                   
                    </div>
                </div>
            </div>
            <hr style={{marginTop:'25px'}}/>
        </div>) : null}
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

export default WatchList