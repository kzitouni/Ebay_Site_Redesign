import React, {useContext} from 'react'
import { Context } from '../Context'

const ProductPageImages = () =>{
const {itemspec} = useContext(Context)

for(let i = 0; i < (itemspec != "") ? itemspec.Item.PictureURL : null; i++){
        let Pics = (itemspec != "") ? itemspec.Item.PictureURL[i] : null
}

    return (
        <div>
<div className="ProductPage_Image_Container" style={{backgroundImage: (itemspec != "") ? `url(${itemspec.Item.PictureURL[0]})` : null}}>
</div>
<div style={{display:'flex'}}>
<div className="ProductPage_ImageSet_Container" style={{backgroundImage: (itemspec != "") ? `url(${itemspec.Item.PictureURL[1]})` : null}}>
</div>
<div className="ProductPage_ImageSet_Container1" style={{backgroundImage: (itemspec != "") ? `url(${itemspec.Item.PictureURL[2]})` : null}}>
</div>

</div>
        </div>
    )
}

export default ProductPageImages