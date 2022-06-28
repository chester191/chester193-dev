import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import ReactTooltip from "react-tooltip";
  
import "./portfolio.scss";
import {
  featuredPortfolio,
  otherPortfolio,
  // mobilePortfolio,
  // designPortfolio,
  // contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "other-projects",
      title: "Other projects",
    },
    // {
    //   id: "mobile",
    //   title: "Mobile App",
    // },
    // {
    //   id: "design",
    //   title: "Design",
    // },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "other-projects":
        setData(otherPortfolio);
        break;
      // case "mobile":
      //   setData(mobilePortfolio);
      //   break;
      // case "design":
      //   setData(designPortfolio);
      //   break;
      // case "content":
      //   setData(contentPortfolio);
      //   break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
          
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          
          <div className="item tooltip">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
            <h4>{d.tooltip}</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        ))}
        
      </div>
    </div>
  );
}