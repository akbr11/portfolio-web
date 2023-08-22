import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Portfolio() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  return (
    <div className="py-10">
      <h3 className="text-3xl py-1 text-white">Portfolio</h3>

      <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
        <FiChevronLeft />
      </button>
      <div className="flex align-middle justify-between ">
        <div
          id="content"
          className="carousel flex items-center gap-10 overflow-x-hidden scroll-smooth  scrollbar-hide"
        >
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
      <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Portfolio;
