import AboutImg from "../assets/about.png";

export default function About() {
  return (
    <>
      <div className="flex flex-col mt-[8rem] items-center h-full mb-[4rem]">
        <div className="text-[40px] self-center border-b-4 border-orange-400 mb-[4rem] cursor-default">
          About us
        </div>
        <div className="flex justify-center flex-col md:flex-row md:justify-between items-center max-w-[1000px] md:w-[1000px]  mx-auto leading-[35px] text-[20px] gap-[2rem]">
          <div className="w-[300px] md:w-[450px]">
            <p>
              MAY CAPITAL MAKINE EKIPMANLARI KIMYA URUNLERISANAYI VE TICARET
              LIMITED SIRKETI company is a leader in distribution of steel long
              and flat products from Europe and Turkey. We are exclusively
              selling rebars, wire rods, merchant bar, steel profiles ,
              Prepainted hot dipped galvanized coils and galvanized hot dipped
              coils from the main steel mills. Our experience as global traders
              enable us to link customers with a wide range of suppliers. We
              also guarantee to assist our customers to find the products that
              suits the best for their needs.
            </p>
          </div>
          <div className="img-box">
            <img
              className="rounded-[10px] w-[300px] md:w-full"
              src={AboutImg}
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
