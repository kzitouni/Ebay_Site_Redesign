import React, {useContext} from 'react'
import {SampleData} from './SampleData'
import {Link, Switch, Route} from 'react-router-dom'
const AltSearchResult = (item) => {
    return (
        <div style = {{}}>
            <div style = {{display:"flex", marginBottom:'2rem'}}>
                <div style={ImageContainer}>
                    <img src={item.item}/>
                </div>                

            </div>
        </div>
    )
}
const ImageContainer = {
    backgroundColor:'white', 
    display: 'block',
    width:'5rem',
    height:'10rem',
marginLeft:'23%',
// borderWidth:'thin',
// borderColor:'black',
// borderStyle:'solid',
height:'5%',
boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

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

export default AltSearchResult