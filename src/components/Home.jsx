import bg1 from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-2.jpg";
import bg3 from "../assets/bg-3.jpg";
import bg4 from "../assets/bg-4.jpg";

export default function Home() {
  return (
    <>
      <span className="w-full h-full bg-[#333] opacity-40 absolute top-0 left-0 z-10"></span>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators zPoz">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner imgCont">
          <div className="carousel-item active imgSize">
            <img
              src={bg1}
              className="d-block w-100 h-full object-top"
              alt="..."
            />
          </div>
          <div className="carousel-item imgSize">
            <img src={bg2} className="d-block w-100 h-full" alt="..." />
          </div>
          <div className="carousel-item imgSize">
            <img src={bg3} className="d-block w-100 h-full" alt="..." />
          </div>
          <div className="carousel-item imgSize">
            <img
              src={bg4}
              className="d-block w-100 h-full object-right"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev zPoz mt-[56px]"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next zPoz mt-[56px]"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
