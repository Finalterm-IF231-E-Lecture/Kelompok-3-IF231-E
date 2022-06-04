import { StrictMode } from "react";

const CreditsCard = (props) => {
  return (
    <div className="square text-center">
      <div className="personImg">
        <img
          className="w-50 rounded-circle"
          src={props.img}
          alt={`${props.username}'s Photo`}
        />
      </div>
      <h3 className="fw-bold">{props.username}</h3>
      <p className="fw-bold">{props.nim}</p>
    </div>
  );
};

export default CreditsCard;
