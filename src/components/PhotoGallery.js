import React from "react";
import Header from "./Header";

const PhotoGallery = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://unsplash.com/photos/pKpipZVVEC0/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEzNDczODI5fA&force=true"
          // src="annie-spratt-pKpipZVVEC0-unsplash.jpg"
          alt="backgrnd"
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
