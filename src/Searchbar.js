import React, {useContext, useState} from 'react'
import {IoIosSearch} from "react-icons/io";
import {Link} from 'react-router-dom'
import {Context} from './Context'
import {IoIosTimer, IoMdEye, IoMdCheckmark, IoIosAirplane} from "react-icons/io";
import CategoriesData from './CategoriesData'
const Searchbar = () => {
    const {onSubmit, onClick} = useContext(Context)
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")
    const empty = null

    const newarr = CategoriesData.GetCategoryInfoResponse.map((item) => {
        return(<option value={`&categoryId=${item.CategoryID}`} >{item.CategoryNamePath}</option>)
    })
    const handleChange = (e) => {
        setCategory(e.target.value)
        console.log(category)
    }
    return (
        <header className="Header">
            <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/EBay_logo.png/128px-EBay_logo.png" style={{}}/>
            </Link>
            <div style={{width:'25vh'}}></div>
            <div className="Header_Search">
            <input className="InputBar" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
                <select className="Category_Select" name={category} onChange={handleChange} >
                <option value="" >All Categories</option>
                {newarr}
                </select>
                <Link to="/">
                <button onClick={()=> onSubmit(search, category)} className="Search_Button">
                <div className="Search_Container" >
                <IoIosSearch size={25} className="Search_Icon"/>
                </div>

                </button>
                
                </Link>

            </div>
            <div className="Watch_Container">
            <Link to="/watchlist">
            <IoMdEye size={20} className="Watch_Eye"/>
                <p className="WatchList_Header">Watch List</p>
                </Link>
            </div>



        </header>
    )
}
 

export default Searchbar