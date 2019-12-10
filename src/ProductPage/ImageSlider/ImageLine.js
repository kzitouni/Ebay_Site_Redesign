import React from 'react'

const ImageLine = (props) => {
    const styles = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        backgroundColor:'white',
        boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }
  return <div className="ProductPage_ImageSet_Container1" style={styles}></div>
}

export default ImageLine