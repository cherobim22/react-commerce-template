import { Search } from "react-bootstrap-icons";
import oPlanet from "../public/atom-svgrepo-com.svg";

function CenterSearch() {
  return (
    <div className="col-12 d-flex justify-content-center align-items-center">
      <div
        className="col-11 rounded d-flex flex-column-reverse flex-md-row align-items-center justify-content-around"
        style={{ height: "400px", backgroundColor: "#dbefce" }}
      >
        <div className="col-md-6 col-sm-6 d-flex flex-column align-items-start justify-content-around h-75 p-5">
          <div className="d-flex flex-column align-items-start">
            <h1 className="font-weight-bold">The Best Products in the World</h1>
            <div className="w-100">
              <h6 className="float-center">in Every Category</h6>
            </div>
          </div>

          <div className="flex-shrink-1 d-flex w-100">
            <div className="border rounded-2 bg-white input-group">
              <div className="input-group-prepend d-flex align-items-center">
                <span
                  className="bg-white border-0 shadow-none rounded-2 pe-0 input-group-text"
                  id="basic-addon1"
                >
                  <Search />
                </span>
              </div>
              <input
                type="text"
                className="border-0 shadow-none rounded-2 form-control"
                placeholder="Products and reviews"
                aria-label="Products and reviews"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>

        <div className="col-5 d-flex justify-content-center ">
          <img src={oPlanet} className="mr-5" width={"30%"} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CenterSearch;
