import { Link, useNavigate } from "react-router-dom";
import "../css/Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-3 customStyle" id="welcome">
      <h5 className="fw-bold mt-5">SELAMAT DATANG DI WEBSITE</h5>
      <h5>7 Days Student</h5>
      <h3 className="mt-4 mb-4">by Kelompok 3</h3>
      <h3 className="pt-1">
        <span className="fw-bold fst-italic">*Note : </span>
        Bacalah{" "}
        <Link className="text-decoration-none rules" to="./Rules">
          rules
        </Link>{" "}
        sebelum memulai permainan
      </h3>
      <button
        onClick={() => navigate("./MulaiMain")}
        id="headerButton"
        type="button"
        className="btn btn-outline-dark mt-5 mb-5 buttonWelcome"
      >
        Mulai Game !
      </button>
    </div>
  );
}

export default Welcome;
