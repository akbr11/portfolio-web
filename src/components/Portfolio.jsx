// import Card from "./Card";
import web1 from "../assets/aneka.png";
import web2 from "../assets/asique.png";
import web3 from "../assets/kkn.png";
function Portfolio() {
  //   const scrollLeft = () => {
  //     document.getElementById("content").scrollLeft -= 400;
  //   };
  //   const scrollRight = () => {
  //     document.getElementById("content").scrollLeft += 400;
  //   };
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 text-white ">Portofolio</h3>
        <p className="text-md py-2 leading-8 text-gray-200">
          Since the beginning i started in the field of development. I create
          and develop digital products for{" "}
          <span className="text-teal-500">businesses</span> or{" "}
          <span className="text-teal-500">individuals</span>.
        </p>
      </div>
      <div className="flex flex-col items-center gap-10  lg:flex-row lg:flex-wrap pt-10">
        <div className="basis-1/3 flex-1 transition duration-150 ease-in-out hover:scale-110 hover:duration-300">
          <img
            className="rounded-lg object-cover"
            layout="responsive"
            src={web1}
          />
        </div>
        <div className="basis-1/3 flex-1 transition duration-150 ease-in-out hover:scale-110 hover:duration-300">
          <img
            className="rounded-lg object-cover"
            layout="responsive"
            src={web2}
          />
        </div>
        <div className="basis-1/3 flex-1 transition duration-150 ease-in-out hover:scale-110 hover:duration-300">
          <img
            className="rounded-lg object-cover"
            layout="responsive"
            src={web3}
          />
        </div>
      </div>
    </section>
    // <div className="relative py-10">
    //   <h3 className="text-3xl py-1 text-white">Portfolio</h3>
    //   <div
    //     id="content"
    //     className="gap-9 slides-container flex items-center overflow-hidden  rounded scroll-smooth"
    //   >
    //     <div className="slide h-full flex-shrink-0  rounded overflow-hidden">
    //       <Card />
    //     </div>
    //     <div className="slide h-full flex-shrink-0  rounded overflow-hidden">
    //       <Card />
    //     </div>
    //     <div className="slide h-full flex-shrink-0  rounded overflow-hidden">
    //       <Card />
    //     </div>
    //     <div className="slide h-full flex-shrink-0  rounded overflow-hidden">
    //       <Card />
    //     </div>
    //     <div className="slide h-full flex-shrink-0  rounded overflow-hidden">
    //       <Card />
    //     </div>
    //     <div className="slide h-full flex-shrink-0  rounded overflow-hidden">
    //       <Card />
    //     </div>
    //     <div className="slide h-full flex-shrink-0  rounded overflow-hidden">
    //       <Card />
    //     </div>
    //     <div className="slide h-full flex-shrink-0  rounded overflow-hidden">
    //       <Card />
    //     </div>
    //     <div className="slide h-full flex-shrink-0  rounded overflow-hidden">
    //       <Card />
    //     </div>
    //     <div className="slide h-full flex-shrink-0  rounded overflow-hidden">
    //       <Card />
    //     </div>
    //   </div>

    //   <div className="text-center">
    //     <button
    //       onClick={scrollLeft}
    //       role="button"
    //       className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
    //       aria-label="prev"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth="1.5"
    //         stroke="currentColor"
    //         className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M15.75 19.5L8.25 12l7.5-7.5"
    //         />
    //       </svg>
    //     </button>
    //     <button
    //       onClick={scrollRight}
    //       role="button"
    //       className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
    //       aria-label="next"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth="1.5"
    //         stroke="currentColor"
    //         className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M8.25 4.5l7.5 7.5-7.5 7.5"
    //         />
    //       </svg>
    //     </button>
    //   </div>
    // </div>
  );
}

export default Portfolio;
