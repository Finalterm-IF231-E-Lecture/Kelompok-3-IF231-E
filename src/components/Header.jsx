import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="border-bottom border-2 mb-5 header-top" id="pg-title">
      <div className="text-center mt-3 mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-trophy-fill"
          viewBox="0 0 16 16"
          className="mb-4 mt-3"
        >
          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
        </svg>
        <h2 className="7Days fw-bold">7 Days Student</h2>
      </div>
      <div className="navbar navbar-expand-lg navbar-light justify-content-center border-top border-2 mt-4">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-center w-100 justify-content-around">
            <li className="nav-item">
              <Link
                className="nav-link active mt-4"
                aria-current="page"
                to="./"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item mt-4">
              <Link className="nav-link" to="./About">
                ABOUT
              </Link>
            </li>
            <li className="nav-item mt-4">
              <Link className="nav-link" to="./Credits">
                CREDITS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
