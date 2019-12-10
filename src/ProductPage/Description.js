import React, {useState} from 'react'
import ItemSpecifics from './ItemSpecifics'
import Shipping from './Shipping'




const Description = () => {
    const [page, setPage] = useState(false)

    return (
        <div className="Description_Container" >
            <div className="Description_Cont_Cont">
                {(page) ?
            (<div><button className="Highlighted_Spec_Button" onClick={() => setPage(true)} >Item Specifics</button>
            <button className="Unhighlighted_Shipping_Button" onClick={() => setPage(false)}>Shipping Info</button></div>) :
            (<div><button className="Unhighlighted_Spec_Button" onClick={() => setPage(true)} >Item Specifics</button>
            <button className="Highlighted_Shipping_Button" onClick={() => setPage(false)}>Shipping Info</button></div>)}
            </div>
{page ? <ItemSpecifics /> : <Shipping />}

        </div>
    )
}

export default Description