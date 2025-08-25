import "./Home.css";
import img1 from "../../src../assets/banknotes.svg";
import img2 from "../../assets/circle-stack.svg";
import img3 from "../../assets/arrows-right-left.svg";
import hero from "../../assets/bg.jpg";
// import { useNavigate } from "react-router-dom"

const Home = () => {
  // const navigate = useNavigate(); // <-- Add this hook

  // const handleGoToPill = () => {
  //   navigate("/about");
  // };

  return (
    <div className="home">
      {/* <div className="home-sec"> */}
      <div className="cont1">
        <h1>Trade with Confidence.</h1>
        <p>
          Experience next-generation trading with our advanced platform. Access
          global markets, real-time data, and professional tools designed for
          both beginners and experts.
        </p>

        <div className="bx-cont">
          <div className="bx1">
            <div>
              <img src={img1} alt="" />
            </div>
            <p>Regulated & Secure</p>
          </div>
          {/*  */}
          <div className="bx-cont">
            <div className="bx1">
              <div>
                <img src={img2} alt="" />
              </div>
              <p>Regulated & Secure</p>
            </div>
          </div>
          {/*  */}
          <div className="bx-cont">
            <div className="bx1">
              <div>
                <img src={img3} alt="" />
              </div>
              <p>Regulated & Secure</p>
            </div>
          </div>
        </div>

        {/* LOGIN -  GET STARTED  */}
        <div>
          <button className="btn1">Start Trading </button>
          <button className="btn2">Login to Account</button>
        </div>

        {/* DETAILS  */}
        <div className="detail-sec">
          <div className="detail-cont">
            <div>
              <h1>$2.5B+</h1>
              <p>Daily Volume</p>
            </div>
            {/*  */}
            <div>
              <h1>$2.5B+</h1>
              <p>Daily Volume</p>
            </div>
            {/*  */}
            <div>
              <h1>$2.5B+</h1>
              <p>Daily Volume</p>
            </div>
          </div>
        </div>
      </div>

      {/* HERO IMAGE  */}
      <div className="hero-cont">
        <img src={hero} alt="" />
      </div>



    </div>
    // </div>
  );
};

export default Home;
