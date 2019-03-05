import BaseProject from "./BaseProject";

export default {
  name: "SD Hacks 2017",
  subtitle: "Hackathon registration and administration website redesign",
  url: "https://2017.sdhacks.io/",
  startDate: "April, 2017",
  endDate: "October, 2017",
  source: "https://github.com/SDHacks/SDHacks2017",
  thumbnail: require("Assets/img/projects/sdhacks2017/logo.png"),
  feature: require("Assets/img/projects/sdhacks2017/feature.png"),
  images: [
    require("Assets/img/projects/sdhacks2017/feature.jpg"),
    require("Assets/img/projects/sdhacks2017/home.jpg"),
    require("Assets/img/projects/sdhacks2017/profile.jpg"),
    require("Assets/img/projects/sdhacks2017/live.jpg"),
    require("Assets/img/projects/sdhacks2017/admin.jpg"),
    require("Assets/img/projects/sdhacks2017/resume.jpg")
  ],
  colour: "#63cbe2",
  backgroundColour: {
    background: "#EEE"
  },
  featureBackground: require("Assets/img/projects/sdhacks2017/bg-stripes.svg"),
  featureBackgroundFlip: true,
  languages: [
    "React", "Redux", "MongoDB"
  ],
  services: "Full Stack Web Development",
  web: true,
  body: "SDHacks 2017 was a complete redesign and redevelopment of the 2016 SDHacks website, for UC San Diego’s annual hackathon. This redesign included developing the entire website on a React base, connecting to our MongoDB database through the Express server. The project included a working application and profile feature set for users, an administration back-end for organisers and a resume portal for corporate sponsors. Web Design was done by Vincent Liaw, and all development done by myself.",
  anchor: "sdhacks2017",
  dark: true
} as BaseProject;