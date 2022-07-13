import { blue } from "@material-ui/core/colors";
import { useState } from "react";
import { skill_set_data } from "./data";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "0px",
  fontSize: "45px",
  backgroundColor:"black",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "0px",
  fontSize: "45px",
  backgroundColor:"black",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? skill_set_data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === skill_set_data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    // paddingLeft:"100px",
    // paddingRight: "100px"
    // paddingRight: "140px"
    // backgroundImage: `url(${slides[currentIndex].url})`,
  };
  var d = skill_set_data[currentIndex];
  return (
    <div style={sliderStyles}>
        <div width={700}>
            <div onClick={goToPrevious} style={leftArrowStyles}>
                ❰
            </div>
            
            <div onClick={goToNext} style={rightArrowStyles}>
                ❱
            </div>
        </div>
        <div style={slideStylesWidthBackground}>
            <div className={d.featured ? "card featured" : "card"}>
                <div className="top">
                    <img src="assets/right-arrow.png" className="left" alt="" />
                    <img
                    // className="user"
                    width={300} height={200}

                    src={d.img}
                    alt=""
                    />
                  <img className="right" src={d.icon} alt="" />
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
        </div>

        <div style={dotsContainerStyles}>
        {skill_set_data.map((slide, slideIndex) => (
            <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            >
            
            ●
            </div>
        ))}
        </div>
    </div>
  );
};

export default Slider;
