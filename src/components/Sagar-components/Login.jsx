import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navbar.css";

export const Login = () => {
  return (
    <div className="d-flex justify-content-center ">
      <div className="p-4 w-25 login">
        <h1 className="px-4">Login </h1>
        <form className="px-4 py-3 ">
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
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-warning">
            Log in
          </button>
        </form>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item px-4" href="#">
          New around here? Sign up
        </a>
        <a className="dropdown-item px-4 pb-2" href="#">
          Forgot password?
        </a>
      </div>
    </div>
  );
};
