import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navbar.css";

export const Signup = () => {
  return (
    <div className="d-flex justify-content-center bg">
      <div className="p-4 w-25 login">
        <h1 className="px-4"> Signup</h1>
        <form className="px-4 py-3 ">
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormName" className="form-label">
              Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="User Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email@example.com"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleDropdownFormPassword1"
              className="form-label"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-warning">
            Sign up
          </button>
        </form>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item px-4 py-2" href="#">
          Have already Account? Login Here !
        </a>
      </div>
    </div>
  );
};
