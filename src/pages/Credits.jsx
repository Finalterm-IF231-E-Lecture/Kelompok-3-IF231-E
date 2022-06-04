import CreditsCard from "../components/Creadits3";
import credits from "../credits";
import "../css/credits.css";

const Credits = () => {
  return (
    <div className="container">
      <div className="creditsTitle text-center">
        <h1 className="fw-bold mb-5 mt-3">Credits</h1>
      </div>
      <div className="row row-cols-auto justify-content-center">
        {credits.map((creditsResult) => (
          <div className="col">
            <CreditsCard
              username={creditsResult.name}
              nim={creditsResult.nim}
              ig={creditsResult.ig}
              img={creditsResult.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credits;
