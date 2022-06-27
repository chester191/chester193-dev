import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Angular",
      // title: "Senior Developer",
      img: "/assets/skill_set_pictures/angular.png",
      // img: "../../../public/assets/skill_set_pictures/angular.png",
      // img:
      //   "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      // icon: "assets/skill_set_pictures/firebase.png",
      desc:
        "All 5 of the projects I featured in have front-ends built in angular",
      list:"Observables, AngularFireStore,Ng-models\n"
    },
    {
      id: 2,
      name: "NodeJs",
      title: "NodeJs",
      img: "assets/skill_set_pictures/nodejs.png",
      // img:
      //   "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Half of my backend project have been done in NodeJs. This was the first framework I learned that is used in web development",
      list:"firebase, Swagger (for documentation), CORS policy workarounds\n\n"
      // featured: true,
    },
    {
      id: 3,
      name: "PHP",
      title: "Php",
      img: "assets/skill_set_pictures/PHP.png",
      // img:
      //   "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Half of my backend project have been done in PHP. This is my secondary choice when working in back end",
    },
    {
      id: 4,
      name: "Java",
      title: "Java",
      img: "assets/skill_set_pictures/Java.jpg",
      // img:
      //   "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "This is my strongest language. I learned how to write my first lines of code in Java in 2013",
      list: "Data structures & algorithms, java.net, Spring boot\n"
    },
    {
      id: 5,
      name: "openCv-python",
      title: "openCv-python",
      img: "assets/skill_set_pictures/python-opencv.png",
      // img:
      //   "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "I have 6 months of experience working in Python. I mainly use it for Machine Learning Projects. (other-projects/head-count)",
      list:
        "cuda, yoloV4, flask\n"
    },
    {
      id: 6,
      name: "clojure",
      title: "clojure",
      img: "assets/skill_set_pictures/clojure.svg",
      // img:
      //   "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "I have almost 2 years of experience in clojure. My first professional web server was written in Clojure at the beginning of 2021",
      list:"reitit, konserve, chesire\n"
    }
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Skill set</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.list}
            </div>
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
    </div>
  );
}