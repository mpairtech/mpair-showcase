import React from "react";

const GalleryCard = ({ element }) => {
  return (
    <div className="w-100 lg:h-[70vh] h-[500px]  relative overflow-hidden gallery-card">
      <div className="absolute h-full w-full gallery-card-img">
        <img
          src={element.img}
          alt={element.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-8 whitespace-nowrap text-3xl font-thin font-navFont gallery-card-title">
        {element.title}
      </div>
    </div>
  );
};

export default GalleryCard;