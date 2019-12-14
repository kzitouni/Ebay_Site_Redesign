import React, {useContext} from 'react'
import { Context } from '../Context'

const ReturnPolicy = () => {

    const {itemspec} = useContext(Context)
return (
    <div className="Item_Ship_Container1"> 
    <h1 className="Desc_Titles">Return Policy</h1>
    
    <div style={{display:'block'}} className="Spec_Box">
    {(itemspec != "") ? (itemspec.Item.ReturnPolicy.ReturnsAccepted == "Returns Accepted" ? 
    <div>
            <div className="Shipping_Bar">
            <div className="Return_Bar_Text_Cont">
            <p className="Return_Bar_Title"  >After receiving the item, contact seller within</p>
            </div>
            <div className="Return_Bar_Text_Cont">
            <p className="Return_Bar_Title"  >Refund will be given as</p>
            </div>
            <div className="Return_Bar_Text_Cont">
            <p className="Return_Bar_Title"  >Return shipping</p>
            </div>
            
                    </div>
                    <div className="Shipping_Bar_Answer">
            <div className="Return_Bar_Text_Cont">
            <p className="Return_Bar_Text" >{(itemspec != "") ? itemspec.Item.ReturnPolicy.ReturnsWithin : null}</p>
            </div>
            <div className="Return_Bar_Text_Cont">
            <p className="Return_Bar_Text" >Money back</p>
            </div>
            <div className="Return_Bar_Text_Cont">
            <p className="Return_Bar_Text" >Buyer pays for return shipping</p>
            </div>
            
                    </div> </div> :<div className="Shipping_Bar_Answer"><div style={{margin:"auto"}}> <p>Returns are not accepted</p></div> </div>) : null}

    </div>


</div>
)
}

export default ReturnPolicy