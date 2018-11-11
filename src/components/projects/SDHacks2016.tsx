import BaseProject from "./BaseProject";

export default {
  name: "SD Hacks 2016",
  subtitle: "More than 3,000 registrations",
  url: "http://2016.sdhacks.io/",
  startDate: "June, 2016",
  endDate: "September, 2016",
  source: "https://github.com/SDHacks/SDHacks2016",
  thumbnail: require("./../../assets/img/projects/sdhacks/logo.png"),
  images: [
    require("./../../assets/img/projects/sdhacks/feature.jpg"),
    require("./../../assets/img/projects/sdhacks/website.jpg"),
    require("./../../assets/img/projects/sdhacks/live.jpg"),
    require("./../../assets/img/projects/sdhacks/resume_browser.jpg"),
    require("./../../assets/img/projects/sdhacks/prizes.jpg")
  ],
  colour: "#5A9AC2",
  languages: [
    "Node", "MongoDB", "Heroku"
  ],
  body: "SD Hacks was a stunning website designed and created for the 2016 hackathon hosted at the University of California, San Diego. As this website was targeting techies, it needed to fit all devices and browsers without compromising on design and functionality. SD Hacks incorporated a built in application system, with an accompanying administration panel and user pages. It also had a section for sponsors to filter and download participants’ resumes. All of this was built on top of a MEAN stack, utilising Heroku for the hosting.",
  anchor: "sdhacks"
} as BaseProject;