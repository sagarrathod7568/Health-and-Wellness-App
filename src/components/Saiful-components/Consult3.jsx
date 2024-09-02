import React from "react";
import "./Consult3.scss";
// import Mgmatters from "./Matters";
// import Information from "./Info";
import { Link } from "react-router-dom";

function Consult3() {
  function submitDetails() {
    alert(
      "Details of patient submitted Successfully our experts will get back to you soon"
    );
  }
  return (
    <>
      <div id="Consult3" className="Consult3">
        <div className="top_section">
          <div className="info_section">
            <h2>Select your specialty</h2>
            <p>
              Choose from our range of specialists in nutrition, fitness, and
              physical health
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/marketing/3d0c445a-a194-4c83-851f-15507cadb4a0.png"
              alt=""
            />
          </div>
        </div>
        <div className="data_section">
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/134/24_7_helpline.png"
              alt=""
            />{" "}
            <span>24x7 Doctor Assistance</span>
          </div>

          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/33/Bone__Join_and_Muscle_Care_1.84x.png"
              alt=""
            />
            <span> Bone & Joint Specialist</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/106/Chest_Physician_1.84x.png"
              alt=""
            />
            <span> Fitness Trainer</span>
          </div>

          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/137/Diabetes_medicator__1_.png"
              alt=""
            />{" "}
            <span> Yoga Instructor</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/22/Eye_care_1.84x.png"
              alt=""
            />
            <span>Mental Health</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/4/Skin___Hair_Specialist_1.84x.png"
              alt=""
            />{" "}
            <span> Physiotherapist</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/3/Cardiology_1.84x.png"
              alt=""
            />{" "}
            <span> Heart Specialist</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/23/Urology_1.84x.png"
              alt=""
            />{" "}
            <span> Nutritionist</span>
          </div>

          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/135/Physician.png"
              alt=""
            />{" "}
            <span> MD Physician</span>
          </div>

          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/1/Psychiatrist_1.84x.png"
              alt=""
            />{" "}
            <span> Physiotherapist</span>
          </div>
          <div className="maped">
            <img
              src="https://doctors-production.s3.amazonaws.com/uploads/second_opinion/image_path/27/Quit_Smoking_1.84x.png"
              alt=""
            />
            <span> Quit Smoking</span>
          </div>
        </div>
        <div>
          <button className="memberAdd">
            Looking for Alternative Treatment ?
          </button>
        </div>

        <div id="proceed">
          <Link to="/consult2">
            {" "}
            <button className="back">Back</button>
          </Link>
          <Link to="/">
            <button className="proceed" onClick={submitDetails}>
              Proceed
            </button>
          </Link>
        </div>
      </div>
      <div>
        {/* <Mgmatters />
        <Information /> */}
      </div>
    </>
  );
}

export default Consult3;
