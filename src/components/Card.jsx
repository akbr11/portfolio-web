function Card() {
  return (
    <>
      <div className="card bg-white w-[250px] h-[350px] m-3 rounded-lg shadow-lg">
        <div className="top">
          {/* <img
            className="w-[200px] h-[200px] object-cover p-3"
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
            alt="img"
          /> */}
        </div>
        <div className="bottom flex flex-col justify-center items-start p-1">
          {/* <div className="title font-semibold text-xs my-1">
            Apple iPhone 13 (128GB) - Midnight
          </div>
          <div className="category text-xs font-light my-1">
            5.4 cm (6.1-inch) display1
          </div> */}
        </div>
      </div>
    </>
  );
}
export default Card;
