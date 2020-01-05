import React, { useContext } from "react";
import { Context } from "../../Context";
import ImageLine from "./ImageLine";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  const { itemspec } = useContext(Context);

  return (
    <div>
      {itemspec.Item.PictureURL.length < 2 ? (
        <div
          className="ProductPage_Image_Container"
          style={{ backgroundImage: `url(${itemspec.Item.PictureURL[0]})` }}
        ></div>
      ) : (
        <Carousel
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          centerMode={true}
        >
          {itemspec != "x"
            ? itemspec.Item.PictureURL.map(item => (
                <div
                  className="ProductPage_Image_Container"
                  style={{ backgroundImage: `url(${item})` }}
                ></div>
              ))
            : null}
        </Carousel>
      )}
      <div className="Slider_Grid">
        {itemspec != "x"
          ? itemspec.Item.PictureURL.map((image, i) => (
              <button className="Image_Button" key={i}>
                <ImageLine image={image} />
              </button>
            ))
          : null}
      </div>
    </div>
  );
};

export default Slider;
