import "./styles/Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Profile = () => {
  return (
    <>
      <section>
        <h1 className="routs">Profile</h1>

        <div className=" profile-intro container ">
          <div style={{ width: "550px" }}>
            <img
              src="https://www.fittr.com/static-content/phone_screens_c32895c20c.webp"
              alt=""
              width={"500vw"}
            />
          </div>
          <div style={{ width: "550px", padding: "20px" }}>
            <h1>Introducing the App</h1>
            <p>
              Coaches, Community, Customised Plans. Plus loads of free tools
              like Calorie Counter, Diet Tool, Step Counter, Water Reminder,
              Exercise Library, Articles, and much more!
            </p>
            <button className="btn btn-warning">Get Started</button>
          </div>
        </div>

        <div className=" container guidlines mt-4 pt-5">
          <div className="text-center">
            <h1>Building Sustainable Habits</h1>
            <p>
              Getting fit is the easy part, staying fit is the real deal. We at
              FITTR realise this and integrate fitness into your existing
              lifestyle gradually to ensure you don’t lose the results.
            </p>
            <img
              src="https://www.fittr.com/static-content/sustainable_habits_124af7fc55.webp"
              alt=""
              width={"300vw"}
            />
          </div>
          <div className="text-center">
            <h1>Monitoring and Accountability</h1>
            <p>
              Our expert coaches don’t just give you diet and training plans
              -they stay by your side as a guide and help you navigate your
              fitness journey.
            </p>
            <img
              src="https://www.fittr.com/static-content/monitoring_and_accountability_abcdbf501d.webp"
              alt=""
              width={"300vw"}
            />
          </div>
        </div>

        <div className="text-center my-5 pt-5">
          <h1>Develop healthy habits</h1>
          <p>
            Count your calories, ensure you're meeting nutrient targets, and see
            your progress over time.
          </p>
        </div>

        <div className="habits container">
          <div>
            <img
              src="https://cdn1.cronometer.com/webflow/cronometer-features-11.svg"
              alt=""
            />
            <h5>Track up to 82 micronutrients</h5>
            <p>Log your meals and track all your macro and micronutrients.</p>
          </div>
          <div>
            <img
              src="https://cdn1.cronometer.com/webflow/cronometer-features-14.svg"
              alt=""
            />
            <h5>Log meals and exercise </h5>
            <p>
              Plus, you can create custom foods, recipes, exercises and
              biometrics!
            </p>
          </div>
          <div>
            <img
              src="https://cdn1.cronometer.com/webflow/cronometer-features-16.svg"
              alt=""
            />
            <h5>Custom diet settings</h5>
            <p>Set weight, macro & nutrient targets to meet your goals.</p>
          </div>
          <div>
            <img
              src="https://cdn1.cronometer.com/webflow/cronometer-features-15.svg"
              alt=""
            />
            <h5>Fasting timer</h5>
            <p>Track your intermittent fasts and see their effect over time.</p>
          </div>
          <div>
            <img
              src="https://cdn1.cronometer.com/webflow/cronometer-features-12.svg"
              alt=""
            />
            <h5>Diet support</h5>
            <p>
              Whether your Keto, Vegan, or on one recommended by your doctor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
