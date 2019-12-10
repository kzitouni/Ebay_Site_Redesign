import React, { Component, useState, useContext } from 'react';
import Slide from './Slide'
import LeftArrow from './ArrowComponents/LeftArrow'
import RightArrow from './ArrowComponents/RightArrow'
import { Context } from '../../Context';
import ImageLine from './ImageLine'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Slider = () => {

const [currentIndex, setCurrentIndex] = useState(0)
const {itemspec} = useContext(Context)
const [translateValue, setTranslateValue] = useState(0)
const styles = {
    backgroundImage: `url(${(itemspec != "") ? (itemspec.Item.PictureURL[currentIndex]) : null})`,
    // backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: '50% 60%'
  }
const slideWidth = () => {
    return document.querySelector('.slide').clientWidth
 }
const gotoPrevSlide = () => (
    (itemspec != "") ? (currentIndex == 0 ? 
        (setCurrentIndex(itemspec.Item.PictureURL.length - 1) && setTranslateValue(0)) : 
        (setCurrentIndex(currentIndex - 1) && setTranslateValue(translateValue + -(slideWidth())))) : null
)


const gotoNextSlide = () => (
(itemspec != "") ? (currentIndex == itemspec.Item.PictureURL.length - 1 ? 
(setCurrentIndex(0) && setTranslateValue(0)) : 
(setCurrentIndex(currentIndex + 1) && setTranslateValue(translateValue + -(slideWidth())))) : null
)


    return (
        <div>
          {(itemspec.Item.PictureURL.length < 2) ? <div className="ProductPage_Image_Container" style={{backgroundImage: `url(${itemspec.Item.PictureURL[0]})`}}></div> : 
                (<Carousel   showThumbs={false} showArrows={true} showStatus={false} centerMode={true}>
            {(itemspec != "") ? (itemspec.Item.PictureURL.map( (item) => (
          <div className="ProductPage_Image_Container" style={{backgroundImage: `url(${item})`}}></div>
                       
            ))) : null}
           {/* <div className="ProductPage_Image_Container" style={styles}><LeftArrow onClick={() => gotoPrevSlide()} onClick1={() => gotoNextSlide()} /> </div> */}
            </Carousel>) }
              {/* <Slide image={(itemspec != "") ? (itemspec.Item.PictureURL[currentIndex]) : null} /> */}
            <div className="Slider_Grid">
                
            {(itemspec != "") ? (itemspec.Item.PictureURL.map( (image, i) => (
                <button className="Image_Button" onClick={() => {setCurrentIndex(i)}} onMouseEnter={() => {setCurrentIndex(i)}}>
                    <ImageLine image={image} key={i}/> 
                </button>
            ))) : null}
                
            </div>
          </div>
    );
  }


export default Slider 