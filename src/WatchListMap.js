import React, {useContext,useEffect} from 'react'
import WatchList from './WatchList'
import { Context } from './Context'
const WatchListMap = () => {
    const {watchlist} = useContext(Context)
    let Elements = watchlist.map((item)=> (
        <WatchList title={item.title} itemid={item.itemid} condition={item.condition} picture={item.picture} 
        price={item.price} buyitnow={item.buyitnow} BINPrice={item.BINPrice} endtime={item.timeleft} />
    ))

    return (<div>
      <h1>Your Watch List</h1>
        {Elements}
    </div>
    )
}

export default WatchListMap