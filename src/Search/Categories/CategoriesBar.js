import React, {useContext, useState} from 'react'
import CategoriesData from './CategoriesData'
import {Context} from '../../Context'
const CategoriesBar = () => {
const {onClick} = useContext(Context)
    const newarr = CategoriesData.GetCategoryInfoResponse.map((item) => {
         return(<button className="Category_Button_Text" onClick={()=>onClick(item.CategoryID == "" ? "" : item.CategoryID)} value={`&categoryId=${item.CategoryID}`}>{item.CategoryNamePath}</button>)
    })
    return (
        <div className="Categories_Side_Container">
            <p>Categories</p>
            <p>{newarr}</p>
        </div>
    )


}

export default CategoriesBar