import BaseProject from "./BaseProject";

export default {
  name: "MCast",
  subtitle: "Brand homepage and community forums",
  startDate: "September, 2013",
  endDate: "October, 2013",
  thumbnail: require("./../../assets/img/projects/mylixia/logo.png"),
  feature: require("./../../assets/img/projects/mylixia/feature.png"),
  images: [
    require("./../../assets/img/projects/mylixia/preview.jpg")
  ],
  colour: "#6386C2",
  backgroundColour: {
    background: "linear-gradient(to top right, #6386C2, #47618c)"
  },
  featureBackground: require("./../../assets/img/projects/mylixia/bg-shape.svg"),
  languages: [
    "PHP", "CakePHP"
  ],
  web: true,
  body: "MCast was the homepage of the legendary League of Legends streamer and player, Mylixia. It served not only as a portal for all of his fans, but also as a social media hub, a blog and a forum. My role was not to design the website, but to implement its back end, and front-end interactivity. All of the social media sections would update live, and the schedule, blog, poll and FAQ could all be updated by Mylixia from the administration panel. The website was built entirely in PHP on top of CakePHP, with jQuery used for front-end interactivity.",
  anchor: "mcast",
  small: true
} as BaseProject;