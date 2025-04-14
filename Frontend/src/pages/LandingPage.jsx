import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landingpage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  return (
    <div className="landing-page-container">
      <div className="Logo">
        <img src="./src/assets/LogoSymbol.svg" alt="logo symbol" />
        <img src="./src/assets/TextLogo.svg" alt="curamap logo" />
      </div>

      <div className="MainContent">
        <div className="TextContent">
          <h1>
            Your Health Journey,
            <br />
            Mapped In a click.
          </h1>
          <img src="./src/assets/scribbling.svg" alt="scribbling" />
          <p>
            We are here to make Healthcare simple and accessible,empowering you
            <br />
            to prioritize your wellbeing without the hassle.
          </p>
          <div className="Buttons">
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>

        <img src="./src/assets/BannerPicture.svg" alt="Banner picture" />
      </div>
      <div className="second-level-content">
        <h2>Connecting Patients to Pharmacies For Easy Medication Access.</h2>
        <p className="second-level-content-p">
          {" "}
          Curamap Connects Patients With Nearby Pharmacies In Nigeria Enabling
          Them To order Genuine And Affordable Medications
          <br />
          With Ease.Our PlatForm secures access to quality Drugs. with
          convenient payment option and easy pharmacy pickup.
        </p>
        <div className="Benefits">
          <div>
            <img src="./src/assets/vector.svg" alt="vector svg image" />
            <div className="benefit-text first-benefits">
              <span className=" benefit-text-container">
                <h3>Speed and Accessibility</h3>
                <p>Convey Free and Hassle Free Mediction Access</p>
              </span>
            </div>
          </div>
          <div className="benefit-text second-benefits">
            <img src="./src/assets/padlock.svg" alt="vector svg image" />
            <span className="benefit-text-container">
              <h3>Trust & Security</h3>
              <p>
                Ensuring Patients have Access to Only Genuine Medications From
                Verified Pharmacies While Providing A Safe and Reliable Ordering
                Experience
              </p>
            </span>
          </div>

          <div className="benefit-text third-benefits">
            <span className="benefit-text-container">
              <h3>Innovation And Digital Transformation</h3>
              <p>
                Leveraging Innovation and Digital Transformation to Conect
                Patients With Verified Pharmacies For Faster , Safer and More
                convenient Medication Access
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="third-level-content">
        <div className="third-level-content-text">
          <h2>Your Health Will Thank You</h2>
          <p>
            order Easily, find Genuine Drug Instantly,Pay securely and Pick up
            With Confidence-experience ,Fast safe and Reliable Access to
            Medication With Curamap
          </p>
          <button>Browse Medications</button>
        </div>
        <img src="./src/assets/Thirdlevelimg.svg" alt="heart image" />
      </div>

      <div className="fourth-level-content">
        <h3>How is curamap Different ?</h3>
        <div className="card-container">
          <div className="card card-1">
            <div className="card-1-img-container">
              <img src="./src/assets/card-1-img.svg" alt="Tablets image" />
            </div>

            <div className="card-text-section card-text-section-1">
              <span className="name-pre">
                <h4>Tab Valsatan 2.5mg</h4>
                <p>Take one Once a Day For 7 Days</p>
              </span>
              <span className="Drug-price">
                <p>Curamap # 3,500</p>
              </span>
              <span className="Drug-price">
                <p>Curamap # 4,500</p>
              </span>
            </div>
          </div>
          <div className="card card-2">
            <div className="card-2-img-container">
              <img src="./src/assets/card-2-img.svg" alt="Tablets image" />
            </div>

            <div className="card-text-section">
              <span className="name-pre">
                <h4>Hello Adeola</h4>
                <p>Get Medication Support AnyWhere You Are</p>
              </span>
              <span className="Drug-price">
                <h4>Contact Channels</h4>
                <img src="./src/assets/contactchannels.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="card card-3">
            {" "}
            <div className="card-3-img-container">
              <img src="./src/assets/card-3-img.svg" alt="Tablets image" />
            </div>
          </div>
        </div>

        <div className="services-and-offers">
          <span>
            <h2>Affordable Prices</h2>
            <p>
              Our Goal is to Ensure you Receive Exceptional value on your
              medication and Healthcare Solutions With our Low Prices And
              Discount
            </p>
          </span>
          <span>
            <h2>Medication Support</h2>
            <p>
              We Esure you Stay Healthy and on schedule with automated Reliefs,
              Supportive Care and Proactive Patient Follow-up and Advice
            </p>
          </span>
          <span>
            <h2>Priority Pick-up</h2>
            <p>
              Skip The Wait! our Same Day Pick-up Service Ensures, You Get your
              Medications and Helathcare Solutions Quickly and Easily
            </p>
          </span>
        </div>
      </div>

      <div className="fifth-level-content">
        <h2>What Our Clients Say</h2>
        <div className="fifth-card-container">
          <div className="testimonial-card card-4">
            <div className="profile">
              <div className="image-container">
                <img src="./src/assets/clientpic1.svg" alt="" />
              </div>
              <h3>Wale</h3>
            </div>
            <p>
              curamaphas completely Transformed how i managemy prescription.As
              someone With a Hectic Schedule, The One-click Delivery Option is a
              Game-Changer.My Meds Arrive Quickly
            </p>
          </div>

          <div className="testimonial-card card-5">
            <div className="profile">
              <div className="image-container">
                <img src="./src/assets/clientpic2.svg" alt="" />
              </div>
              <h3>Vivian</h3>
            </div>

            <p>
              i Love How Curamap Makes Health care so easy. i no longer have to
              worry about long Pharmacy Ques or missing doses. The convenience
              of irdering online and the speed of delivery are unmatched,
              curamap has truly simplified my life.
            </p>
          </div>

          <div className="testimonial-card card-6">
            <div className="profile">
              <div className="image-container">
                <img src="./src/assets/clientpic3.svg" alt="" />
              </div>

              <h3>Matt</h3>
            </div>

            <p>
              i was skeptical about online pharmacy at first, But Curamap
              exceeded my expectation , The interface is user-Friendly , the
              price are great , and the delivery is super fast, its like having
              a Personal Pharmacy at your Fingertips
            </p>
          </div>
        </div>
      </div>

      <div className="sixth-level-content">
        <h2>Get Started with Curamap</h2>

        <div className="cards-container">
          <div className="card-con">
            <span className="heading">For Patients</span>
            <div className="portal portal-for-patients">
              <div className="patients-portal-card">
                <div className="patients-portal-card-img-container">
                  <img src="./src/assets/forpatients.svg" alt="" />
                </div>
                <div className="patients-portal-card-text">
                  <h3>Easy Access to Medications</h3>
                  <p>
                    Order your Medication and Healthcare Solutions With Ease
                  </p>
                  <button>Sign up</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card-con">
            <span className="heading">For Pharmacies</span>
            <div className="portal portal-for-pharmacy">
              <div className="pharmacy-portal-card">
                <div children="pharmacy-portal-card-img-container">
                  <img src="./src/assets/phamacare.svg" alt="" />
                </div>
                <div className="pharmacy-portal-card-text">
                  <h3>Pharmaceutical Care</h3>
                  <p>
                    Transforming Nigerian Pharmaceutical <br />
                    Healthcare Through Enhanced Pharmacy Fulfillment
                  </p>
                  <button>Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seventh-level-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <ul>
            <li>What does Curamap do</li>
            <li>How does Curamap Measure The Quality of its Service</li>
            <li>Is my Data safe and confidential</li>
            <li>can i order drugs for someone else ?</li>
          </ul>
        </div>
      </div>

      <div className="eight-level-content">
        <div className="First-column">
          <h3>Copyright 2025 BRIX Templates | All Rights Reserved</h3>
        </div>
        <div className="second-column">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Culture</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="third-column">
          <h3>Support</h3>
          <ul>
            <li>Getting Started</li>
            <li>Help center</li>
            <li>Server Status</li>
            <li>Report a Bug</li>
            <li>Chat support</li>
          </ul>
        </div>
        <div className="Fourth-column">
          <h3>Follow us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Linkdel</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
