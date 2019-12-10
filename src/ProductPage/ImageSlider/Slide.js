import React from 'react'
const Slide = (props) => {
    const styles = {
        backgroundImage: `url(${props.image})`,
        // backgroundSize: 'contain',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: '50% 60%'
      }
  return <div>
      <div className="ProductPage_Image_Container" style={styles}></div>
      </div>
}

export default Slide