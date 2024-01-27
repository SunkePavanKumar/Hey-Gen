import imagesData from "../Constants/imagsLinks.js";
const ImageCarousel = () => {
  return (
    <center>
      <div className="image-carousel-container relative overflow-hidden max-w-[740px] md:w-[740px] ml-6 mr-6">
        <div className="image-scrolling-container flex animate-scrollImages items-center justify-between">
          {imagesData.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-[79px] h-[72px] object-cover"
            />
          ))}
        </div>
      </div>
    </center>
  );
};
export default ImageCarousel;
