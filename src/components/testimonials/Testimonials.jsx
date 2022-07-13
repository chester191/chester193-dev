import "./testimonials.scss";
// import "../../data.js";
import{skill_set_data} from "../../data.js";
import Slider from "../../Slider";
// const imageStyle = {
//   width: "100px",
//   height: "100px",
//   // margin: "0 auto",
// };
const slides = [
  { url: "http://localhost:3001/image-1.jpg", title: "beach" },
  { url: "http://localhost:3001/image-2.jpg", title: "boat" },
  { url: "http://localhost:3001/image-3.jpg", title: "forest" },
  // { url: "http://localhost:3001/image-4.jpg", title: "city" },
  // { url: "http://localhost:3001/image-5.jpg", title: "italy" },
];
const containerStyles = {
  width: "400px",
  height: "400px",
  margin: "0 auto",
};
export default function Testimonials() {

  return (
     
    <div className="testimonials" id="testimonials">
      <h1>Skill set</h1>

      

      <div className="container">
        {skill_set_data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right"  src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.list}
            </div>
            <br />
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="slider"style={containerStyles}>
        <Slider slides={slides} />
      </div> 
    </div>
  );
}