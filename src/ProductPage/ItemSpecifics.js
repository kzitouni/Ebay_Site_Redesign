import React, {useContext, useState} from 'react'
import { Context } from '../Context'
import Render from 'react-render-html'
const ItemSpecifics = () => {

const {itemspec} = useContext(Context)
    return (
        <div className="Item_Spec_Container">
            <div className="Item_Spec_Container1"> 
                <h1>Item Specifics</h1>
                <div className="Spec_Box">
            {/* <p>Condition: {(itemspec != "") ? itemspec.Item.ConditionDisplayName : null} </p>
            <p>Category Name: {(itemspec != "") ? itemspec.Item.PrimaryCategoryName : null}</p>
            <p>Item ID: {(itemspec != "") ? itemspec.Item.ItemID : null}</p> */}
            
            {itemspec.Item.ItemSpecifics.NameValueList == undefined ? null : itemspec.Item.ItemSpecifics.NameValueList.map((item) => (
                        <p style = {{gridArea: 'inherit'}} className="Right_Spec_Cont_Text"><p style={{fontWeight:'bold'}}>{item.Name}:</p> {item.Value}</p>
                        ))}
                    </div>
                    {/* <div className="Right_Spec_Cont">
                        {itemspec.Item.ItemSpecifics.NameValueList.map((item) => (
                            <div>
                        <p className="Right_Spec_Cont_Text">{item.Name}:{item.Value}</p>
                            </div>
                        ))}

                    </div> */}
                

 
            </div>
            <div className="About_Cont">
<h1 className="About_Title">About This Product</h1>
<div className="About_Section">
<p >{ (itemspec != "") ? Render(itemspec.Item.Description) : null}</p>
</div>
        </div>
            </div>
    )
}

export default ItemSpecifics